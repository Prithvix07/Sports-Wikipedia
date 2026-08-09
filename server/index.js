/* ==========================================================================
   THE ARENA — Backend (zero-dependency Node server)
   --------------------------------------------------------------------------
   A small HTTP server with two jobs:
     1. Serve the static app (so you can run the whole site from one command).
     2. Provide a JSON API for the sync & accounts service:
        - user accounts (register / login / logout / me)
        - cross-device progress sync (quiz results, flashcards, streak)
        - shared wiki: save edits/revisions, professors can publish

   No external packages — only Node's built-in http, fs, path, crypto.
   Data is stored in a single JSON file: server/data/store.json

   Run:  node server/index.js          (defaults to port 8080)
   Or:   node server/index.js 3000
   ========================================================================== */

"use strict";

var http = require("http");
var fs = require("fs");
var path = require("path");
var crypto = require("crypto");

var ROOT = path.join(__dirname, "..");           // project root (serves the app)
var DATA_DIR = path.join(__dirname, "data");
var DATA_FILE = path.join(DATA_DIR, "store.json");
var PORT = parseInt(process.argv[2], 10) || 8080;

/* --------------------------------------------------------------------------
   Storage — a tiny JSON document store persisted to disk on every write.
   -------------------------------------------------------------------------- */

var EMPTY_STORE = { users: {}, tokens: {}, progress: {}, edits: {}, revisions: {} };

function ensureStore() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(EMPTY_STORE, null, 2));
  }
}

function readStore() {
  try {
    var raw = fs.readFileSync(DATA_FILE, "utf8");
    var data = JSON.parse(raw);
    return Object.assign({}, EMPTY_STORE, data);
  } catch (e) {
    return Object.assign({}, EMPTY_STORE);
  }
}

function writeStore(store) {
  try {
    var tmp = DATA_FILE + ".tmp";
    fs.writeFileSync(tmp, JSON.stringify(store, null, 2));
    fs.renameSync(tmp, DATA_FILE);
  } catch (e) { /* best effort persistence */ }
}

/* --------------------------------------------------------------------------
   Helpers
   -------------------------------------------------------------------------- */

function uid(prefix) {
  return (prefix || "r") + Date.now().toString(36) + crypto.randomBytes(3).toString("hex");
}

function sha256(text, salt) {
  return crypto.createHmac("sha256", salt).update(String(text)).digest("hex");
}

function json(res, status, obj) {
  var body = JSON.stringify(obj);
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS"
  });
  res.end(body);
}

function readBody(req) {
  return new Promise(function (resolve) {
    var chunks = [];
    req.on("data", function (c) { chunks.push(c); });
    req.on("end", function () {
      var raw = Buffer.concat(chunks).toString("utf8");
      if (!raw) return resolve({});
      try { resolve(JSON.parse(raw)); } catch (e) { resolve({}); }
    });
  });
}

var MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
  ".webmanifest": "application/manifest+json"
};

/* --------------------------------------------------------------------------
   Auth helpers
   -------------------------------------------------------------------------- */

function getToken(req) {
  var h = req.headers["authorization"] || "";
  if (h.indexOf("Bearer ") === 0) return h.slice(7);
  return "";
}

function authenticate(store, req) {
  var token = getToken(req);
  if (!token) return null;
  var row = store.tokens[token];
  if (!row) return null;
  return store.users[row.user] || null;
}

function issueToken(store, name) {
  var token = crypto.randomBytes(24).toString("hex");
  store.tokens[token] = { user: name, created: new Date().toISOString() };
  return token;
}

/* --------------------------------------------------------------------------
   The API router
   -------------------------------------------------------------------------- */

