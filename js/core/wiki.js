/* ==========================================================================
   THE ARENA — Wiki Engine (client-side)
   A faithful simulation of the wiki engine for a static build:
   roles, local revision history, edit overlay and "publish" flow.
   All state lives in localStorage under the ARENA_ prefix.
   ========================================================================== */

(function () {
  "use strict";

  var PREFIX = "ARENA_";

  function get(key, def) {
    try {
      var v = localStorage.getItem(PREFIX + key);
      return v === null ? def : JSON.parse(v);
    } catch (e) { return def; }
  }
  function set(key, val) {
    try { localStorage.setItem(PREFIX + key, JSON.stringify(val)); } catch (e) {}
  }
  function uid() {
    return "r" + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  }

  /* ---------------- Roles ---------------- */
  function currentRole() {
    return get("role", "student");
  }
  function setRole(r) {
    set("role", r === "professor" ? "professor" : "student");
  }
  function canPublish() { return currentRole() === "professor"; }
  function canEdit() { return true; } /* everyone can draft */

  /* ---------------- Revisions & edit overlay ----------------
     revisions[slug] = [{ id, at, by, role, note, body }]
     edits[slug]     = { body, at, by, role, note, published }  (current local copy)
  */
  function revisionsFor(slug) {
    var all = get("revisions", {});
    return all[slug] || [];
  }
  function editsFor(slug) {
    var all = get("edits", {});
    return all[slug] || null;
  }

  function hasLocalEdit(slug) {
    return !!editsFor(slug);
  }

  /* Return the article body that should be displayed now. */
  function effectiveBody(slug) {
    var e = editsFor(slug);
    if (e && e.body) return e.body;
    return null; /* means "use the built-in article" */
  }

  function saveRevision(slug, body, note, role) {
    var all = get("revisions", {});
    all[slug] = all[slug] || [];
    all[slug].push({
      id: uid(),
      at: new Date().toISOString(),
      by: "you",
      role: role || currentRole(),
      note: note || "Updated the article",
      body: body
    });
    set("revisions", all);
  }

  /* Students save drafts; professors can publish (mark published=true). */
  function saveEdit(slug, body, note, role) {
    var all = get("edits", {});
    all[slug] = {
      body: body,
      at: new Date().toISOString(),
      by: "you",
      role: role || currentRole(),
      note: note || "Updated the article",
      published: canPublish()
    };
    set("edits", all);
    saveRevision(slug, body, note, role);
  }

  function revertTo(slug, revisionId) {
    var revs = revisionsFor(slug);
    var rev = revs.filter(function (r) { return r.id === revisionId; })[0];
    if (!rev) return false;
    var all = get("edits", {});
    all[slug] = {
      body: rev.body,
      at: rev.at,
      by: rev.by,
      role: rev.role,
      note: "Reverted to revision " + rev.id.slice(0, 6),
      published: canPublish()
    };
    set("edits", all);
    return true;
  }

  function resetArticle(slug) {
    var all = get("edits", {});
    delete all[slug];
    set("edits", all);
  }

  /* Fake "peer review" for professors: approving marks the revision set */
  function setReviewed(slug) {
    var all = get("reviewed", {});
    all[slug] = Date.now();
    set("reviewed", all);
  }
  function isReviewed(slug) { return !!get("reviewed", {})[slug]; }

  /* ---------------- Contributors ------------------ */
  function contributorCount() {
    var revs = get("revisions", {});
    var names = {};
    Object.keys(revs).forEach(function (slug) {
      revs[slug].forEach(function (r) { if (r.by) names[r.by] = true; });
    });
    return Math.max(Object.keys(names).length, 14); /* seeded baseline */
  }
  function editCount() {
    var revs = get("revisions", {});
    var n = 0;
    Object.keys(revs).forEach(function (slug) { n += revs[slug].length; });
    return n;
  }

  window.WIKI = {
    currentRole: currentRole,
    setRole: setRole,
    canPublish: canPublish,
    canEdit: canEdit,
    revisionsFor: revisionsFor,
    hasLocalEdit: hasLocalEdit,
    effectiveBody: effectiveBody,
    saveEdit: saveEdit,
    revertTo: revertTo,
    resetArticle: resetArticle,
    setReviewed: setReviewed,
    isReviewed: isReviewed,
    contributorCount: contributorCount,
    editCount: editCount
  };
})();
