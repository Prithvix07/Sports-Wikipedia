/* ==========================================================================
   THE ARENA — View layer
   Pure HTML builders for every route. State (edits, roles) is read from
   WIKI; content is read from SPORTS, ARTICLES, MODULES, GLOSSARY.
   ========================================================================== */

(function () {
  "use strict";

  var S = window.SPORTS;
  var A = window.ARTICLES;
  var M = window.MODULES;
  var G = window.GLOSSARY;

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function fmtDate(iso) {
    try {
      return new Date(iso).toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" });
    } catch (e) { return iso; }
  }

  function catName(key) { return (S.categories[key] || {}).name || key; }
  function catEmoji(key) { return (S.categories[key] || {}).emoji || "\u{1F3C5}"; }

  function moduleBadges(mods) {
    if (!mods || !mods.length) return "";
    return mods.map(function (k) {
      var m = MODULE_BY_KEY[k];
      return '<a class="badge badge--module" href="#/module/' + k + '" title="Syllabus module">' + esc(m ? "M" + m.num + " \u00B7 " + m.title : k) + "</a>";
    }).join(" ");
  }

  function categoryBadge(cat) {
    return '<span class="badge badge--sport">' + catEmoji(cat) + " " + esc(catName(cat)) + "</span>";
  }

  function verifiedBadge(article) {
    var extra = "";
    if (article.verified) extra = '<span class="badge badge--verified" title="Cross-checked against official rules">&#10003; Verified</span>';
    if (WIKI.isReviewed(article.slug)) extra += '<span class="badge badge--official">Reviewed by faculty</span>';
    return extra;
  }

  function card(sport) {
    var art = A.find(function (a) { return a.slug === sport.slug; });
    var href = "#/article/" + sport.slug;
    return (
      '<a class="card" href="' + href + '">' +
      '<div class="card__head">' +
      '<span class="card__icon" aria-hidden="true">' + (art ? art.emoji : "") + "</span>" +
      '<div><div class="card__cat">' + catEmoji(sport.category) + " " + esc(catName(sport.category)) + "</div>" +
      '<h3 class="card__title">' + esc(sport.name) + "</h3></div>" +
      "</div>" +
      "<p>" + esc(sport.desc) + "</p>" +
      '<div class="card__meta">' +
      (sport.origin ? "<span>" + esc(sport.origin) + "</span>" : "") +
      (sport.olympic ? '<span class="badge badge--official">' + esc(sport.olympic) + "</span>" : "") +
      "</div>" +
      "</a>"
    );
  }

  function alphaRows(filterLetter, cat, q) {
    var list = S.list.slice().filter(function (s) {
      if (cat && s.category !== cat) return false;
      if (filterLetter && s.name.charAt(0).toUpperCase() !== filterLetter) return false;
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
    if (!letters.length) return '<div class="empty"><div class="empty__mark">&#127938;</div><p>No sports found. Try clearing the filter.</p></div>';
    var html = "";
    letters.forEach(function (l) {
      html += '<div class="alpha-row"><div class="alpha-row__letter">' + l + "</div><div class='alpha-row__links'>";
      byLetter[l].forEach(function (s) {
        html += '<a href="#/article/' + s.slug + '">' + esc(s.name) + '</a><span class="count">' + (A.find(function (a) { return a.slug === s.slug; }) ? "full" : "stub") + "</span>";
      });
      html += "</div></div>";
    });
    return html;
  }

  /* ---------------- pages ---------------- */

  function renderHome() {
    var featured = A.filter(function (a) { return a.verified; }).slice(0, 8);
    var cats = Object.keys(S.categories);
    var highlights = A.filter(function (a) { return a.verified && a.modules.length >= 3; }).slice(0, 6);
    var popular = ["basketball", "football", "kabaddi", "kho-kho", "cricket", "athletics"];

    return (
      '<section class="hero">' +
      '<p class="hero__kicker">An academic encyclopedia of sport</p>' +
      '<h1 class="hero__title">Every sport on Earth, <em>written for your course</em>.</h1>' +
      '<p class="hero__lede">Rules, court dimensions, biomechanics, training, officiating and first aid \u2014 organised the way PHE and B.P.Ed programmes actually teach sport. Study by sport, by category, or by syllabus module.</p>' +
      '<div class="hero__stats">' +
      '<div class="hero__stat"><b>' + S.list.length + "</b><span>Sports covered</span></div>" +
      '<div class="hero__stat"><b>' + Object.keys(S.categories).length + "</b><span>Categories</span></div>" +
      '<div class="hero__stat"><b>' + A.length + "</b><span>Full articles</span></div>" +
      '<div class="hero__stat"><b>' + G.length + "</b><span>Glossary terms</span></div>" +
      "</div></section>" +

      '<section class="section"><div class="section__head"><h2><span class="num">01</span>Study by syllabus module</h2>' +
      '<a class="section__more" href="#/modules">All modules \u2192</a></div>' +
      '<div class="chips">' +
      M.map(function (m) {
        return '<a class="chip" href="#/module/' + m.key + '"><span>' + m.icon + "</span>" + esc(m.title) + '<span class="chip__count">' + m.num + "</span></a>";
      }).join("") +
      "</div></section>" +

      '<section class="section"><div class="section__head"><h2><span class="num">02</span>Browse by category</h2>' +
      '<a class="section__more" href="#/categories">All categories \u2192</a></div>' +
      '<div class="chips">' +
      cats.map(function (k) {
        var count = S.list.filter(function (s) { return s.category === k; }).length;
        return '<a class="chip" href="#/category/' + k + '"><span>' + S.categories[k].emoji + "</span>" + esc(S.categories[k].name) + '<span class="chip__count">' + count + "</span></a>";
      }).join("") +
      "</div></section>" +

      '<section class="section"><div class="section__head"><h2><span class="num">03</span>Popular study entries</h2></div>' +
      '<div class="grid">' +
      popular.map(function (slug) {
        var s = SPORTS_BY_SLUG[slug];
        return s ? card(s) : "";
      }).join("") +
      "</div></section>" +

      '<section class="section"><div class="section__head"><h2><span class="num">04</span>Deepest academic articles</h2>' +
      '<a class="section__more" href="#/browse">Browse the A\u2013Z \u2192</a></div>' +
      '<div class="grid">' +
      highlights.map(function (a) {
        var s = SPORTS_BY_SLUG[a.slug];
        return s ? card(s) : "";
      }).join("") +
      "</div></section>"
    );
  }

  function renderNotFound() {
    return (
      '<div class="pagehead"><p class="pagehead__kicker">404</p><h1 class="pagehead__title">Not on the team sheet</h1>' +
      "<p>We couldn't find that article. It may not exist yet \u2014 which means you can be the one to write it.</p></div>" +
      '<div class="actions"><a class="btn" href="#/">Back to home</a><a class="btn btn--ghost" href="#/browse">Browse A\u2013Z</a></div>'
    );
  }

  function renderBrowse(filters) {
    filters = filters || {};
    var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    var az = letters.map(function (l) {
      var on = filters.letter === l ? "on" : "";
      return '<button data-letter="' + l + '" class="' + on + '">' + l + "</button>";
    }).join("") + '<button data-letter="all" class="' + (filters.letter ? "" : "on") + '">All</button>';

    var catOptions = Object.keys(S.categories).map(function (k) {
      return '<option value="' + k + '"' + (filters.cat === k ? " selected" : "") + ">" + esc(S.categories[k].name) + "</option>";
    }).join("");

    return (
      '<div class="pagehead"><p class="pagehead__kicker">The index</p><h1 class="pagehead__title">Browse every sport, A\u2013Z</h1>' +
      "<p>Use the letter bar and filters to narrow the index. Entries marked <b>stub</b> are listed but not yet written in full \u2014 every stub is an open contribution.</p></div>" +
      '<div class="azbar">' + az + "</div>" +
      '<div class="filters">' +
      '<select id="browseCat" aria-label="Filter by category"><option value="">All categories</option>' + catOptions + "</select>" +
      '<input type="search" id="browseQ" placeholder="Filter by name\u2026" value="' + esc(filters.q || "") + '" />' +
      "</div>" +
      '<div id="browseRows">' + alphaRows(filters.letter || "", filters.cat || "", (filters.q || "").toLowerCase()) + "</div>"
    );
  }

  function renderCategories() {
    var html = '<div class="pagehead"><p class="pagehead__kicker">Taxonomy</p><h1 class="pagehead__title">Sports by category</h1>' +
      "<p>This is the working taxonomy used across the encyclopedia \u2014 each sport maps to exactly one primary category for browsing, plus type tags for filtering.</p></div>";
    html += '<div class="grid">';
    Object.keys(S.categories).forEach(function (k) {
      var c = S.categories[k];
      var list = S.list.filter(function (s) { return s.category === k; });
      var full = list.filter(function (s) { return A.find(function (a) { return a.slug === s.slug; }); }).length;
      html +=
        '<a class="card" href="#/category/' + k + '">' +
        '<div class="card__head"><span class="card__icon">' + c.emoji + "</span>" +
        "<div><div class='card__cat'>Category</div><h3 class='card__title'>" + esc(c.name) + "</h3></div></div>" +
        "<p>" + esc(c.blurb) + "</p>" +
        '<div class="card__meta"><span>' + list.length + " sports</span><span>" + full + " full articles</span></div>" +
        "</a>";
    });
    html += "</div>";
    return html;
  }

  function renderCategory(cat) {
    var c = S.categories[cat];
    if (!c) return renderNotFound();
    var list = S.list.filter(function (s) { return s.category === cat; });
    var html =
      '<div class="pagehead"><p class="pagehead__kicker">' + c.emoji + " Category</p><h1 class='pagehead__title'>" + esc(c.name) + "</h1><p>" + esc(c.blurb) + "</p></div>" +
      '<div class="filters"><input type="search" id="catQ" placeholder="Filter within this category\u2026" /></div>' +
      '<div id="catRows"><div class="grid">' + list.map(card).join("") + "</div></div>";
    return html;
  }

  function renderModules() {
    var html = '<div class="pagehead"><p class="pagehead__kicker">The curriculum</p><h1 class="pagehead__title">Study by syllabus module</h1>' +
      "<p>Most PHE and B.P.Ed programmes organise study around a sequence of modules. Every article here is tagged to the modules it feeds, so you can revise exactly what your exam covers.</p></div>";
    html += '<div class="grid">';
    M.forEach(function (m) {
      var count = A.filter(function (a) { return (a.modules || []).indexOf(m.key) > -1; }).length;
      html +=
        '<div class="module-card"><div class="module-card__head">' +
        '<div class="module-card__num">' + m.num + "</div>" +
        "<div><h3>" + m.icon + " " + esc(m.title) + "</h3><p>" + esc(m.semester) + " \u00B7 " + count + " articles mapped</p></div>" +
        "</div>" +
        '<div class="module-card__body"><p>' + esc(m.blurb) + "</p><ul>" +
        m.topics.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") +
        "</ul>" +
        '<a class="btn btn--small mt" href="#/module/' + m.key + '">Open module \u2192</a>' +
        "</div></div>";
    });
    html += "</div>";
    return html;
  }

  function renderModule(key) {
    var m = MODULE_BY_KEY[key];
    if (!m) return renderNotFound();
    var arts = A.filter(function (a) { return (a.modules || []).indexOf(key) > -1; });
    var html =
      '<div class="pagehead"><p class="pagehead__kicker">Module ' + m.num + " \u00B7 " + esc(m.semester) + "</p>" +
      '<h1 class="pagehead__title">' + m.icon + " " + esc(m.title) + "</h1><p>" + esc(m.blurb) + "</p></div>" +
      (key === "m1" ? '<div class="notice notice--warn"><div><b>Full study guide available.</b> This module now has a dedicated, exam-oriented study guide \u2014 systems, bones, joints, muscles, energy and a question bank. <a href="#/anatomy">Open the Anatomy &amp; Physiology study guide &#8594;</a></div></div>' : "") +
      (key === "m2" ? '<div class="notice notice--warn"><div><b>Full study guide available.</b> This module now has a dedicated, exam-oriented study guide \u2014 joint motion, planes &amp; axes, levers, projectile motion, force, momentum, impulse and centre of gravity, plus a question bank. <a href="#/kinesiology">Open the Kinesiology &amp; Biomechanics study guide &#8594;</a></div></div>' : "") +
      '<div class="notice notice--info"><div><b>What to study here.</b> These are the topics this module expects you to master:<ul>' +
      m.topics.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") +
      "</ul></div></div>" +
      '<h2 class="small" style="font-family:var(--serif);margin-bottom:6px">Articles mapped to this module</h2>' +
      '<div class="grid">' + arts.map(function (a) {
        var s = SPORTS_BY_SLUG[a.slug];
        return s ? card(s) : "";
      }).join("") + "</div>" +
      '<p class="mt small muted">Not every sport belongs to every module \u2014 the mapping reflects what the syllabus actually asks about that sport.</p>';
    return html;
  }

  /* Dedicated module study guides (js/data/anatomy.js, js/data/kinesiology.js). */
  function renderGuide(data, modKey, route) {
    if (!data || !data.chapters) return renderNotFound();
    var m = MODULE_BY_KEY[modKey];
    var stats = data.stats ? '<div class="stats">' + data.stats.map(function (s) {
      return '<div class="stat"><b>' + esc(s.value) + "</b><span>" + esc(s.label) + "</span></div>";
    }).join("") + "</div>" : "";
    var tocItems = data.chapters.map(function (c) {
      return '<li><a href="' + route + '" data-scroll="' + c.id + '">' + esc(c.title) + "</a></li>";
    }).join("");
    var chapters = data.chapters.map(function (c) {
      return '<section class="prose" id="' + c.id + '"><h2>' + esc(c.title) + "</h2>" + MARKDOWN.render(c.body) + "</section>";
    }).join("");
    var exam = (data.exam || []).map(function (e) {
      return '<div class="prose"><div class="callout callout--exam"><div><span class="callout__label">Exam question</span>' +
        "<p><b>" + esc(e.q) + "</b><br />Answer: " + esc(e.a) + "</p></div></div></div>";
    }).join("");
    return (
      '<div class="pagehead"><p class="pagehead__kicker">Module ' + esc(m.num) + " \u00B7 " + esc(m.title) + "</p>" +
      '<h1 class="pagehead__title">' + esc(m.icon) + " " + esc(m.title) + " \u2014 Study guide</h1>" +
      "<p>" + esc(data.intro) + "</p></div>" +
      stats +
      '<div class="toc"><p class="toc__title">In this study guide</p><ol>' + tocItems + "</ol></div>" +
      '<h2 class="small" style="font-family:var(--serif);margin-bottom:6px">Master guide</h2>' +
      chapters +
      '<div class="pagehead pagehead--sub" style="font-family:var(--serif);margin:18px 0 6px"><h2 class="pagehead__title">Final exam revision\u2014 question bank</h2></div>' +
      exam +
      '<div class="notice notice--info"><div><b>How to use this guide.</b> Read each chapter, then answer the exam-focus callouts aloud before checking them. Pair the key terms with the <a href="#/glossary">glossary</a> as flashcards, and link the joint and muscle tables back to the sports in the <a href="#/browse">A\u2013Z index</a>.</div></div>'
    );
  }

  function renderAnatomy() { return renderGuide(window.ANATOMY, "m1", "#/anatomy"); }
  function renderKinesiology() { return renderGuide(window.KINESIOLOGY, "m2", "#/kinesiology"); }

  function renderGlossary() {
    var cats = G.filter(function (g) { return GLOSSARY_CATS[g.c]; });
    var all = cats.slice().sort(function (a, b) { return a.t.toLowerCase() < b.t.toLowerCase() ? -1 : 1; });
    var html =
      '<div class="pagehead"><p class="pagehead__kicker">The language of the course</p><h1 class="pagehead__title">Glossary of terms</h1>' +
      "<p>Every term a PHE or B.P.Ed exam is likely to use \u2014 from energy systems to officiating fixtures \u2014 in plain language.</p></div>" +
      '<div class="filters"><input type="search" id="glossQ" placeholder="Find a term\u2026" /></div>' +
      '<div id="glossRows">' + glossRows(all, "") + "</div>";
    return html;
  }

  function glossRows(list, q) {
    if (q) {
      q = q.toLowerCase();
      list = list.filter(function (g) { return (g.t + " " + g.d).toLowerCase().indexOf(q) > -1; });
    }
    if (!list.length) return '<div class="empty"><div class="empty__mark">&#128269;</div><p>No terms match.</p></div>';
    return list.map(function (g) {
      return (
        '<div class="gloss-item">' +
        '<div class="gloss-item__term">' + esc(g.t) + "<small>" + esc(GLOSSARY_CATS[g.c]) + "</small></div>" +
        "<p>" + esc(g.d) + "</p>" +
        '<div class="gloss-item__cat">' + esc(GLOSSARY_CATS[g.c]) + "</div>" +
        "</div>"
      );
    }).join("");
  }

  function renderCompare() {
    var rows = [
      ["Sport", "Length", "Width / shape", "Net / height", "Key mark"],
      ["Basketball", "28 m", "15 m", "\u2014", "3-point arc 6.75 m"],
      ["Football", "90\u2013120 m", "45\u201390 m", "goals 7.32 m \u00D7 2.44 m", "penalty spot 11 m"],
      ["Volleyball", "18 m", "9 m", "2.43 m / 2.24 m", "3 m attack line"],
      ["Badminton", "13.40 m", "6.10 m (doubles)", "1.55 m", "short service 1.98 m"],
      ["Tennis", "23.77 m", "8.23 m / 10.97 m", "0.914 m centre", "service box 6.40 m"],
      ["Table tennis", "2.74 m", "1.525 m", "15.25 cm", "centre line (doubles)"],
      ["Handball", "40 m", "20 m", "goal 3 m \u00D7 2 m", "6 m crease"],
      ["Field hockey", "91.4 m", "55 m", "goal 3.66 m \u00D7 2.14 m", "D radius 14.63 m"],
      ["Kabaddi", "13 m", "10 m", "\u2014", "baulk 3.75 m"],
      ["Kho-Kho", "27 m", "16 m", "\u2014", "central lane 30 cm"],
      ["Sepak takraw", "13.4 m", "6.1 m", "1.52 m", "serving circle"],
      ["Throwball", "12.19 m", "18.29 m", "2.20 m", "two-touch rule"]
    ];
    var html =
      '<div class="pagehead"><p class="pagehead__kicker">Quick revision table</p><h1 class="pagehead__title">Compare playing areas</h1>' +
      "<p>One table, every court and field in the core syllabus. The single most common exam question is \"give the dimensions of the playing field\" \u2014 this is your memory aid.</p></div>" +
      '<div class="tablewrap"><table class="data compare-table">' +
      rows.map(function (r, i) {
        return "<tr>" + r.map(function (c, j) {
          return (i === 0 ? "<th>" : j === 0 ? "<td>" : "<td class='num'>") + esc(c) + (i === 0 ? "</th>" : "</td>");
        }).join("") + "</tr>";
      }).join("") +
      "</table></div>" +
      '<p class="small muted">Always confirm against the rulebook of the governing body your syllabus names \u2014 a few dimensions differ between codes (FIBA vs NBA, FIVB indoor vs beach).</p>';
    return html;
  }

  function renderContribute() {
    return (
      '<div class="pagehead"><p class="pagehead__kicker">The wiki needs you</p><h1 class="pagehead__title">Contribute to the Arena</h1>' +
      "<p>Every article on this site can be edited by students and reviewed by faculty. Your drafts live on your device as a working copy; when a professor approves, the entry is marked reviewed.</p></div>" +
      '<div class="steps">' +
      '<div class="step"><div class="step__num">1</div><div><h4>Pick a sport</h4><p>Browse the <a href="#/browse">A\u2013Z index</a> and open any article. Stubs are the easiest place to start writing.</p></div></div>' +
      '<div class="step"><div class="step__num">2</div><div><h4>Open the editor</h4><p>Hit <b>Edit this article</b>. The editor works in simple markdown \u2014 <code>## headings</code>, <code>- lists</code>, <code>[[sport-name|link text]]</code> for wiki links, and <code>>>> exam</code> callouts for exam-boxes.</p></div></div>' +
      '<div class="step"><div class="step__num">3</div><div><h4>Save as a draft</h4><p>Your draft is saved locally and a revision is recorded automatically. Nothing is overwritten \u2014 you can always revert from the <b>History</b> page.</p></div></div>' +
      '<div class="step"><div class="step__num">4</div><div><h4>Get it reviewed</h4><p>Switch your role to <b>Professor</b> (top-right button) and use <b>Publish</b> to mark the draft reviewed. Switch back to <b>Student</b> to keep drafting.</p></div></div>' +
      "</div>" +
      '<div class="notice notice--warn"><div><b>How editing works.</b> This build runs entirely in your browser \u2014 edits and revisions are stored in localStorage on this device, so they stay with you and never overwrite the built-in articles.</div></div>'
    );
  }

  function renderQuiz() {
    var quizzes = window.QUIZ.list();
    var total = window.QUIZ.total();
    if (!quizzes.length) {
      return '<div class="pagehead"><p class="pagehead__kicker">Practice mode</p><h1 class="pagehead__title">Quiz arena</h1>' +
        "<p>No exam questions have been written yet \u2014 add <code>**Q**</code> / <code>**A**</code> pairs to an article and they appear here automatically.</p></div>";
    }
    var rows = quizzes.slice().sort(function (x, y) { return x.sportName.localeCompare(y.sportName); }).map(function (z) {
      return (
        '<a class="list-row quiz-row" href="#/quiz/' + z.slug + '">' +
        "<div>" +
        '<h3 class="list-row__title">' + z.emoji + " " + esc(z.sportName) + "</h3>" +
        "<p>Practice quiz \u2014 multiple choice drawn from the article's exam focus.</p>" +
        '<div class="list-row__tags">' +
        '<span class="badge badge--sport">' + esc(z.categoryName) + "</span>" +
        '<span class="badge badge--official">' + z.count + " questions</span>" +
        "</div></div>" +
        '<div class="list-row__arrow">&#8594;</div>' +
        "</a>"
      );
    }).join("");
    return (
      '<div class="pagehead"><p class="pagehead__kicker">Practice mode</p><h1 class="pagehead__title">Quiz arena</h1>' +
      "<p>Every <b>Exam focus</b> answer in the encyclopedia becomes a multiple-choice question. Pick a sport, answer instantly, and see your score \u2014 no network, no marking.</p>" +
      '<div class="quiz-stats"><div class="quiz-stat"><b>' + quizzes.length + "</b><span>Quiz-ready sports</span></div>" +
      '<div class="quiz-stat"><b>' + total + "</b><span>Questions generated</span></div></div>" +
      "</div>" +
      rows
    );
  }

  function renderQuizPlay(slug) {
    var art = A.filter(function (a) { return a.slug === slug; })[0];
    if (!art) return renderNotFound();
    var sport = SPORTS_BY_SLUG[slug] || {};
    var questions = window.QUIZ.build(slug);
    if (!questions.length) {
      return (
        '<div class="pagehead"><p class="pagehead__kicker">Quiz</p><h1 class="pagehead__title">' + esc(sport.name || art.title) + "</h1></div>" +
        '<div class="empty"><div class="empty__mark">&#9997;&#65039;</div><p>This article has no <code>**Q** / **A**</code> exam pairs yet, so a quiz can\u2019t be generated. Add them in the editor.</p></div>' +
        '<div class="actions"><a class="btn" href="#/article/' + slug + '">Read the article</a><a class="btn btn--ghost" href="#/quiz">All quizzes</a></div>'
      );
    }
    return (
      '<nav class="article__crumbs"><a href="#/">Home</a> \u203A <a href="#/quiz">Quiz arena</a> \u203A <a href="#/article/' + slug + '">' + esc(sport.name || art.title) + "</a></nav>" +
      '<div class="pagehead"><p class="pagehead__kicker">Practice mode</p><h1 class="pagehead__title">' + (art.emoji ? art.emoji + " " : "") + esc(sport.name || art.title) + ' quiz</h1>' +
      "<p>Multiple choice from the article's <b>Exam focus</b> section. Answer, get instant feedback, then run it again to improve your score.</p></div>" +
      '<div class="quiz" id="quiz" data-slug="' + esc(slug) + '">' +
      '<div class="quiz__boot">Loading questions\u2026</div>' +
      "</div>"
    );
  }

  function renderFlashcards() {
    var decks = window.QUIZ.list().slice().sort(function (x, y) { return x.sportName.localeCompare(y.sportName); });
    if (!decks.length) {
      return '<div class="pagehead"><p class="pagehead__kicker">Study decks</p><h1 class="pagehead__title">Flashcards</h1>' +
        "<p>No exam pairs yet \u2014 add <code>**Q** / **A**</code> pairs to an article and a deck appears here.</p></div>";
    }
    var rows = decks.map(function (z) {
      var st = window.PROGRESS.deckStatus(z.slug);
      var pct = st && st.seen ? Math.round((st.known / st.seen) * 100) : null;
      var tag = pct === null ? '<span class="badge badge--sport">Not studied</span>' : '<span class="badge ' + (pct >= 75 ? "badge--verified" : "badge--sport") + '">' + pct + "% mastered</span>";
      return (
        '<a class="list-row quiz-row" href="#/flashcards/' + z.slug + '">' +
        "<div>" +
        '<h3 class="list-row__title">' + z.emoji + " " + esc(z.sportName) + "</h3>" +
        "<p>" + z.count + " cards \u2014 flip each card, self-mark what you knew.</p>" +
        '<div class="list-row__tags">' + tag + "</div></div>" +
        '<div class="list-row__arrow">&#8594;</div>' +
        "</a>"
      );
    }).join("");
    return (
      '<div class="pagehead"><p class="pagehead__kicker">Study decks</p><h1 class="pagehead__title">Flashcards</h1>' +
      "<p>The same <b>Exam focus</b> Q&amp;A as the quizzes, but as self-paced flashcards \u2014 flip, self-mark, and your mastery is tracked in <a href='#/progress'>My progress</a>.</p></div>" +
      rows
    );
  }

  function renderFlashcardDeck(slug) {
    var art = A.filter(function (a) { return a.slug === slug; })[0];
    if (!art) return renderNotFound();
    var sport = SPORTS_BY_SLUG[slug] || {};
    var cards = window.QUIZ.pairs(slug);
    if (!cards.length) {
      return (
        '<div class="pagehead"><p class="pagehead__kicker">Flashcards</p><h1 class="pagehead__title">' + esc(sport.name || art.title) + "</h1></div>" +
        '<div class="empty"><div class="empty__mark">&#127909;</div><p>This article has no <code>**Q** / **A**</code> exam pairs yet, so a deck can\u2019t be generated.</p></div>' +
        '<div class="actions"><a class="btn" href="#/article/' + slug + '">Read the article</a><a class="btn btn--ghost" href="#/flashcards">All decks</a></div>'
      );
    }
    var st = window.PROGRESS.deckStatus(slug);
    var mastered = st ? " \u00B7 " + st.known + "/" + st.seen + " known" : "";
    return (
      '<nav class="article__crumbs"><a href="#/">Home</a> \u203A <a href="#/flashcards">Flashcards</a> \u203A <a href="#/article/' + slug + '">' + esc(sport.name || art.title) + "</a></nav>" +
      '<div class="pagehead"><p class="pagehead__kicker">Study deck</p><h1 class="pagehead__title">' + (art.emoji ? art.emoji + " " : "") + esc(sport.name || art.title) + ' flashcards</h1>' +
      "<p>Tap a card to flip it. Then judge yourself honestly \u2014 <b>knew it</b> or <b>review it</b>. Cards you mark for review repeat at the end of the session.</p></div>" +
      '<div class="deck" id="deck" data-slug="' + esc(slug) + '">' +
      '<div class="deck__boot">Loading deck\u2026</div>' +
      "</div>"
    );
  }

  function renderExam() {
    var quizzes = window.QUIZ.list();
    var catOptions = Object.keys(S.categories).map(function (k) {
      return '<option value="' + k + '">' + esc(S.categories[k].name) + "</option>";
    }).join("");
    return (
      '<div class="pagehead"><p class="pagehead__kicker">Exam simulator</p><h1 class="pagehead__title">Generate a practice paper</h1>' +
      "<p>Pull a fresh multiple-choice paper straight from the question bank \u2014 single sport, a whole category, or the entire encyclopedia. A printable answer key is included.</p></div>" +
      '<div class="exam-panel">' +
      '<label class="exam-field"><span>Scope</span>' +
      '<select id="examScope"><option value="all">Entire encyclopedia</option>' +
      '<option value="category">One category\u2026</option>' +
      '<option value="sport">One sport\u2026</option></select></label>' +
      '<label class="exam-field" id="examSubWrap" hidden><span>Category / sport</span><select id="examSub"></select></label>' +
      '<label class="exam-field"><span>Number of questions</span>' +
      '<select id="examCount"><option value="5">5</option><option value="10" selected>10</option><option value="15">15</option><option value="20">20</option></select></label>' +
      '<div class="exam-actions"><button class="btn" id="examGo">&#9999;&#65039; Generate paper</button></div>' +
      "</div>" +
      '<div id="examOut"></div>'
    );
  }

  function renderProgress() {
    var p = window.PROGRESS.all();
    var q = p.quiz;
    var quizRows = q.bySport.sort(function (x, y) { return y.best - x.best; }).map(function (s) {
      return '<div class="list-row"><div><h3 class="list-row__title">' + esc(s.sport) + "</h3>" +
        '<div class="list-row__tags"><span class="badge badge--official">' + s.attempts + " attempt" + (s.attempts === 1 ? "" : "s") + "</span></div></div>" +
        '<div class="list-row__arrow">' + s.best + '% best</div></div>';
    }).join("");
    var deckRows = p.decks.map(function (d) {
      var cls = d.mastery >= 75 ? "badge--verified" : "badge--sport";
      return '<div class="list-row"><div><h3 class="list-row__title">' + esc(d.sport) + "</h3>" +
        '<div class="list-row__tags"><span class="badge badge--official">' + d.reviews + " deck review" + (d.reviews === 1 ? "" : "s") + "</span></div></div>" +
        '<div class="list-row__arrow">' + d.mastery + '% mastered</div></div>';
    }).join("");
    var html =
      '<div class="pagehead"><p class="pagehead__kicker">Your study dashboard</p><h1 class="pagehead__title">My progress</h1>' +
      "<p>Everything is stored on this device \u2014 quiz scores, flashcard mastery and your study streak. Use it to spot what needs revision before the exam.</p></div>";
    html += '<div class="stats"><div class="stat"><b>' + p.streak.count + "</b><span>day streak</span></div>" +
      '<div class="stat"><b>' + q.attempts + "</b><span>quizzes taken</span></div>" +
      '<div class="stat"><b>' + q.questionsAnswered + "</b><span>questions answered</span></div>" +
      '<div class="stat"><b>' + q.accuracy + '%</b><span>overall accuracy</span></div></div>';
    html += '<div class="progress-cols">';
    html += '<div class="progress-col"><h2>Quiz best scores</h2>' + (quizRows || '<p class="muted">Take a quiz to start tracking.</p>') + "</div>";
    html += '<div class="progress-col"><h2>Flashcard mastery</h2>' + (deckRows || '<p class="muted">Run a flashcard deck to start tracking.</p>') + "</div>";
    html += "</div>";
    html += '<div class="actions"><button class="btn btn--ghost btn--danger" id="progressReset">Reset all progress</button></div>';
    return html;
  }

  function renderSearch(q, filters) {
    filters = filters || {};
    var results = SEARCH.query(q, filters);
    var html =
      '<div class="pagehead"><p class="pagehead__kicker">Instant full-text search</p><h1 class="pagehead__title">Search results</h1>' +
      '<p>' + results.length + " results for <b>&ldquo;" + esc(q) + "&rdquo;</b>.</p></div>" +
      '<div class="filters">' +
      '<select id="searchCat"><option value="">All categories</option>' +
      Object.keys(S.categories).map(function (k) {
        return '<option value="' + k + '"' + (filters.category === k ? " selected" : "") + ">" + esc(S.categories[k].name) + "</option>";
      }).join("") +
      '<option value="glossary"' + (filters.category === "glossary" ? " selected" : "") + ">Glossary</option>" +
      '<option value="module"' + (filters.category === "module" ? " selected" : "") + ">Modules</option>" +
      "</select>" +
      '<select id="searchModule"><option value="">Any module</option>' +
      M.map(function (m) { return '<option value="' + m.key + '">' + esc(m.title) + "</option>"; }).join("") +
      "</select>" +
      "</div>" +
      (results.length ? '<div class="list-rows">' + results.map(function (r) {
        var href = r.type === "sport" ? "#/article/" + r.slug : r.type === "term" ? "#/glossary" : "#/module/" + r.slug;
        return (
          '<div class="list-row"><div>' +
          '<h3 class="list-row__title"><a href="' + href + '">' + esc(r.title) + "</a></h3>" +
          "<p>" + esc(r.blurb || r.text.slice(0, 180)) + "</p>" +
          '<div class="list-row__tags">' +
          '<span class="badge badge--sport">' + (r.type === "sport" ? "Sport" : r.type === "term" ? "Glossary" : "Module") + "</span>" +
          (r.categoryName && r.type === "sport" ? '<span class="badge badge--sport">' + esc(r.categoryName) + "</span>" : "") +
          moduleBadges(r.modules) +
          "</div></div>" +
          '<div class="list-row__arrow">&#8594;</div></div>'
        );
      }).join("") + "</div>" : '<div class="empty"><div class="empty__mark">&#128269;</div><p>Nothing matched. Try a shorter or more general term.</p></div>');
    return html;
  }

  function renderEdit(slug) {
    var r = resolveArticle(slug);
    if (!r) return renderNotFound();
    var a = r.article;
    var current = WIKI.effectiveBody(slug);
    var source = current || a.sections.map(function (s) {
      return "## " + s.title + "\n\n" + s.body.replace(/^\s+|\s+$/g, "") + "\n";
    }).join("\n");

    return (
      '<div class="pagehead"><p class="pagehead__kicker">Wiki editor</p><h1 class="pagehead__title">Editing: ' + esc(a.title) + "</h1>" +
      "<p>You are editing as <b>" + esc(WIKI.currentRole()) + "</b>." +
      (WIKI.canPublish() ? " Professors can publish (mark reviewed)." : " Students save drafts for faculty review.") + "</p></div>" +
      '<div class="editor">' +
      '<div class="editor__bar">' +
      '<button class="btn btn--small btn--ghost" data-ins="## ">H2</button>' +
      '<button class="btn btn--small btn--ghost" data-ins="**bold**">B</button>' +
      '<button class="btn btn--small btn--ghost" data-ins="\n- item">List</button>' +
      '<button class="btn btn--small btn--ghost" data-ins="\n>>> exam\ntitle\ncontent">Exam box</button>' +
      '<button class="btn btn--small btn--ghost" data-ins="[[basketball|basketball]]">Wiki-link</button>' +
      '<span class="editor__hint">Markdown \u00B7 <code>##</code> headings \u00B7 <code>&gt;&gt;&gt; exam</code> callouts \u00B7 <code>[[slug|text]]</code> links</span>' +
      "</div>" +
      '<textarea id="editorBox" spellcheck="false">' + esc(source) + "</textarea>" +
      '<div class="editor__foot">' +
      '<button class="btn" id="saveEdit">Save draft</button>' +
      (WIKI.canPublish() ? '<button class="btn btn--ghost" id="publishEdit">Publish (mark reviewed)</button>' : "") +
      '<button class="btn btn--ghost" id="cancelEdit">Cancel</button>' +
      (WIKI.hasLocalEdit(slug) ? '<button class="btn btn--ghost btn--danger" id="resetEdit">Discard local draft</button>' : "") +
      "</div>" +
      "</div>" +
      '<div class="mt"><p class="small muted"><b>Tip:</b> open the article on another tab to preview \u2014 saved drafts render instantly under the article.</p></div>'
    );
  }

  function renderHistory(slug) {
    var r = resolveArticle(slug);
    if (!r) return renderNotFound();
    var a = r.article;
    var revs = WIKI.revisionsFor(slug).slice().reverse();
    var html =
      '<div class="pagehead"><p class="pagehead__kicker">Revision history</p><h1 class="pagehead__title">History: ' + esc(a.title) + "</h1>" +
      "<p>" + (revs.length ? revs.length + " local revision(s) recorded on this device." : "No local revisions yet \u2014 edit the article to start one.") + "</p></div>" +
      '<div class="actions"><a class="btn btn--ghost" href="#/article/' + slug + '">Back to article</a></div>';
    if (!revs.length) {
      html += '<div class="notice notice--info"><div><b>This article has no local revisions.</b> The built-in version is revision zero \u2014 edit it to begin the history.</div></div>';
      return html;
    }
    revs.forEach(function (r2, i) {
      var isCurrent = WIKI.effectiveBody(slug) === r2.body;
      html +=
        '<div class="rev">' +
        '<div class="rev__meta">' +
        '<span class="who">' + esc(r2.by) + "</span>" +
        '<span>' + fmtDate(r2.at) + "</span>" +
        '<span class="badge badge--module">' + esc(r2.role) + "</span>" +
        (isCurrent ? '<span class="badge badge--verified">current</span>' : "") +
        '<span class="muted">' + esc(r2.note) + "</span>" +
        "</div>" +
        '<div class="rev__diff">' + esc(r2.body.slice(0, 600)) + (r2.body.length > 600 ? "\u2026" : "") + "</div>" +
        '<div class="mt"><a class="btn btn--small btn--ghost" href="#/article/' + slug + '" data-revert="' + r2.id + '">Restore this version</a></div>' +
        "</div>";
    });
    return html;
  }

  /* ---------------- resolver ---------------- */

  function resolveArticle(slug) {
    var a = A.find(function (x) { return x.slug === slug; });
    var edited = WIKI.effectiveBody(slug);
    if (a) {
      if (edited) {
        /* Show the local draft as the article body */
        return {
          article: Object.assign({}, a, {
            sections: a.sections.map(function (s) {
              /* keep diagram + first section heading; replace body with edited draft in a "local draft" section */
              return s;
            })
          }),
          stub: false,
          edited: { at: (WIKI.revisionsFor(slug).slice().reverse()[0] || {}).at || Date.now(), by: "you", note: "Local draft" }
        };
      }
      return { article: a, stub: false, edited: null };
    }
    var s = SPORTS_BY_SLUG[slug];
    if (s) {
      var stub = {
        slug: s.slug,
        title: s.name,
        altNames: s.altNames,
        category: s.category,
        emoji: catEmoji(s.category),
        lede: s.desc + " This entry is a stub \u2014 it awaits a full article with rules, dimensions, skills and officiating detail.",
        infobox: [
          ["Origin", s.origin || "\u2014"],
          ["Category", catName(s.category)],
          ["Type", (s.type || []).join(", ") || "\u2014"],
          ["Governing body", s.governing || "\u2014"],
          ["Olympic status", s.olympic || "Not an Olympic sport"]
        ],
        modules: [],
        court: null,
        verified: false,
        competitions: [],
        keyTerms: [],
        sections: [
          { id: "overview", title: "Overview", module: null, body: "**" + esc(s.name) + "** is a " + (s.type || []).join(", ") + " sport" + (s.origin ? " that originates from " + esc(s.origin) : "") + ". " + esc(s.desc) + "\n\nThis article is a stub. Use the editor to add its history, rules, playing area, skills, officiating and exam content \u2014 the same structure as the fully written entries." }
        ]
      };
      return { article: stub, stub: true, edited: edited ? { at: Date.now(), by: "you", note: "Local draft" } : null };
    }
    return null;
  }

  /* Build article with draft body inlined for display */
  function articleForDisplay(slug) {
    var r = resolveArticle(slug);
    if (!r) return null;
    var edited = WIKI.effectiveBody(slug);
    var a = r.article;
    if (edited) {
      var ed = WIKI.revisionsFor(slug).slice().reverse()[0] || { at: Date.now(), note: "Local draft" };
      a = Object.assign({}, a, {
        sections: [
          { id: "local-draft", title: "Local draft \u2014 " + (ed.note || "editing in progress"), module: null, body: edited },
          { id: "official", title: "Official published version (below the fold)", module: null, body: a.sections.map(function (s) { return "## " + s.title + "\n\n" + s.body.replace(/^\s+|\s+$/g, "") + "\n"; }).join("\n") }
        ]
      });
    }
    return { article: a, stub: r.stub, edited: r.edited };
  }

  window.RENDER = {
    home: renderHome,
    article: function (slug) {
      var d = articleForDisplay(slug);
      return d ? renderArticleWith(d.article, d.stub, d.edited) : renderNotFound();
    },
    browse: renderBrowse,
    categories: renderCategories,
    category: renderCategory,
    modules: renderModules,
    module: renderModule,
    anatomy: renderAnatomy,
    kinesiology: renderKinesiology,
    glossary: renderGlossary,
    glossRows: glossRows,
    compare: renderCompare,
    contribute: renderContribute,
    search: renderSearch,
    edit: renderEdit,
    history: renderHistory,
    quiz: renderQuiz,
    quizPlay: renderQuizPlay,
    flashcards: renderFlashcards,
    flashcardDeck: renderFlashcardDeck,
    exam: renderExam,
    progress: renderProgress,
    notFound: renderNotFound,
    card: card,
    moduleBadges: moduleBadges,
    catName: catName,
    catEmoji: catEmoji,
    esc: esc,
    fmtDate: fmtDate,
    resolveArticle: resolveArticle
  };

  function renderArticleWith(a, isStub, edited) {
    var tocItems = a.sections.map(function (s) {
      return '<li><a href="#/article/' + a.slug + '" data-scroll="' + s.id + '">' + esc(s.title) + "</a></li>";
    }).join("");

    var diagramHtml = "";
    if (a.court && DIAGRAMS[a.court]) {
      var d = DIAGRAMS[a.court]();
      diagramHtml =
        '<div class="diagram" id="court-diagram">' +
        '<div class="diagram__head"><span class="diagram__title">Playing area & markings</span><span class="diagram__spec">' + esc(a.altNames || "") + "</span></div>" +
        '<div class="diagram__canvas">' + d.svg + '<div class="diagram__labels">' + (d.labels || "") + "</div></div>" +
        (d.legend.length ? '<div class="diagram__legend">' + d.legend.map(function (l) {
          return '<span class="dl"><span class="swatch" style="background:' + l.color + '"></span>' + esc(l.label) + "</span>";
        }).join("") + "</div>" : "") +
        (d.note ? '<p class="diagram__note">' + esc(d.note) + "</p>" : "") +
        "</div>";
    }

    var sectionsHtml = a.sections.map(function (s) {
      return (
        '<section class="prose" id="' + s.id + '">' +
        "<h2>" + esc(s.title) + (s.module ? '<span class="mod-chip">' + esc(MODULE_TAGS[s.module] || "") + "</span>" : "") + "</h2>" +
        MARKDOWN.render(s.body) +
        "</section>"
      );
    }).join("");

    var editBanner = edited ?
      '<div class="notice notice--info"><div><b>Local draft active.</b> Showing the working copy saved on this device. <a href="#/history/' + a.slug + '">Review revisions</a> or <a href="#/edit/' + a.slug + '">continue editing</a>.</div></div>'
      : "";

    var toolbar =
      '<div class="actions">' +
      (WIKI.canEdit() ? '<a class="btn" href="#/edit/' + a.slug + '">&#9998; Edit this article</a>' : "") +
      '<a class="btn btn--ghost" href="#/history/' + a.slug + '">History</a>' +
      '<a class="btn btn--ghost" href="#/compare">Compare courts</a>' +
      '<a class="btn btn--ghost" href="#/quiz/' + a.slug + '" title="Test yourself on this article">&#9997;&#65039; Quiz</a>' +
      '<a class="btn btn--ghost" href="#" data-print="' + a.slug + '">&#128424; Print / Save PDF</a>' +
      "</div>";

    var quickFacts = (a.infobox && a.infobox.length) ? (function () {
      var rows = a.infobox.slice(0, 6);
      return '<div class="quickfacts"><span class="quickfacts__label">Quick facts</span>' +
        rows.map(function (r) {
          return '<span class="qf"><span class="qf__k">' + esc(r[0]) + '</span><span class="qf__v">' + esc(r[1]) + "</span></span>";
        }).join("") +
        "</div>";
    })() : "";

    var related = (SPORTS_BY_SLUG[a.slug] ? SPORTS.list.filter(function (s) { return s.category === SPORTS_BY_SLUG[a.slug].category && s.slug !== a.slug; }).slice(0, 6) : []).map(function (s) {
      return '<a class="badge badge--sport" href="#/article/' + s.slug + '">' + esc(s.name) + "</a>";
    }).join(" ");

    return (
      '<nav class="article__crumbs">' +
      '<a href="#/">Home</a> \u203A <a href="#/categories">Categories</a> \u203A <a href="#/category/' + a.category + '">' + esc(catName(a.category)) + "</a>" +
      "</nav>" +
      '<article class="article">' +
      '<div class="article__body">' +
      '<h1 class="article__title">' + esc(a.title) + "</h1>" +
      (a.altNames ? '<p class="article__alt">' + esc(a.altNames) + "</p>" : "") +
      '<div class="article__rulebar">' +
      categoryBadge(a.category) +
      verifiedBadge(a) +
      (a.emoji ? "<span>" + a.emoji + "</span>" : "") +
      (isStub ? '<span class="badge badge--sport">Stub \u2014 needs a full article</span>' : "") +
      "</div>" +
      editBanner +
      '<p class="article__lede">' + esc(a.lede) + "</p>" +
      toolbar +
      quickFacts +
      '<div class="toc"><p class="toc__title">Contents</p><ol>' + tocItems + "</ol></div>" +
      diagramHtml +
      sectionsHtml +
      (related ? '<div class="mt"><p class="small muted">More in ' + esc(catName(a.category)) + ":</p><div class='chips'>" + related + "</div></div>" : "") +
      "</div>" +
      '<aside class="infobox">' +
      '<div class="infobox__head">' + (a.emoji ? a.emoji + " " : "") + esc(a.title) + (isStub ? " (stub)" : "") + "</div>" +
      '<div class="infobox__body"><table class="infobox__rows">' +
      (a.infobox || []).map(function (row) {
        return "<tr><th>" + esc(row[0]) + "</th><td>" + esc(row[1]) + "</td></tr>";
      }).join("") +
      "</table></div>" +
      '<div class="infobox__foot">' +
      (a.modules && a.modules.length ? "<p>Mapped to: " + moduleBadges(a.modules) + "</p>" : "") +
      (a.competitions && a.competitions.length ? "<p>Major competitions: " + a.competitions.map(function (c) { return esc(c); }).join(" \u00B7 ") + "</p>" : "") +
      "</div>" +
      "</aside>" +
      "</article>"
    );
  }
})();
