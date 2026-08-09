/* ==========================================================================
   THE ARENA — Quiz engine
   Builds multiple-choice practice quizzes from the "Exam focus" Q&A that
   already lives in every article (the `**Q** — ... **A** — ...` pairs).
   ========================================================================== */

(function () {
  "use strict";

  var A = window.ARTICLES || [];

  /* Strip markdown bold markers from a string for display */
  function plain(s) {
    return String(s || "").replace(/\*\*/g, "").replace(/\*/g, "").trim();
  }

  /* Extract [ { q, a } ] pairs from one article body */
  function extractPairs(body) {
    var pairs = [];
    if (!body) return pairs;
    var lines = body.split("\n");
    for (var i = 0; i < lines.length; i++) {
      var line = lines[i].trim();
      var m = line.match(/^\d+\.\s+\*\*Q\*\*\s*[\u2013\u2014-]\s*(.+?)\s*\*\*A\*\*\s*[\u2013\u2014-]\s*(.+)$/);
      if (m) {
        pairs.push({ q: plain(m[1]), a: plain(m[2]) });
      }
    }
    return pairs;
  }

  /* Flat list of every Q/A in the encyclopedia (for distractor pool) */
  var allPairs = (function () {
    var out = [];
    A.forEach(function (art) {
      (art.sections || []).forEach(function (s) {
        extractPairs(s.body).forEach(function (p) {
          p.slug = art.slug;
          out.push(p);
        });
      });
    });
    return out;
  })();

  /* Fisher–Yates shuffle (returns a new array) */
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  /* Pick `n` wrong-answer options that differ from the correct one */
  function distractors(correct, n) {
    var seen = {};
    seen[correct] = true;
    var picks = [];
    var candidates = allPairs;
    var tries = 0;
    while (picks.length < n && tries < 200) {
      tries++;
      var c = candidates[Math.floor(Math.random() * candidates.length)];
      if (!c || seen[c.a]) continue;
      seen[c.a] = true;
      picks.push(c.a);
    }
    return picks;
  }

  /* Build one MCQ from a pair, tagging it with its sport */
  function toQuestion(p) {
    var sport = window.SPORTS_BY_SLUG && window.SPORTS_BY_SLUG[p.slug];
    var opts = distractors(p.a, 3);
    opts.push(p.a);
    var options = shuffle(opts);
    return {
      q: p.q,
      answer: p.a,
      options: options,
      correctIndex: options.indexOf(p.a),
      slug: p.slug,
      sport: sport ? sport.name : p.slug
    };
  }

  /* Build `maxQ` multiple-choice questions for one article */
  function build(slug, maxQ) {
    var art = A.filter(function (a) { return a.slug === slug; })[0];
    if (!art) return [];
    var pairs = [];
    (art.sections || []).forEach(function (s) {
      extractPairs(s.body).forEach(function (p) { pairs.push(p); });
    });
    pairs.forEach(function (p) { p.slug = art.slug; });
    if (!pairs.length) return [];
    maxQ = maxQ || pairs.length;
    return shuffle(pairs).slice(0, Math.min(maxQ, pairs.length)).map(toQuestion);
  }

  /* Build a mixed-sport paper from the whole bank.
     opts: { count, slugs: [] (optional filter) } */
  function buildMixed(opts) {
    opts = opts || {};
    var pool = allPairs.slice();
    if (opts.slugs && opts.slugs.length) {
      pool = pool.filter(function (p) { return opts.slugs.indexOf(p.slug) > -1; });
    }
    pool = shuffle(pool);
    var count = Math.min(opts.count || 10, pool.length);
    return pool.slice(0, count).map(toQuestion);
  }

  /* Raw Q/A pairs for one article (used by the flashcard deck) */
  function pairs(slug) {
    var art = A.filter(function (a) { return a.slug === slug; })[0];
    if (!art) return [];
    var out = [];
    (art.sections || []).forEach(function (s) {
      extractPairs(s.body).forEach(function (p) {
        p.slug = art.slug;
        out.push(p);
      });
    });
    return out;
  }

  /* Summary of every article that has at least one question */
  function list() {
    return A.filter(function (art) {
      return (art.sections || []).some(function (s) {
        return extractPairs(s.body).length > 0;
      });
    }).map(function (art) {
      var sport = window.SPORTS_BY_SLUG && window.SPORTS_BY_SLUG[art.slug];
      var count = 0;
      (art.sections || []).forEach(function (s) { count += extractPairs(s.body).length; });
      return {
        slug: art.slug,
        title: art.title,
        emoji: art.emoji || "",
        category: art.category,
        count: count,
        sportName: sport ? sport.name : art.title,
        categoryName: (window.SPORTS.categories[art.category] || {}).name || art.category
      };
    });
  }

  window.QUIZ = {
    build: build,
    buildMixed: buildMixed,
    pairs: pairs,
    list: list,
    total: function () { return allPairs.length; },
    extract: extractPairs
  };
})();
