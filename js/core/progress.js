/* ==========================================================================
   THE ARENA — Progress store
   Tracks quiz results, flashcard mastery and the study streak in
   localStorage so a student's progress survives reloads and offline use.
   ========================================================================== */

(function () {
  "use strict";

  var PREFIX = "arena.progress.";
  var QUIZ_KEY = PREFIX + "quiz";
  var CARDS_KEY = PREFIX + "cards";
  var STREAK_KEY = PREFIX + "streak";

  function read(key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) { return fallback; }
  }
  function write(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) { /* storage full or blocked */ }
  }

  function todayStr() {
    var d = new Date();
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  }
  function yesterdayStr(s) {
    var d = new Date(s + "T00:00:00");
    d.setDate(d.getDate() - 1);
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  }

  /* ---------------- quiz results ---------------- */

  function quizHistory() {
    return read(QUIZ_KEY, []);
  }

  function recordQuiz(result) {
    var h = quizHistory();
    h.push(Object.assign({ at: new Date().toISOString(), today: todayStr() }, result));
    if (h.length > 200) h = h.slice(h.length - 200);
    write(QUIZ_KEY, h);
    touchStreak();
    return h;
  }

  /* best percentage per sport, plus a couple of summary numbers */
  function quizSummary() {
    var h = quizHistory();
    var bySport = {};
    var attempts = 0, totalQ = 0, totalRight = 0;
    h.forEach(function (r) {
      attempts++;
      totalQ += r.total || 0;
      totalRight += r.score || 0;
      if (!bySport[r.slug]) bySport[r.slug] = { slug: r.slug, sport: r.sport, best: 0, attempts: 0 };
      bySport[r.slug].attempts++;
      bySport[r.slug].best = Math.max(bySport[r.slug].best, r.pct || 0);
    });
    return {
      attempts: attempts,
      questionsAnswered: totalQ,
      correct: totalRight,
      accuracy: totalQ ? Math.round((totalRight / totalQ) * 100) : 0,
      bySport: Object.keys(bySport).map(function (k) { return bySport[k]; })
    };
  }

  /* ---------------- flashcards ---------------- */

  function cardMastery() {
    return read(CARDS_KEY, {});
  }

  /* record how a sport deck went: known of total */
  function recordDeck(slug, known, total) {
    var m = cardMastery();
    var cur = m[slug] || { known: 0, seen: 0, reviews: 0 };
    cur.seen += total;
    cur.known += known;
    cur.reviews++;
    cur.updated = todayStr();
    m[slug] = cur;
    write(CARDS_KEY, m);
    touchStreak();
    return cur;
  }

  function deckStatus(slug) {
    return cardMastery()[slug] || null;
  }

  /* ---------------- streak ---------------- */

  function touchStreak() {
    var s = read(STREAK_KEY, { count: 0, last: "" });
    var t = todayStr();
    if (s.last === t) return s;
    s.count = s.last === yesterdayStr(t) ? (s.count || 0) + 1 : 1;
    s.last = t;
    write(STREAK_KEY, s);
    return s;
  }

  function streak() {
    return read(STREAK_KEY, { count: 0, last: "" });
  }

  /* ---------------- combined ---------------- */

  function all() {
    var q = quizSummary();
    var c = cardMastery();
    var s = streak();
    var decks = Object.keys(c).map(function (k) {
      var d = c[k];
      var sport = window.SPORTS_BY_SLUG && window.SPORTS_BY_SLUG[k];
      return { slug: k, sport: sport ? sport.name : k, known: d.known, seen: d.seen, mastery: d.seen ? Math.round((d.known / d.seen) * 100) : 0 };
    });
    return {
      quiz: q,
      decks: decks,
      streak: s
    };
  }

  function reset() {
    try {
      localStorage.removeItem(QUIZ_KEY);
      localStorage.removeItem(CARDS_KEY);
      localStorage.removeItem(STREAK_KEY);
    } catch (e) { /* ignore */ }
  }

  window.PROGRESS = {
    recordQuiz: recordQuiz,
    quizHistory: quizHistory,
    quizSummary: quizSummary,
    recordDeck: recordDeck,
    deckStatus: deckStatus,
    cardMastery: cardMastery,
    touchStreak: touchStreak,
    streak: streak,
    all: all,
    reset: reset
  };
})();
