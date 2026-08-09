/* ==========================================================================
   THE ARENA — Search Engine
   Full-text index over sports, articles (incl. section bodies), glossary
   and syllabus modules, with category + module filtering and ranking.
   ========================================================================== */

(function () {
  "use strict";

  function norm(s) {
    return String(s || "").toLowerCase().replace(/\s+/g, " ").trim();
  }

  /* Build one big searchable index once. */
  function buildIndex() {
    var idx = [];

    /* Articles (detailed) */
    (window.ARTICLES || []).forEach(function (a) {
      var text = a.lede + " " + a.title + " " + (a.altNames || "");
      (a.sections || []).forEach(function (s) { text += " " + s.title + " " + s.body; });
      text += " " + (a.keyTerms || []).join(" ");
      idx.push({
        type: "sport",
        slug: a.slug,
        title: a.title,
        alt: a.altNames,
        category: a.category,
        categoryName: SPORTS.categories[a.category] ? SPORTS.categories[a.category].name : "",
        modules: a.modules || [],
        text: text,
        blurb: a.lede,
        weight: 3
      });
    });

    /* Directory-only sports (stubs) */
    (window.SPORTS.list || []).forEach(function (s) {
      if (ARTICLES.some(function (a) { return a.slug === s.slug; })) return;
      idx.push({
        type: "sport",
        slug: s.slug,
        title: s.name,
        alt: s.altNames,
        category: s.category,
        categoryName: SPORTS.categories[s.category] ? SPORTS.categories[s.category].name : "",
        modules: [],
        text: s.name + " " + (s.altNames || "") + " " + s.desc + " " + (s.origin || ""),
        blurb: s.desc,
        weight: 1
      });
    });

    /* Glossary */
    (window.GLOSSARY || []).forEach(function (g) {
      idx.push({
        type: "term",
        slug: null,
        title: g.t,
        alt: "",
        category: "glossary",
        categoryName: "Glossary",
        modules: [],
        text: g.t + " " + g.d,
        blurb: g.d,
        weight: 2
      });
    });

    /* Modules */
    (window.MODULES || []).forEach(function (m) {
      idx.push({
        type: "module",
        slug: m.key,
        title: "Module " + m.num + ": " + m.title,
        alt: "",
        category: "module",
        categoryName: "Syllabus Module",
        modules: [m.key],
        text: m.title + " " + m.blurb + " " + (m.topics || []).join(" "),
        blurb: m.blurb,
        weight: 2
      });
    });

    return idx;
  }

  var INDEX = buildIndex();

  /* token scoring: exact/prefix title match ranks far above a token that only
     appears inside a longer compound title (e.g. "Kabaddi" must beat "Circle Kabaddi"). */
  function score(item, tokens) {
    var t = norm(item.title);
    var full = norm(item.text);
    var alt = norm(item.alt);
    var s = 0;
    tokens.forEach(function (tok) {
      if (t === tok || t.indexOf(tok + " ") === 0) s += 80;   /* exact name or starts with it */
      else if (t.indexOf(tok) === 0) s += 60;
      else if (t.indexOf(" " + tok) > -1) s += 40;            /* word inside a compound title */
      else if (t.indexOf(tok) > -1) s += 25;
      if (alt && alt.indexOf(tok) > -1) s += 15;
      if (full.indexOf(tok) > -1) s += 6;
    });
    s += item.weight;
    return s;
  }

  window.SEARCH = {
    index: INDEX,

    query: function (q, opts) {
      opts = opts || {};
      var tokens = norm(q).split(" ").filter(Boolean);
      if (!tokens.length) return [];

      var cat = opts.category || "";
      var mod = opts.module || "";
      var type = opts.type || "";

      return INDEX
        .filter(function (it) {
          if (cat && it.category !== cat && !(cat === "sport" && it.type === "sport")) return false;
          if (cat && cat === "sport" && it.type !== "sport") return false;
          if (cat && cat !== "sport" && it.category !== cat) return false;
          if (mod && (it.modules || []).indexOf(mod) === -1) return false;
          if (type && it.type !== type) return false;
          return true;
        })
        .map(function (it) { return { it: it, s: score(it, tokens) }; })
        .filter(function (r) { return r.s > 0; })
        .sort(function (a, b) { return b.s - a.s; })
        .slice(0, opts.limit || 12)
        .map(function (r) { return r.it; });
    },

    suggestions: function (q, limit) {
      return this.query(q, { limit: limit || 8 });
    }
  };
})();