function handleApi(req, res, url, store) {
  var p = url.pathname;
  var parts = p.split("/").filter(Boolean);          // e.g. ["api","articles","basketball"]
  var me = authenticate(store, req);
  var userId = me ? me.name : null;

  /* ----- health ----- */
  if (p === "/api/health") {
    return json(res, 200, {
      ok: true,
      server: "arena-sync",
      time: new Date().toISOString(),
      users: Object.keys(store.users).length,
      articles: loadArticleIndex().length
    });
  }

  /* ----- register ----- */
  if (p === "/api/auth/register" && req.method === "POST") {
    return readBody(req).then(function (b) {
      var name = String(b.name || "").trim().toLowerCase();
      var pass = String(b.passcode || "");
      var role = b.role === "professor" ? "professor" : "student";
      if (!name || name.length < 2) return json(res, 400, { error: "Username must be at least 2 characters." });
      if (pass.length < 4) return json(res, 400, { error: "Passcode must be at least 4 characters." });
      if (store.users[name]) return json(res, 409, { error: "That username is already taken. Try logging in." });
      var salt = crypto.randomBytes(8).toString("hex");
      store.users[name] = { name: name, role: role, salt: salt, hash: sha256(pass, salt), created: new Date().toISOString() };
      store.progress[name] = store.progress[name] || { quiz: [], cards: {}, streak: { count: 0, last: "" } };
      var token = issueToken(store, name);
      writeStore(store);
      return json(res, 201, { token: token, user: publicUser(store.users[name]) });
    });
  }

  /* ----- login ----- */
  if (p === "/api/auth/login" && req.method === "POST") {
    return readBody(req).then(function (b) {
      var name = String(b.name || "").trim().toLowerCase();
      var pass = String(b.passcode || "");
      var u = store.users[name];
      if (!u || u.hash !== sha256(pass, u.salt)) return json(res, 401, { error: "Wrong username or passcode." });
      store.progress[name] = store.progress[name] || { quiz: [], cards: {}, streak: { count: 0, last: "" } };
      var token = issueToken(store, name);
      writeStore(store);
      return json(res, 200, { token: token, user: publicUser(u) });
    });
  }

  /* ----- logout ----- */
  if (p === "/api/auth/logout" && req.method === "POST") {
    var token = getToken(req);
    if (token && store.tokens[token]) { delete store.tokens[token]; writeStore(store); }
    return json(res, 200, { ok: true });
  }

  /* ----- me ----- */
  if (p === "/api/me" && req.method === "GET") {
    if (!me) return json(res, 401, { error: "Not signed in." });
    return json(res, 200, { user: publicUser(me) });
  }

  /* ================= progress (per user) ================= */

  if (p === "/api/progress" && req.method === "GET") {
    if (!me) return json(res, 401, { error: "Not signed in." });
    return json(res, 200, { progress: store.progress[userId] || { quiz: [], cards: {}, streak: { count: 0, last: "" } } });
  }

  /* PUT replaces the user's server copy entirely (last-write-wins). */
  if (p === "/api/progress" && req.method === "PUT") {
    if (!me) return json(res, 401, { error: "Not signed in." });
    return readBody(req).then(function (b) {
      var incoming = b.progress || b;
      store.progress[userId] = sanitizeProgress(incoming);
      writeStore(store);
      return json(res, 200, { progress: store.progress[userId] });
    });
  }

  /* POST merges incoming progress into the server copy (dedupe + max). */
  if (p === "/api/sync/progress" && req.method === "POST") {
    if (!me) return json(res, 401, { error: "Not signed in." });
    return readBody(req).then(function (b) {
      store.progress[userId] = mergeProgress(store.progress[userId] || { quiz: [], cards: {}, streak: { count: 0, last: "" } }, sanitizeProgress(b.progress || b));
      writeStore(store);
      return json(res, 200, { progress: store.progress[userId] });
    });
  }

  /* ================= wiki: shared edits + revisions ================= */

  if (p === "/api/wiki" && req.method === "GET") {
    if (!me) return json(res, 401, { error: "Not signed in." });
    return json(res, 200, { edits: store.edits, revisions: store.revisions });
  }

  /* Save an edit/revision for a slug:  PUT /api/wiki/<slug>  */
  if (parts.length === 3 && parts[0] === "api" && parts[1] === "wiki" && req.method === "PUT") {
    if (!me) return json(res, 401, { error: "Not signed in." });
    var slug = decodeURIComponent(parts[2]);
    return readBody(req).then(function (b) {
      var body = String(b.body || "");
      if (!body.trim()) return json(res, 400, { error: "Edit body is empty." });
      var note = String(b.note || "Updated the article");
      var revision = {
        id: uid("r"),
        at: new Date().toISOString(),
        by: userId,
        role: me.role,
        note: note,
        body: body
      };
      store.revisions[slug] = store.revisions[slug] || [];
      store.revisions[slug].push(revision);
      if (store.revisions[slug].length > 50) store.revisions[slug] = store.revisions[slug].slice(-50);
      store.edits[slug] = {
        body: body,
        at: revision.at,
        by: userId,
        role: me.role,
        note: note,
        published: me.role === "professor"
      };
      writeStore(store);
      return json(res, 200, { revision: revision, edit: store.edits[slug], published: me.role === "professor" });
    });
  }

  /* Publish (professors only):  POST /api/wiki/<slug>/publish */
  if (parts.length === 4 && parts[0] === "api" && parts[1] === "wiki" && parts[3] === "publish" && req.method === "POST") {
    if (!me) return json(res, 401, { error: "Not signed in." });
    if (me.role !== "professor") return json(res, 403, { error: "Only professors can publish." });
    var slugP = decodeURIComponent(parts[2]);
    var cur = store.edits[slugP];
    if (!cur) return json(res, 404, { error: "No draft exists for this article." });
    cur.published = true;
    cur.publishedAt = new Date().toISOString();
    writeStore(store);
    return json(res, 200, { edit: cur });
  }

  /* ================= articles (read-only content API) ================= */

  if (p === "/api/articles" && req.method === "GET") {
    return json(res, 200, { articles: loadArticleIndex() });
  }

  if (parts.length === 3 && parts[0] === "api" && parts[1] === "articles" && req.method === "GET") {
    var slugA = decodeURIComponent(parts[2]);
    var article = loadArticle(slugA);
    if (!article) return json(res, 404, { error: "No such article." });
    var edit = store.edits[slugA];
    return json(res, 200, { article: article, publishedBody: edit && edit.published ? edit.body : null, editMeta: edit ? { by: edit.by, at: edit.at, note: edit.note, published: !!edit.published } : null });
  }

  return json(res, 404, { error: "Unknown API route: " + p });
}

