/* ==========================================================================
   THE ARENA — App bootstrap & event wiring
   ========================================================================== */

(function () {
  "use strict";

  var app = document.getElementById("app");
  var toastEl = document.getElementById("toast");
  var tooltipEl = document.getElementById("tooltip");
  var roleBtn = document.getElementById("roleToggle");
  var navToggle = document.getElementById("navToggle");
  var mainNav = document.getElementById("mainNav");
  var globalSearchForm = document.getElementById("globalSearch");
  var globalSearchInput = document.getElementById("globalSearchInput");
  var suggestEl = document.getElementById("globalSuggest");
  var installBtn = document.getElementById("installBtn");
  var offlineEl = document.getElementById("offline");

  var toastTimer = null;
  function toast(msg, isErr) {
    toastEl.textContent = msg;
    toastEl.className = "toast show" + (isErr ? " toast--err" : "");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.className = "toast"; }, 2600);
  }

  /* ---------------- boot ---------------- */

  function buildFooterModules() {
    var el = document.getElementById("footerModules");
    if (!el) return;
    el.innerHTML = window.MODULES.map(function (m) {
      return '<li><a href="#/module/' + m.key + '">Module ' + m.num + " \u2014 " + RENDER.esc(m.title) + "</a></li>";
    }).join("");
  }

  function syncRoleButton() {
    var r = WIKI.currentRole();
    roleBtn.textContent = r.charAt(0).toUpperCase() + r.slice(1);
    roleBtn.title = r === "professor" ? "Role: Professor (can publish & review)" : "Role: Student (saves drafts for review)";
    roleBtn.style.borderColor = r === "professor" ? "#f2a93b" : "";
    roleBtn.style.color = r === "professor" ? "#f2a93b" : "";
  }

  /* ---------------- routing ---------------- */

  function setActiveNav(name) {
    var links = mainNav.querySelectorAll("a");
    links.forEach(function (a) {
      var target = a.getAttribute("href");
      var active = false;
      if (target === "#/" && name === "home") active = true;
      else if (target === "#/browse" && (name === "browse" || name === "search")) active = true;
      else if (target === "#/categories" && (name === "categories" || name === "category")) active = true;
      else if (target === "#/modules" && (name === "modules" || name === "module")) active = true;
      else if (target === "#/anatomy" && name === "anatomy") active = true;
      else if (target === "#/kinesiology" && name === "kinesiology") active = true;
      else if (target === "#/training" && name === "training") active = true;
      else if (target === "#/glossary" && name === "glossary") active = true;
      else if (target === "#/quiz" && name === "quiz") active = true;
      else if (target === "#/flashcards" && name === "flashcards") active = true;
      else if (target === "#/exam" && name === "exam") active = true;
      else if (target === "#/progress" && name === "progress") active = true;
      else if (target === "#/compare" && name === "compare") active = true;
      a.classList.toggle("active", active);
    });
  }

  function route() {
    var r = ROUTER.parse();
    var name = r.name;
    var html = "";
    var title = "The Arena \u2014 Academic Sports Encyclopedia";

    switch (name) {
      case "home":
        html = RENDER.home();
        break;
      case "browse":
        html = RENDER.browse({
          letter: r.query.l || "",
          cat: r.query.c || "",
          q: r.query.q || ""
        });
        break;
      case "categories":
        html = RENDER.categories();
        break;
      case "category":
        html = RENDER.category(r.segs[1]);
        break;
      case "modules":
        html = RENDER.modules();
        break;
      case "module":
        html = RENDER.module(r.segs[1]);
        break;
      case "anatomy":
        html = RENDER.anatomy();
        break;
      case "kinesiology":
        html = RENDER.kinesiology();
        break;
      case "training":
        html = RENDER.training();
        break;
      case "glossary":
        html = RENDER.glossary();
        break;
      case "compare":
        html = RENDER.compare();
        break;
      case "search":
        html = RENDER.search(r.query.q || "", {
          category: r.query.category || "",
          module: r.query.module || ""
        });
        break;
      case "article":
        html = RENDER.article(r.segs[1]);
        break;
      case "history":
        html = RENDER.history(r.segs[1]);
        break;
      case "quiz":
        if (r.segs[1]) {
          html = RENDER.quizPlay(r.segs[1]);
        } else {
          html = RENDER.quiz();
        }
        break;
      case "flashcards":
        if (r.segs[1]) {
          html = RENDER.flashcardDeck(r.segs[1]);
        } else {
          html = RENDER.flashcards();
        }
        break;
      case "exam":
        html = RENDER.exam();
        break;
      case "progress":
        html = RENDER.progress();
        break;
      case "random":
        var pool = window.ARTICLES.concat(
          window.SPORTS.list.filter(function (s) {
            return !window.ARTICLES.some(function (a) { return a.slug === s.slug; });
          })
        );
        var pick = pool[Math.floor(Math.random() * pool.length)];
        location.hash = "#/article/" + pick.slug;
        return;
      default:
        html = RENDER.notFound();
    }

    app.innerHTML = html;
    setActiveNav(name);
    document.title = title;

    /* per-page state bindings */
    bindPage(name, r);
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  function bindPage(name, r) {
    if (name === "browse") bindBrowse();
    if (name === "category") bindCategory();
    if (name === "glossary") bindGlossary();
    if (name === "search") bindSearch(r);
    if (name === "history") bindHistory(r.segs[1]);
    if (name === "article") bindArticle(r.segs[1]);
    if (name === "anatomy") bindAnatomy("#/anatomy");
    if (name === "kinesiology") bindAnatomy("#/kinesiology");
    if (name === "training") bindAnatomy("#/training");
    if (name === "quiz" && r.segs[1]) bindQuiz(r.segs[1]);
    if (name === "flashcards" && r.segs[1]) bindDeck(r.segs[1]);
    if (name === "exam") bindExam();
    if (name === "progress") bindProgress();
  }

  function bindAnatomy(route) {
    app.querySelectorAll("[data-scroll]").forEach(function (a) {
      a.addEventListener("click", function (e) {
        e.preventDefault();
        var el = document.getElementById(a.getAttribute("data-scroll"));
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState(null, "", route);
      });
    });
  }

  function bindArticle(slug) {
    /* in-page TOC scroll + diagram hover handled globally */
    app.querySelectorAll("[data-scroll]").forEach(function (a) {
      a.addEventListener("click", function (e) {
        e.preventDefault();
        var el = document.getElementById(a.getAttribute("data-scroll"));
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState(null, "", "#/article/" + slug);
      });
    });
    var printBtn = app.querySelector('[data-print]');
    if (printBtn) printBtn.addEventListener("click", function (e) {
      e.preventDefault();
      window.print();
    });
  }

  function bindBrowse() {
    app.querySelectorAll(".azbar button").forEach(function (b) {
      b.addEventListener("click", function () {
        var l = b.getAttribute("data-letter");
        var q = (app.querySelector("#browseQ") || {}).value || "";
        var c = (app.querySelector("#browseCat") || {}).value || "";
        location.hash = "#/browse?l=" + encodeURIComponent(l === "all" ? "" : l) + "&c=" + encodeURIComponent(c) + "&q=" + encodeURIComponent(q);
      });
    });
    var q = app.querySelector("#browseQ");
    var c = app.querySelector("#browseCat");
    if (q) q.addEventListener("input", function () {
      app.querySelector("#browseRows").innerHTML = RENDER_alphaRows(app, q.value, c ? c.value : "");
    });
    if (c) c.addEventListener("change", function () {
      location.hash = "#/browse?l=" + "" + "&c=" + encodeURIComponent(c.value) + "&q=" + encodeURIComponent((q || {}).value || "");
    });
  }

  function RENDER_alphaRows(scope, qVal, catVal) {
    var out = RENDER_glossSafe(function () {
      return alphaRowsLive(qVal, catVal);
    });
    return out;
  }

  function alphaRowsLive(qVal, catVal) {
    /* reuse the same logic as RENDER.browse rows by re-rendering through internal helper */
    var letter = "";
    return RENDER_publicRows(letter, catVal, qVal);
  }

  function RENDER_publicRows(letter, cat, q) {
    /* thin wrapper exposing the alpha-row builder used by the browse page */
    var list = SPORTS.list.slice().filter(function (s) {
      if (cat && s.category !== cat) return false;
      if (letter && s.name.charAt(0).toUpperCase() !== letter) return false;
      if (q && (s.name + " " + s.altNames + " " + s.desc).toLowerCase().indexOf(q) === -1) return false;
      return true;
    });
    var byLetter = {};
    list.forEach(function (s) {
      var l = s.name.charAt(0).toUpperCase();
      if (!/[A-Z]/.test(l)) l = "#";
      (byLetter[l] = byLetter[l] || []).push(s);
    });
    var letters = Object.keys(byLetter).sort();
    if (!letters.length) return '<div class="empty"><div class="empty__mark">&#127938;</div><p>No sports found.</p></div>';
    var html = "";
    letters.forEach(function (l) {
      html += '<div class="alpha-row"><div class="alpha-row__letter">' + l + "</div><div class='alpha-row__links'>";
      byLetter[l].forEach(function (s) {
        html += '<a href="#/article/' + s.slug + '">' + RENDER.esc(s.name) + '</a><span class="count">' + (ARTICLES.some(function (a) { return a.slug === s.slug; }) ? "full" : "stub") + "</span>";
      });
      html += "</div></div>";
    });
    return html;
  }

  function RENDER_glossSafe(fn) {
    try { return fn(); } catch (e) { return '<div class="empty">Something went wrong.</div>'; }
  }

  function bindCategory() {
    var q = app.querySelector("#catQ");
    if (q) q.addEventListener("input", function () {
      var v = q.value.toLowerCase();
      var cards = app.querySelectorAll("#catRows .card");
      cards.forEach(function (card) {
        card.style.display = card.textContent.toLowerCase().indexOf(v) > -1 ? "" : "none";
      });
    });
  }

  function bindGlossary() {
    var q = app.querySelector("#glossQ");
    if (q) q.addEventListener("input", function () {
      app.querySelector("#glossRows").innerHTML = RENDER.glossRows(window.GLOSSARY, q.value);
    });
  }

  function bindSearch(r) {
    var c = app.querySelector("#searchCat");
    var m = app.querySelector("#searchModule");
    function refresh() {
      location.hash = "#/search?q=" + encodeURIComponent(r.query.q || "") +
        "&category=" + encodeURIComponent(c ? c.value : "") +
        "&module=" + encodeURIComponent(m ? m.value : "");
    }
    if (c) c.addEventListener("change", refresh);
    if (m) m.addEventListener("change", refresh);
  }

  function bindHistory(slug) {
    app.querySelectorAll("[data-revert]").forEach(function (b) {
      b.addEventListener("click", function (e) {
        e.preventDefault();
        if (WIKI.revertTo(slug, b.getAttribute("data-revert"))) {
          toast("Restored that revision.");
          location.hash = "#/article/" + slug;
        }
      });
    });
  }

  /* ---------------- quiz ---------------- */

  function bindQuiz(slug) {
    var box = document.getElementById("quiz");
    if (!box) return;
    var questions = window.QUIZ.build(slug);
    var index = 0;
    var score = 0;
    var answered = false;

    function render() {
      if (index >= questions.length) { renderDone(); return; }
      var q = questions[index];
      var opts = q.options.map(function (o, i) {
        var letter = String.fromCharCode(65 + i);
        return '<button class="quiz__opt" data-i="' + i + '" data-correct="' + (i === q.correctIndex) + '"><span class="quiz__letter">' + letter + "</span><span class='quiz__text'>" + RENDER.esc(o) + "</span></button>";
      }).join("");
      box.innerHTML =
        '<div class="quiz__bar"><div class="quiz__progress"><span style="width:' + Math.round((index / questions.length) * 100) + '%"></span></div>' +
        '<span class="quiz__count">Question ' + (index + 1) + " of " + questions.length + "</span></div>" +
        '<div class="quiz__score">Score <b>' + score + "</b></div>" +
        '<div class="quiz__q"><h3>' + RENDER.esc(q.q) + "</h3></div>" +
        '<div class="quiz__opts" data-answered="false">' + opts + "</div>" +
        '<div class="quiz__feedback" hidden></div>' +
        '<div class="quiz__nav"><button class="btn" id="quizNext" hidden>Next &#8594;</button></div>';
      box.querySelectorAll(".quiz__opt").forEach(function (btn) {
        btn.addEventListener("click", function () {
          if (answered) return;
          answered = true;
          var correct = btn.getAttribute("data-correct") === "true";
          if (correct) {
            score++;
            btn.classList.add("quiz__opt--right");
          } else {
            btn.classList.add("quiz__opt--wrong");
            box.querySelector('[data-i="' + q.correctIndex + '"]').classList.add("quiz__opt--right");
          }
          var fb = box.querySelector(".quiz__feedback");
          fb.hidden = false;
          fb.className = "quiz__feedback quiz__feedback--" + (correct ? "right" : "wrong");
          fb.innerHTML = correct
            ? "<b>&#10003; Correct.</b> " + RENDER.esc(q.answer)
            : "<b>&#10007; That one was " + RENDER.esc(q.options[q.correctIndex]) + ".</b> " + RENDER.esc(q.answer);
          var next = box.querySelector("#quizNext");
          next.hidden = false;
          next.textContent = index === questions.length - 1 ? "See results \u2192" : "Next question \u2192";
          box.querySelector(".quiz__score b").textContent = score;
        });
      });
      var next = box.querySelector("#quizNext");
      if (next) next.addEventListener("click", function () {
        index++;
        answered = false;
        render();
      });
      window.scrollTo({ top: 0, behavior: "auto" });
    }

    function renderDone() {
      var pct = Math.round((score / questions.length) * 100);
      var grade = pct >= 90 ? "Outstanding \u2014 exam-ready." : pct >= 75 ? "Strong \u2014 polish the gaps." : pct >= 50 ? "Getting there \u2014 revisit the article." : "Keep studying \u2014 reread the exam focus.";
      var sport = (window.SPORTS_BY_SLUG && window.SPORTS_BY_SLUG[slug]) || {};
      window.PROGRESS.recordQuiz({ slug: slug, sport: sport.name || slug, score: score, total: questions.length, pct: pct });
      box.innerHTML =
        '<div class="quiz__done">' +
        '<div class="quiz__done-mark">' + (pct >= 75 ? "\u{1F3C6}" : pct >= 50 ? "\u{1F680}" : "\u{1F4D6}") + "</div>" +
        "<h3>Quiz complete</h3>" +
        '<p class="quiz__done-score"><b>' + score + "</b> / " + questions.length + " \u00B7 " + pct + "%</p>" +
        "<p>" + grade + "</p>" +
        '<div class="actions"><a class="btn" href="#/quiz/' + slug + '">&#8635; Try again</a>' +
        '<a class="btn btn--ghost" href="#/article/' + slug + '">Read the article</a>' +
        '<a class="btn btn--ghost" href="#/quiz">All quizzes</a></div>' +
        "</div>";
      window.scrollTo({ top: 0, behavior: "auto" });
    }

    if (!questions.length) return;
    render();
  }

  /* ---------------- flashcards ---------------- */

  function bindDeck(slug) {
    var box = document.getElementById("deck");
    if (!box) return;
    var cards = window.QUIZ.pairs(slug);
    var order = cards.slice();
    for (var i = order.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = order[i]; order[i] = order[j]; order[j] = t;
    }
    var queue = order.slice();
    var index = 0;
    var known = 0;
    var reviewed = 0;
    var flipped = false;

    function card() { return queue[index]; }

    function render() {
      if (!queue.length) { renderDone(); return; }
      var c = card();
      var pct = queue.length ? Math.round((index / (queue.length + reviewed)) * 100) : 0;
      box.innerHTML =
        '<div class="deck__bar"><div class="quiz__progress"><span style="width:' + pct + '%"></span></div>' +
        '<span class="quiz__count">Card ' + (index + 1) + " of " + queue.length + "</span></div>" +
        '<div class="card-flip" id="cardFlip">' +
        '<div class="card-flip__inner" data-face="q">' +
        '<div class="card-face card-face--q"><span class="card-face__tag">Question</span><p>' + RENDER.esc(c.q) + "</p><span class='card-face__hint'>Tap to reveal answer</span></div>" +
        '<div class="card-face card-face--a"><span class="card-face__tag">Answer</span><p>' + RENDER.esc(c.a) + "</p></div>" +
        "</div></div>" +
        '<div class="deck__nav"><button class="btn btn--ghost" id="deckAgain" hidden>&#8634; Repeat</button>' +
        '<button class="btn btn--ghost" id="deckKnow" hidden>&#10003; Knew it</button>' +
        '<button class="btn btn--danger" id="deckReview" hidden>&#10007; Review it</button></div>';
      var flip = box.querySelector("#cardFlip");
      flip.addEventListener("click", function () {
        if (flipped) return;
        flipped = true;
        box.querySelector(".card-flip__inner").classList.add("flip");
        box.querySelector("#deckAgain").hidden = false;
        box.querySelector("#deckKnow").hidden = false;
        box.querySelector("#deckReview").hidden = false;
      });
      box.querySelector("#deckKnow").addEventListener("click", function () {
        known++;
        next();
      });
      box.querySelector("#deckReview").addEventListener("click", function () {
        var c2 = card();
        queue.push(c2);
        next();
      });
      box.querySelector("#deckAgain").addEventListener("click", function () {
        flipped = false;
        box.querySelector(".card-flip__inner").classList.remove("flip");
        box.querySelector("#deckAgain").hidden = true;
        box.querySelector("#deckKnow").hidden = true;
        box.querySelector("#deckReview").hidden = true;
      });
      window.scrollTo({ top: 0, behavior: "auto" });
    }

    function next() {
      index++;
      flipped = false;
      if (index >= queue.length) { renderDone(); } else { render(); }
    }

    function renderDone() {
      window.PROGRESS.recordDeck(slug, known, order.length);
      var pct = Math.round((known / order.length) * 100);
      var grade = pct >= 75 ? "Nice \u2014 most of the deck has landed." : "Solid start \u2014 repeat the deck to lock it in.";
      box.innerHTML =
        '<div class="quiz__done">' +
        '<div class="quiz__done-mark">' + (pct >= 75 ? "\u{1F3C6}" : "\u{1F4DA}") + "</div>" +
        "<h3>Deck finished</h3>" +
        '<p class="quiz__done-score"><b>' + known + "</b> / " + order.length + " cards known \u00B7 " + pct + "%</p>" +
        "<p>" + grade + "</p>" +
        '<div class="actions"><a class="btn" href="#/flashcards/' + slug + '">&#8635; Review deck again</a>' +
        '<a class="btn btn--ghost" href="#/article/' + slug + '">Read the article</a>' +
        '<a class="btn btn--ghost" href="#/flashcards">All decks</a></div>' +
        "</div>";
      window.scrollTo({ top: 0, behavior: "auto" });
    }

    render();
  }

  /* ---------------- exam paper ---------------- */

  function bindExam() {
    var scope = app.querySelector("#examScope");
    var subWrap = app.querySelector("#examSubWrap");
    var sub = app.querySelector("#examSub");
    var count = app.querySelector("#examCount");
    var go = app.querySelector("#examGo");
    var out = app.querySelector("#examOut");
    if (!scope || !go) return;

    var catOptions = Object.keys(window.SPORTS.categories).map(function (k) {
      return '<option value="' + k + '">' + RENDER.esc(window.SPORTS.categories[k].name) + "</option>";
    }).join("");
    var sportOptions = window.SPORTS.list.slice().sort(function (a, b) { return a.name.localeCompare(b.name); }).map(function (s) {
      return '<option value="' + s.slug + '">' + RENDER.esc(s.name) + "</option>";
    }).join("");

    scope.addEventListener("change", function () {
      subWrap.hidden = scope.value === "all";
      if (scope.value === "category") sub.innerHTML = catOptions;
      if (scope.value === "sport") sub.innerHTML = sportOptions;
    });

    function buildPaper() {
      var n = parseInt(count.value, 10) || 10;
      var questions;
      if (scope.value === "sport") {
        questions = window.QUIZ.build(sub.value, n);
      } else if (scope.value === "category") {
        var cat = sub.value;
        var slugs = window.QUIZ.list().filter(function (z) { return z.category === cat; }).map(function (z) { return z.slug; });
        questions = window.QUIZ.buildMixed({ count: n, slugs: slugs });
      } else {
        questions = window.QUIZ.buildMixed({ count: n });
      }
      if (!questions.length) {
        out.innerHTML = '<div class="empty"><div class="empty__mark">&#128269;</div><p>No questions available for that selection.</p></div>';
        return;
      }
      var paper = '<div class="paper" id="paper">' +
        '<div class="paper__head"><h2>Practice paper \u2014 ' + questions.length + " questions</h2>" +
        "<p>Scope: " + (scope.value === "all" ? "Entire encyclopedia" : scope.value === "category" ? "Category" : "Sport") + " \u00B7 Generated " + new Date().toLocaleDateString() + "</p></div>";
      paper += '<ol class="paper__q">';
      questions.forEach(function (q, qi) {
        paper += "<li><p><b>" + (qi + 1) + ".</b> " + RENDER.esc(q.q) + "</p>";
        paper += '<ol class="paper__opts">';
        q.options.forEach(function (o, oi) {
          paper += '<li><label><input type="radio" name="p' + qi + '" value="' + oi + '" /> ' + String.fromCharCode(65 + oi) + ". " + RENDER.esc(o) + "</label></li>";
        });
        paper += "</ol></li>";
      });
      paper += "</ol>";
      paper += '<div class="paper__key"><h3>Answer key</h3><p>';
      questions.forEach(function (q, qi) {
        paper += "<b>" + (qi + 1) + ".</b> " + String.fromCharCode(65 + q.correctIndex) + " &middot; ";
      });
      paper += "</p><p class='small muted'>Print or save as PDF to keep a hard copy. The key is on the last page.</p></div>";
      paper += '<div class="paper__actions"><button class="btn" id="paperPrint">&#128424; Print / Save PDF</button>' +
        '<button class="btn btn--ghost" id="paperGrade">Mark my answers</button></div>';
      paper += "</div>";
      out.innerHTML = paper;
      var printBtn = out.querySelector("#paperPrint");
      if (printBtn) printBtn.addEventListener("click", function () { window.print(); });
      var grade = out.querySelector("#paperGrade");
      if (grade) grade.addEventListener("click", function () {
        var right = 0;
        questions.forEach(function (q, qi) {
          var sel = out.querySelector('input[name="p' + qi + '"]:checked');
          var ok = sel && parseInt(sel.value, 10) === q.correctIndex;
          if (ok) right++;
          out.querySelectorAll('input[name="p' + qi + '"]').forEach(function (inp) {
            inp.disabled = true;
            var oi = parseInt(inp.value, 10);
            var li = inp.closest("li");
            if (oi === q.correctIndex) li.classList.add("opt--right");
            else if (inp.checked) li.classList.add("opt--wrong");
          });
        });
        grade.hidden = true;
        toast("Marked: " + right + " / " + questions.length + " correct.");
      });
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    go.addEventListener("click", buildPaper);
  }

  /* ---------------- progress ---------------- */

  function bindProgress() {
    var resetBtn = app.querySelector("#progressReset");
    if (resetBtn) resetBtn.addEventListener("click", function () {
      if (confirm("Erase all saved progress on this device?")) {
        window.PROGRESS.reset();
        toast("Progress cleared.");
        location.hash = "#/progress";
      }
    });
  }

  /* ---------------- global search + suggestions ---------------- */

  function showSuggestions(q) {
    if (!q.trim()) { suggestEl.hidden = true; return; }
    var res = SEARCH.suggestions(q, 7);
    if (!res.length) { suggestEl.hidden = true; return; }
    suggestEl.innerHTML =
      res.map(function (r) {
        var href = r.type === "sport" ? "#/article/" + r.slug : r.type === "term" ? "#/glossary" : "#/module/" + r.slug;
        return (
          '<div class="suggest__item" data-href="' + href + '">' +
          '<span class="si__type">' + r.type + "</span>" +
          '<div><div class="si__name">' + RENDER.esc(r.title) + "</div>" +
          '<div class="si__meta">' + RENDER.esc(r.categoryName || r.blurb || "").slice(0, 60) + "</div></div>" +
          "</div>"
        );
      }).join("") +
      '<div class="suggest__foot">Press enter for full results</div>';
    suggestEl.hidden = false;
  }

  function hideSuggestions() {
    setTimeout(function () { suggestEl.hidden = true; }, 120);
  }

  /* ---------------- tooltip (diagram hover) ---------------- */

  function initTooltip() {
    document.addEventListener("mouseover", function (e) {
      var t = e.target.closest ? e.target.closest("[data-info]") : null;
      if (!t || !t.getAttribute("data-info")) return;
      tooltipEl.innerHTML = t.getAttribute("data-info");
      tooltipEl.hidden = false;
      document.addEventListener("mousemove", moveTip);
      document.addEventListener("mouseout", function out(ev) {
        if (ev.target === t || t.contains(ev.target)) return;
        tooltipEl.hidden = true;
        document.removeEventListener("mousemove", moveTip);
        document.removeEventListener("mouseout", out);
      });
    });
    function moveTip(e) {
      var pad = 14;
      var x = e.clientX + pad;
      var y = e.clientY + pad;
      var r = tooltipEl.getBoundingClientRect();
      if (x + r.width > window.innerWidth - 10) x = e.clientX - r.width - pad;
      if (y + r.height > window.innerHeight - 10) y = e.clientY - r.height - pad;
      tooltipEl.style.left = x + "px";
      tooltipEl.style.top = y + "px";
    }
  }

  /* ---------------- init ---------------- */

  function init() {
    buildFooterModules();
    syncRoleButton();

    roleBtn.addEventListener("click", function () {
      WIKI.setRole(WIKI.currentRole() === "professor" ? "student" : "professor");
      syncRoleButton();
      toast("Role switched to " + WIKI.currentRole() + ".");
    });

    navToggle.addEventListener("click", function () {
      var open = mainNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    globalSearchForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var q = globalSearchInput.value;
      hideSuggestions();
      location.hash = "#/search?q=" + encodeURIComponent(q);
    });

    globalSearchInput.addEventListener("input", function () { showSuggestions(this.value); });
    globalSearchInput.addEventListener("blur", hideSuggestions);
    suggestEl.addEventListener("mousedown", function (e) {
      var item = e.target.closest(".suggest__item");
      if (item) { location.hash = item.getAttribute("data-href"); }
    });

    initTooltip();

    /* PWA install + offline */
    var deferredPrompt = null;
    window.addEventListener("beforeinstallprompt", function (e) {
      e.preventDefault();
      deferredPrompt = e;
      installBtn.hidden = false;
    });
    if (installBtn) installBtn.addEventListener("click", function () {
      if (!deferredPrompt) return;
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then(function (choice) {
        installBtn.hidden = true;
        deferredPrompt = null;
        toast(choice.outcome === "accepted" ? "The Arena installed." : "Install skipped.");
      });
    });
    function setOffline(off) {
      offlineEl.hidden = !off;
      if (off) toast("You're offline \u2014 showing saved content.");
    }
    window.addEventListener("offline", function () { setOffline(true); });
    window.addEventListener("online", function () { setOffline(false); });
    if (!navigator.onLine) setOffline(true);

    /* SW update detection: reload once a new build takes over */
    if ("serviceWorker" in navigator) {
      var refreshing = false;
      navigator.serviceWorker.addEventListener("controllerchange", function () {
        if (refreshing) return;
        refreshing = true;
        toast("A new version is ready \u2014 refreshing\u2026");
        setTimeout(function () { location.reload(); }, 800);
      });
    }

    window.addEventListener("hashchange", route);
    route();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
