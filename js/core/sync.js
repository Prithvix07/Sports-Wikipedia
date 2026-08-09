/* ==========================================================================
   THE ARENA — Sync layer (client side)
   Connects the offline PWA to the optional backend (server/index.js).
   Everything keeps working with no server: sync is purely additive.
   State is stored in localStorage under arena.sync.*
   ========================================================================== */

(function () {
  "use strict";

  var PREFIX = "arena.sync.";
  var DEFAULT_URL = "http://localhost:8080/api";
  var serverUrl = null;
  var token = null;
  var user = null;
  var online = false;          // last known connection status
  var lastError = null;

  function read(key, def) {
    try {
      var v = localStorage.getItem(PREFIX + key);
      return v === null ? def : JSON.parse(v);
    } catch (e) { return def; }
  }
  function write(key, val) {
    try { localStorage.setItem(PREFIX + key, JSON.stringify(val)); } catch (e) {}
  }

  function base() {
    if (serverUrl) return serverUrl;
    var saved = read("url", null);
    if (saved) { serverUrl = saved; return saved; }
    return DEFAULT_URL;
  }

  function request(method, path, body) {
    var opts = {
      method: method,
      headers: { "Content-Type": "application/json" }
    };
    if (token) opts.headers["Authorization"] = "Bearer " + token;
    if (body !== undefined) opts.body = JSON.stringify(body);
    return fetch(base() + path, opts).then(function (res) {
      return res.json().then(function (data) {
        if (!res.ok) throw new Error(data.error || ("Server error " + res.status));
        return data;
      });
    });
  }

  function setOnline(v) { online = v; emit(); }
  function setError(msg) { lastError = msg; emit(); }

  /* tiny pub/sub so the UI can refresh when sync state changes */
  var listeners = [];
  function onChange(fn) { listeners.push(fn); }
  function emit() { listeners.forEach(function (f) { try { f(snapshot()); } catch (e) {} }); }

  function snapshot() {
    return { online: online, user: user, lastError: lastError };
  }

  /* ---------------- auth ---------------- */

  function persistSession() {
    write("token", token);
    write("user", user);
  }

  function register(name, passcode, role) {
    return request("POST", "/auth/register", { name: name, passcode: passcode, role: role }).then(function (data) {
      token = data.token; user = data.user; lastError = null;
      persistSession(); setOnline(true);
      return data.user;
    });
  }

  function login(name, passcode) {
    return request("POST", "/auth/login", { name: name, passcode: passcode }).then(function (data) {
      token = data.token; user = data.user; lastError = null;
      persistSession(); setOnline(true);
      return data.user;
    });
  }

  function logout() {
    if (token) { try { request("POST", "/auth/logout", {}); } catch (e) {} }
    token = null; user = null;
    persistSession(); setOnline(false);
  }

  /* Is there a saved session (even before checkSession has verified it)? */
  function hasSession() {
    return !!(token || read("token", null));
  }

  function checkSession() {
    token = read("token", null);
    user = read("user", null);
    if (!token) return Promise.resolve(null);
    return request("GET", "/me").then(function (data) {
      user = data.user; persistSession(); setOnline(true); return user;
    }).catch(function (e) {
      setError(e.message);
      return null;
    });
  }

  /* ---------------- progress sync ---------------- */

  function pushProgress(progress) {
    return request("POST", "/sync/progress", { progress: progress }).then(function (data) {
      setOnline(true); setError(null);
      return data.progress;
    });
  }

  function pullProgress() {
    return request("GET", "/progress").then(function (data) {
      setOnline(true); setError(null);
      return data.progress;
    });
  }

  /* ---------------- wiki sync ---------------- */

  function pushWiki(slug, body, note) {
    return request("PUT", "/wiki/" + encodeURIComponent(slug), { body: body, note: note }).then(function (data) {
      setOnline(true); setError(null);
      return data;
    });
  }

  function publishWiki(slug) {
    return request("POST", "/wiki/" + encodeURIComponent(slug) + "/publish").then(function (data) {
      setOnline(true); setError(null);
      return data;
    });
  }

  function pullWiki() {
    return request("GET", "/wiki").then(function (data) {
      setOnline(true); setError(null);
      return data;
    });
  }

  /* ---------------- articles ---------------- */

  function fetchArticle(slug) {
    return request("GET", "/articles/" + encodeURIComponent(slug)).then(function (data) {
      setOnline(true); setError(null);
      return data;
    });
  }

  window.SYNC = {
    base: base,
    register: register,
    login: login,
    logout: logout,
    checkSession: checkSession,
    pushProgress: pushProgress,
    pullProgress: pullProgress,
    pushWiki: pushWiki,
    publishWiki: publishWiki,
    pullWiki: pullWiki,
    fetchArticle: fetchArticle,
    hasSession: hasSession,
    onChange: onChange,
    snapshot: snapshot
  };
})();