/* --------------------------------------------------------------------------
   Progress merge + sanitise
   -------------------------------------------------------------------------- */

function sanitizeProgress(p) {
  p = p || {};
  return {
    quiz: Array.isArray(p.quiz) ? p.quiz.slice(0, 500) : [],
    cards: p.cards && typeof p.cards === "object" ? p.cards : {},
    streak: { count: (p.streak && p.streak.count) || 0, last: (p.streak && p.streak.last) || "" }
  };
}

function mergeProgress(server, incoming) {
  var byKey = {};
  server.quiz.concat(incoming.quiz).forEach(function (r) {
    var key = r.today + "|" + r.slug + "|" + (r.at || "") + "|" + (r.score || 0) + "|" + (r.total || 0);
    if (!byKey[key]) byKey[key] = r;
  });
  var cards = {};
  Object.keys(server.cards || {}).forEach(function (k) { cards[k] = server.cards[k]; });
  Object.keys(incoming.cards || {}).forEach(function (k) {
    var a = cards[k] || { known: 0, seen: 0, reviews: 0 };
    var b = incoming.cards[k];
    cards[k] = {
      known: Math.max(a.known, b.known || 0),
      seen: Math.max(a.seen, b.seen || 0),
      reviews: Math.max(a.reviews, b.reviews || 0),
      updated: b.updated || a.updated || ""
    };
  });
  var streak = { count: 0, last: "" };
  [server.streak || {}, incoming.streak || {}].forEach(function (s) {
    if ((s.count || 0) >= streak.count) { streak.count = s.count; streak.last = s.last || streak.last; }
  });
  return { quiz: Object.keys(byKey).map(function (k) { return byKey[k]; }), cards: cards, streak: streak };
}

/* --------------------------------------------------------------------------
   Content access — reads the static article index so the API can expose it.
   -------------------------------------------------------------------------- */

var articleCache = null;

function loadArticles() {
  if (articleCache) return articleCache;
  try {
    var file = path.join(ROOT, "js", "data", "articles.js");
    var src = fs.readFileSync(file, "utf8");
    /* Sandbox the data file with a fake window, then read window.ARTICLES. */
    var window = {};
    var fn = new Function("window", src + "\n;return window.ARTICLES;");
    articleCache = fn(window) || [];
  } catch (e) {
    articleCache = [];
  }
  return articleCache;
}

function loadArticleIndex() {
  return loadArticles().map(function (a) {
    return { slug: a.slug, title: a.title, category: a.category, sections: (a.sections || []).length };
  });
}

function loadArticle(slug) {
  var a = loadArticles().filter(function (x) { return x.slug === slug; })[0];
  return a || null;
}

function publicUser(u) {
  return { name: u.name, role: u.role, created: u.created };
}

/* --------------------------------------------------------------------------
   Static file serving + SPA fallback
   -------------------------------------------------------------------------- */

function serveStatic(req, res, url) {
  var p = decodeURIComponent(url.pathname);
  var filePath = path.normalize(path.join(ROOT, p));
  if (p === "/") filePath = path.join(ROOT, "index.html");

  if (!filePath.startsWith(ROOT)) { res.writeHead(403); return res.end("Forbidden"); }

  fs.stat(filePath, function (err, st) {
    if (!err && st.isFile()) {
      var ext = path.extname(filePath).toLowerCase();
      res.writeHead(200, {
        "Content-Type": MIME[ext] || "application/octet-stream",
        "Cache-Control": "no-cache"
      });
      fs.createReadStream(filePath).pipe(res);
      return;
    }
    /* SPA fallback: any unknown route serves the shell (hash router handles it). */
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    fs.createReadStream(path.join(ROOT, "index.html")).pipe(res);
  });
}

/* --------------------------------------------------------------------------
   Server
   -------------------------------------------------------------------------- */

ensureStore();

var server = http.createServer(function (req, res) {
  var url = new URL(req.url, "http://" + (req.headers.host || "localhost"));

  if (req.method === "OPTIONS") {
    res.writeHead(204, {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS"
    });
    return res.end();
  }

  if (url.pathname.indexOf("/api/") === 0) {
    var store = readStore();
    return Promise.resolve(handleApi(req, res, url, store));
  }

  serveStatic(req, res, url);
});

server.listen(PORT, function () {
  console.log("The Arena backend running at  http://localhost:" + PORT);
  console.log("Static app:      http://localhost:" + PORT + "/");
  console.log("API health:      http://localhost:" + PORT + "/api/health");
});
