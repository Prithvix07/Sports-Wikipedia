/* ==========================================================================
   THE ARENA — Service worker
   Cache-first app shell so the encyclopedia works fully offline once visited.
   Version the CACHE name to bust old caches on deploy.
   ========================================================================== */

var CACHE = "arena-v6";
var SHELL = [
  "./",
  "./index.html",
  "./manifest.json",
  "./css/styles.css",
  "./js/data/sports.js",
  "./js/data/glossary.js",
  "./js/data/modules.js",
  "./js/data/articles.js",
  "./js/data/anatomy.js",
  "./js/core/markdown.js",
  "./js/core/diagrams.js",
  "./js/core/search.js",
  "./js/core/wiki.js",
  "./js/core/quiz.js",
  "./js/core/progress.js",
  "./js/core/render.js",
  "./js/core/router.js",
  "./js/app.js",
  "./icons/icon-180.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];

/* Install: precache the shell, skip waiting so the new SW activates at once */
self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (cache) {
      return cache.addAll(SHELL);
    }).then(function () { return self.skipWaiting(); })
  );
});

/* Activate: drop old caches, take control of open clients */
self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

/* Fetch: cache-first, falling back to network (which then fills the cache).
   Navigation requests fall back to the cached shell so every route works offline. */
self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET") return;
  var url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  if (req.mode === "navigate") {
    e.respondWith(
      fetch(req).then(function (res) {
        var copy = res.clone();
        caches.open(CACHE).then(function (cache) { cache.put(req, copy); });
        return res;
      }).catch(function () {
        return caches.match(req).then(function (hit) {
          return hit || caches.match("./index.html");
        });
      })
    );
    return;
  }

  e.respondWith(
    caches.match(req).then(function (hit) {
      if (hit) return hit;
      return fetch(req).then(function (res) {
        if (res && res.status === 200) {
          var copy = res.clone();
          caches.open(CACHE).then(function (cache) { cache.put(req, copy); });
        }
        return res;
      });
    })
  );
});
