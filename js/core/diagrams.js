/* ==========================================================================
   THE ARENA — Interactive Court & Field Diagrams
   A small SVG builder that turns a "marking spec" into a hoverable diagram.
   Every zone carries a data-info tooltip for exam study.
   ========================================================================== */

(function () {
  "use strict";

  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /* Point on a circle, degrees, counter-clockwise on screen (y flipped). */
  function pt(cx, cy, r, deg) {
    var rad = (deg * Math.PI) / 180;
    return [cx + r * Math.cos(rad), cy - r * Math.sin(rad)];
  }

  /* SVG arc path between two angles (counter-clockwise). */
  function arcPath(cx, cy, r, a1, a2) {
    var p1 = pt(cx, cy, r, a1);
    var p2 = pt(cx, cy, r, a2);
    var delta = (a2 - a1 + 360) % 360;
    var large = delta > 180 ? 1 : 0;
    return "M " + rn(p1[0]) + " " + rn(p1[1]) +
      " A " + rn(r) + " " + rn(r) + " 0 " + large + " 0 " +
      rn(p2[0]) + " " + rn(p2[1]);
  }

  function rn(n) { return Math.round(n * 100) / 100; }

  function markEl(m) {
    var info = m.info ? ' data-info="' + esc(m.info) + '"' : "";
    var cls = "hoverable " + (m.cls || "svg-mark");
    switch (m.t) {
      case "r":
        return '<rect class="' + cls + '" x="' + m.x + '" y="' + m.y + '" width="' + m.w + '" height="' + m.h + '"' + info + "></rect>";
      case "l":
        return '<line class="' + cls + '" x1="' + m.x1 + '" y1="' + m.y1 + '" x2="' + m.x2 + '" y2="' + m.y2 + '"' + info + "></line>";
      case "c":
        return '<circle class="' + cls + '" cx="' + m.cx + '" cy="' + m.cy + '" r="' + m.r + '"' + info + "></circle>";
      case "a":
        return '<path class="' + cls + '" d="' + arcPath(m.cx, m.cy, m.r, m.a1, m.a2) + '"' + info + "></path>";
      case "p":
        return '<path class="' + cls + '" d="' + m.d + '"' + info + "></path>";
      case "t":
        return '<text class="' + (m.cls || "svg-text") + '" x="' + m.x + '" y="' + m.y + '">' + esc(m.text) + "</text>";
      default:
        return "";
    }
  }

  /* Percentage coordinate inside the canvas — lets the HTML overlay labels
     track the SVG exactly, because the svg is scaled via width:100%. */
  function pct(n, total) { return Math.round((n / total) * 1000) / 10; }

  /* Dimension line stays in the SVG (crisp via non-scaling-stroke). */
  function measureSvg(m) {
    return (
      '<g class="svg-measure">' +
      '<line x1="' + m.x1 + '" y1="' + m.y1 + '" x2="' + m.x2 + '" y2="' + m.y2 + '"></line>' +
      '<rect x="' + (m.x1 - 2.5) + '" y="' + (m.y1 - 2.5) + '" width="5" height="5" fill="#c13a22"></rect>' +
      '<rect x="' + (m.x2 - 2.5) + '" y="' + (m.y2 - 2.5) + '" width="5" height="5" fill="#c13a22"></rect>' +
      "</g>"
    );
  }

  /* The dimension number as an HTML overlay — Chrome renders SVG <text>
     blurry when the svg is scaled up, HTML labels always stay crisp. */
  function measureLabel(m, w, h) {
    var y = m.dy == null ? -7 : m.dy;
    var vertical = Math.abs(m.x1 - m.x2) < 0.001;
    var midX = m.x1 + (m.x2 - m.x1) / 2;
    var midY = m.y1 + (m.y2 - m.y1) / 2 + y;
    var left = midX;
    var tx = "translate(-50%,-50%)";
    /* keep edge labels inside the canvas so the numbers never get clipped */
    if (vertical) {
      if (midX < w / 2) { tx = "translate(0,-50%)"; left = Math.max(midX, 10); }
      else { tx = "translate(-100%,-50%)"; left = Math.min(midX, w - 10); }
    }
    return (
      '<span class="svg-label svg-label--measure" style="left:' + pct(left, w) + "%;top:" + pct(midY, h) + "%;transform:" + tx + ';">' + esc(m.label) + "</span>"
    );
  }

  /* Plain text inside the diagram (e.g. "100 m start") as an HTML overlay. */
  function textLabel(m, w, h) {
    var cls = m.cls === "svg-text--dim" ? "svg-label--dim" : "svg-label--text";
    return (
      '<span class="svg-label ' + cls + '" style="left:' + pct(m.x, w) + "%;top:" + pct(m.y, h) + "%;transform:translate(0,-100%);\">" + esc(m.text) + "</span>"
    );
  }

  function build(spec) {
    var parts = [];
    var labels = [];
    parts.push('<svg viewBox="0 0 ' + spec.w + " " + spec.h + '" role="img" aria-label="' + esc(spec.aria) + '">');
    if (spec.bg) {
      parts.push('<rect x="0" y="0" width="' + spec.w + '" height="' + spec.h + '" fill="' + spec.bg + '"></rect>');
    }
    function emit(m) {
      if (m.t === "t") { labels.push(textLabel(m, spec.w, spec.h)); }
      else { parts.push(markEl(m)); }
    }
    (spec.base || []).forEach(emit);
    (spec.markings || []).forEach(emit);
    (spec.measures || []).forEach(function (m) {
      parts.push(measureSvg(m));
      labels.push(measureLabel(m, spec.w, spec.h));
    });
    parts.push("</svg>");
    return {
      svg: parts.join("\n"),
      labels: labels.join("\n"),
      legend: spec.legend || [],
      note: spec.note || ""
    };
  }

  /* shorthand helpers */
  function rect(x, y, w, h, cls, info) { return { t: "r", x: x, y: y, w: w, h: h, cls: cls, info: info }; }
  function line(x1, y1, x2, y2, cls, info) { return { t: "l", x1: x1, y1: y1, x2: x2, y2: y2, cls: cls, info: info }; }
  function circle(cx, cy, r, cls, info) { return { t: "c", cx: cx, cy: cy, r: r, cls: cls, info: info }; }
  function arc(cx, cy, r, a1, a2, cls, info) { return { t: "a", cx: cx, cy: cy, r: r, a1: a1, a2: a2, cls: cls, info: info }; }

  /* ========================================================================
     SPORT DIAGRAM SPECS
     ======================================================================== */

  window.DIAGRAMS = {

    basketball: function () {
      var m = [];
      var cx = 152, topBase = 12, botBase = 162;
      m.push(rect(12, 12, 280, 150, "svg-mark", "Playing court 28 m \u00D7 15 m. All lines are 5 cm wide and part of the areas they bound."));
      m.push(line(cx, 12, cx, 162, "svg-mark", "Centre (mid-court) line. An attacking team must move the ball into the front court within 8 seconds."));
      m.push(circle(cx, 87, 18, "svg-mark", "Centre circle, radius 1.80 m. Used for the jump ball that starts each period."));
      m.push(rect(cx - 24.5, topBase, 49, 58, "svg-mark--key", "Restricted area ('key' / paint), 4.90 m \u00D7 5.80 m. Offensive players may stay only 3 seconds."));
      m.push(rect(cx - 24.5, botBase - 58, 49, 58, "svg-mark--key", "Restricted area ('key' / paint)."));
      m.push(circle(cx, topBase + 58, 18, "svg-mark--soft", "Free-throw circle, radius 1.80 m. Free throws are taken 5.80 m from the basket."));
      m.push(circle(cx, botBase - 58, 18, "svg-mark--soft", "Free-throw circle."));
      m.push(rect(cx - 5.25, topBase, 10.5, 2, "svg-mark--soft", "Backboard 1.05 m wide, mounted 2.90 m above the floor."));
      m.push(rect(cx - 5.25, botBase - 2, 10.5, 2, "svg-mark--soft", "Backboard."));
      m.push(circle(cx, topBase + 1.5, 4.5, "svg-mark--soft", "Hoop/rim, 45 cm diameter, 3.05 m above the floor."));
      m.push(circle(cx, botBase - 1.5, 4.5, "svg-mark--soft", "Hoop/rim."));
      m.push(arc(cx, botBase, 67.5, 12, 168, "svg-mark", "Three-point line: arc of radius 6.75 m from the basket centre. A made basket beyond it scores 3 points."));
      m.push(line(86, botBase, 86, 147.85, "svg-mark", "Three-point line straight section, 0.90 m from the sideline."));
      m.push(line(218, botBase, 218, 147.85, "svg-mark", "Three-point line straight section."));
      m.push(arc(cx, topBase, 67.5, 192, 348, "svg-mark", "Three-point line (top half)."));
      m.push(line(86, topBase, 86, 26.15, "svg-mark", "Three-point line straight section."));
      m.push(line(218, topBase, 218, 26.15, "svg-mark", "Three-point line straight section."));
      return build({
        w: 304, h: 174, bg: "#fcf8ec", aria: "Basketball court diagram with FIBA markings",
        markings: m,
        measures: [
          { x1: 12, y1: 40, x2: 292, y2: 40, label: "28 m", dy: -7 },
          { x1: 240, y1: 12, x2: 240, y2: 162, label: "15 m", dy: -40, dyx: 1 }
        ],
        legend: [
          { color: "#1f7a46", label: "Out of bounds" },
          { color: "#c13a22", label: "Key / paint" },
          { color: "#0f5e7a", label: "Free-throw & 3-point zones" }
        ],
        note: "FIBA dimensions: free-throw line 5.80 m from the basket; hoop 3.05 m high; 3-point arc 6.75 m."
      });
    },

    football: function () {
      var m = [];
      m.push(rect(30, 12, 220, 140, "svg-mark", "Playing pitch, typically 100\u2013110 m \u00D7 64\u201375 m for internationals."));
      m.push(line(140, 12, 140, 152, "svg-mark", "Halfway (centre) line."));
      m.push(circle(140, 82, 18.3, "svg-mark", "Centre circle, radius 9.15 m (10 yards). Opponents stay out at kick-off."));
      m.push(circle(140, 82, 4, "svg-mark--soft", "Centre spot \u2014 kick-off point."));
      m.push(rect(30, 41.7, 33, 80.6, "svg-mark--key", "Penalty area (18-yard box): 16.5 m deep, 40.3 m wide. The goalkeeper may handle inside."));
      m.push(rect(217, 41.7, 33, 80.6, "svg-mark--key", "Penalty area."));
      m.push(rect(30, 63.7, 11, 36.6, "svg-mark--out", "Goal area (6-yard box): 5.5 m deep, 18.3 m wide."));
      m.push(rect(209, 63.7, 11, 36.6, "svg-mark--out", "Goal area."));
      m.push(circle(52, 82, 4, "svg-mark--soft", "Penalty spot, 11 m from the goal line."));
      m.push(arc(52, 82, 18.3, 270, 90, "svg-mark--soft", "Penalty arc \u2014 opponents stay 9.15 m behind the spot."));
      m.push(circle(228, 82, 4, "svg-mark--soft", "Penalty spot."));
      m.push(arc(228, 82, 18.3, 90, 270, "svg-mark--soft", "Penalty arc."));
      m.push(rect(25, 74.7, 5, 14.6, "svg-mark--soft", "Goal: 7.32 m wide \u00D7 2.44 m high."));
      m.push(rect(250, 74.7, 5, 14.6, "svg-mark--soft", "Goal."));
      var corners = [[30, 12], [250, 12], [30, 152], [250, 152]];
      corners.forEach(function (c) {
        m.push(arc(c[0], c[1], 3, 0, 90, "svg-mark--soft", "Corner arc, radius 1 m \u2014 corner kicks are taken from here."));
      });
      return build({
        w: 280, h: 164, bg: "#f0f5e8", aria: "Association football pitch diagram",
        markings: m,
        measures: [
          { x1: 30, y1: 26, x2: 250, y2: 26, label: "90\u2013120 m", dy: -7 },
          { x1: 260, y1: 12, x2: 260, y2: 152, label: "45\u201390 m", dy: 0 }
        ],
        legend: [
          { color: "#c13a22", label: "Penalty area" },
          { color: "#0f5e7a", label: "Goal area" },
          { color: "#102a43", label: "Boundary / centre markings" }
        ],
        note: "Goal 7.32 m \u00D7 2.44 m; penalty spot 11 m; all free-kick 'minimum distances' equal the 9.15 m centre-circle radius."
      });
    },

    volleyball: function () {
      var m = [];
      m.push(rect(20, 20, 180, 90, "svg-mark", "Court 18 m \u00D7 9 m, divided by the centre line and net."));
      m.push(line(110, 20, 110, 110, "svg-mark", "Centre line \u2014 the net is suspended directly above it."));
      m.push(line(110, 20, 110, 110, "svg-mark--soft", "Net, height 2.43 m (men) / 2.24 m (women)."));
      m.push(rect(20, 20, 180, 15, "svg-mark--key", "Attack zone (front row) \u2014 front-row players may attack above the net here."));
      m.push(rect(20, 95, 180, 15, "svg-mark--key", "Attack zone (other side)."));
      m.push(line(20, 35, 200, 35, "svg-mark", "3 m (attack) line \u2014 back-row players may not attack above the net inside this zone."));
      m.push(line(20, 95, 200, 95, "svg-mark", "3 m (attack) line."));
      m.push(rect(20, 110, 180, 14, "svg-mark--soft", "Right service zone \u2014 9 m wide strip behind the end line."));
      m.push(rect(20, 0, 180, 14, "svg-mark--soft", "Left service zone."));
      return build({
        w: 220, h: 124, bg: "#eef3f6", aria: "Volleyball court diagram",
        markings: m,
        measures: [
          { x1: 20, y1: 118, x2: 200, y2: 118, label: "18 m", dy: -7 },
          { x1: 208, y1: 20, x2: 208, y2: 110, label: "9 m", dy: -7, dyx: 1 }
        ],
        legend: [
          { color: "#c13a22", label: "Attack zone" },
          { color: "#102a43", label: "3 m attack line" },
          { color: "#0f5e7a", label: "Net & service zones" }
        ],
        note: "Rally scoring: best of 5 sets, each to 25 (15 in the fifth), win by 2."
      });
    },

    kabaddi: function () {
      var m = [];
      m.push(rect(30, 10, 130, 100, "svg-mark", "Court 13 m \u00D7 10 m (men). Divided into two halves by the midline."));
      m.push(line(95, 10, 95, 110, "svg-mark", "Midline \u2014 the raider must start and finish behind it; it splits the court in half."));
      m.push(rect(30, 10, 65, 100, "svg-mark--key", "Defenders' half."));
      m.push(rect(95, 10, 65, 100, "svg-mark--key", "Raider's half."));
      m.push(line(57.5, 10, 57.5, 110, "svg-mark", "Baulk line, 3.75 m from the midline \u2014 the raider must cross it to earn the raid."));
      m.push(line(132.5, 10, 132.5, 110, "svg-mark", "Baulk line (other half)."));
      m.push(line(47.5, 10, 47.5, 110, "svg-mark--out", "Bonus line, 1 m beyond the baulk \u2014 crossing it with 6+ defenders scores a bonus point."));
      m.push(line(142.5, 10, 142.5, 110, "svg-mark--out", "Bonus line."));
      return build({
        w: 190, h: 120, bg: "#f6f0e2", aria: "Kabaddi court diagram",
        markings: m,
        measures: [
          { x1: 30, y1: 116, x2: 160, y2: 116, label: "13 m", dy: -7 },
          { x1: 166, y1: 10, x2: 166, y2: 110, label: "10 m", dy: 0 }
        ],
        legend: [
          { color: "#c13a22", label: "Halves" },
          { color: "#102a43", label: "Baulk line" },
          { color: "#0f5e7a", label: "Bonus line" }
        ],
        note: "Women's court 12 m \u00D7 8 m. Baulk at 3.75 m, bonus line 1 m beyond. Lobbies 1 m wide run each side."
      });
    },

    "kho-kho": function () {
      var m = [];
      m.push(rect(20, 20, 270, 160, "svg-mark", "Court 27 m \u00D7 16 m, with 8 squares and a central lane."));
      /* free zones at the ends */
      m.push(rect(20, 20, 25, 160, "svg-mark--out", "Free zone \u2014 runners may rest here temporarily."));
      m.push(rect(265, 20, 25, 160, "svg-mark--out", "Free zone."));
      /* central lane */
      m.push(rect(20, 98.5, 270, 3, "svg-mark--key", "Central lane \u2014 23.5 m long \u00D7 30 cm wide. The active chaser runs here."));
      /* cross lanes and posts */
      for (var i = 0; i <= 8; i++) {
        var x = 45 + i * 27.5;
        m.push(line(x, 20, x, 180, i === 0 || i === 8 ? "svg-mark" : "svg-mark--soft", "Cross lane \u2014 bounds a 2.75 m square."));
        m.push(circle(x, 100, 2.6, "svg-mark--soft", "Post, 120\u2013125 cm tall \u2014 the chaser turns around it."));
      }
      return build({
        w: 310, h: 200, bg: "#f6f0e2", aria: "Kho-kho court diagram",
        markings: m,
        measures: [
          { x1: 20, y1: 192, x2: 290, y2: 192, label: "27 m", dy: -7 },
          { x1: 296, y1: 20, x2: 296, y2: 180, label: "16 m", dy: 0 }
        ],
        legend: [
          { color: "#c13a22", label: "Central lane" },
          { color: "#0f5e7a", label: "Free zones" },
          { color: "#102a43", label: "Cross lanes & posts" }
        ],
        note: "8 squares of \u2248 2.75 m; the central lane is 30 cm wide; posts at 120\u2013125 cm."
      });
    },

    cricket: function () {
      var m = [];
      m.push(rect(80, 88, 160, 24, "svg-mark--key", "The pitch: 20.12 m (22 yards) long \u00D7 3.05 m wide."));
      m.push(line(90, 88, 90, 112, "svg-mark", "Popping crease \u2014 1.22 m in front of the stumps; the batsman must stay grounded here."));
      m.push(line(230, 88, 230, 112, "svg-mark", "Popping crease."));
      m.push(line(80, 88, 80, 112, "svg-mark--soft", "Bowling crease through the stumps at each end."));
      m.push(line(240, 88, 240, 112, "svg-mark--soft", "Bowling crease."));
      m.push(circle(160, 100, 92, "svg-mark", "Boundary \u2014 at least 65 m from the pitch in international cricket."));
      m.push(circle(160, 100, 50, "svg-mark--soft", "30-yard (27.43 m) circle \u2014 the Powerplay fielding restriction."));
      return build({
        w: 320, h: 200, bg: "#eef4e4", aria: "Cricket pitch and field diagram",
        markings: m,
        measures: [
          { x1: 80, y1: 132, x2: 240, y2: 132, label: "20.12 m (22 yd)", dy: -7 }
        ],
        legend: [
          { color: "#c13a22", label: "Pitch" },
          { color: "#102a43", label: "Boundary" },
          { color: "#0f5e7a", label: "30-yard circle" }
        ],
        note: "Popping crease 1.22 m in front of the stumps; stumps 71.1 cm high, 22.86 cm wide; bails sit at 81.28 cm."
      });
    },

    hockey: function () {
      var m = [];
      m.push(rect(24, 20, 200, 120, "svg-mark", "Pitch 91.4 m \u00D7 55 m."));
      m.push(line(124, 20, 124, 140, "svg-mark", "Centre line with the 15 m-radius centre circle."));
      m.push(circle(124, 80, 33.5, "svg-mark--soft", "Centre circle, radius 15.24 m."));
      m.push(line(74.4, 20, 74.4, 140, "svg-mark--out", "23 m line \u2014 attacks may only start from within it."));
      m.push(line(173.6, 20, 173.6, 140, "svg-mark--out", "23 m line."));
      m.push(arc(24, 80, 32, 345.5, 14.5, "svg-mark--key", "Shooting circle ('D') \u2014 goals count only from inside it. Radius 14.63 m."));
      m.push(line(24, 72, 24, 88, "svg-mark--key", "Straight section of the D \u2014 the 3.66 m goal-line front."));
      m.push(arc(224, 80, 32, 165.5, 194.5, "svg-mark--key", "Shooting circle (other end)."));
      m.push(line(224, 72, 224, 88, "svg-mark--key", "Straight section of the D."));
      m.push(rect(18, 72, 6, 16, "svg-mark--soft", "Goal: 3.66 m wide \u00D7 2.14 m high."));
      m.push(rect(224, 72, 6, 16, "svg-mark--soft", "Goal."));
      m.push(circle(38, 80, 2.5, "svg-mark--soft", "Penalty spot, 6.40 m in front of the goal."));
      m.push(circle(210, 80, 2.5, "svg-mark--soft", "Penalty spot."));
      return build({
        w: 248, h: 160, bg: "#eef4e4", aria: "Field hockey pitch diagram",
        markings: m,
        measures: [
          { x1: 24, y1: 150, x2: 224, y2: 150, label: "91.4 m", dy: -7 },
          { x1: 234, y1: 20, x2: 234, y2: 140, label: "55 m", dy: 0 }
        ],
        legend: [
          { color: "#c13a22", label: "Shooting circle (D)" },
          { color: "#0f5e7a", label: "23 m line" },
          { color: "#102a43", label: "Pitch markings" }
        ],
        note: "D radius 14.63 m (16 yards); goals 3.66 m \u00D7 2.14 m; penalty spot 6.40 m."
      });
    },

    badminton: function () {
      var m = [];
      m.push(rect(20, 20, 134, 61, "svg-mark", "Doubles court: 13.40 m \u00D7 6.10 m."));
      m.push(line(87, 20, 87, 81, "svg-mark", "Net, 1.55 m high at the posts (1.524 m at centre)."));
      m.push(line(67.2, 20, 67.2, 81, "svg-mark--key", "Short service line \u2014 1.98 m from the net; serves must land beyond it."));
      m.push(line(106.8, 20, 106.8, 81, "svg-mark--key", "Short service line."));
      m.push(line(27.6, 20, 27.6, 81, "svg-mark--key", "Long service line (singles = back boundary)."));
      m.push(line(146.4, 20, 146.4, 81, "svg-mark--key", "Long service line (doubles) \u2014 0.76 m inside the back line."));
      m.push(line(67.2, 50.5, 146.4, 50.5, "svg-mark--soft", "Centre service line \u2014 splits each service court in half."));
      m.push(line(20, 24.6, 154, 24.6, "svg-mark--out", "Singles sideline \u2014 singles court width 5.18 m."));
      m.push(line(20, 76.4, 154, 76.4, "svg-mark--out", "Singles sideline."));
      return build({
        w: 174, h: 101, bg: "#eef3f6", aria: "Badminton court diagram",
        markings: m,
        measures: [
          { x1: 20, y1: 92, x2: 154, y2: 92, label: "13.40 m", dy: -7 },
          { x1: 160, y1: 20, x2: 160, y2: 81, label: "6.10 m", dy: 0 }
        ],
        legend: [
          { color: "#c13a22", label: "Service lines" },
          { color: "#102a43", label: "Court lines" },
          { color: "#0f5e7a", label: "Singles sidelines" }
        ],
        note: "Singles width 5.18 m; short service line 1.98 m from the net; doubles serve must land before 6.70 m."
      });
    },

    tennis: function () {
      var m = [];
      m.push(rect(20, 20, 238, 110, "svg-mark", "Doubles court: 23.77 m \u00D7 10.97 m."));
      m.push(line(139, 20, 139, 130, "svg-mark", "Net \u2014 0.914 m high at the centre (1.07 m at the posts)."));
      m.push(line(75, 34, 75, 116, "svg-mark--key", "Service line \u2014 6.40 m from the net; serves must land before it."));
      m.push(line(203, 34, 203, 116, "svg-mark--key", "Service line."));
      m.push(line(75, 75, 203, 75, "svg-mark--soft", "Centre service line \u2014 splits the service boxes."));
      m.push(line(20, 34, 258, 34, "svg-mark--out", "Singles sideline \u2014 singles court 8.23 m wide."));
      m.push(line(20, 116, 258, 116, "svg-mark--out", "Singles sideline."));
      m.push(line(20, 20, 258, 20, "svg-mark--soft", "Doubles tramline \u2014 adds 1.37 m each side."));
      m.push(line(20, 130, 258, 130, "svg-mark--soft", "Doubles tramline."));
      return build({
        w: 278, h: 150, bg: "#eef3f6", aria: "Tennis court diagram",
        markings: m,
        measures: [
          { x1: 20, y1: 142, x2: 258, y2: 142, label: "23.77 m", dy: -7 },
          { x1: 264, y1: 34, x2: 264, y2: 116, label: "8.23 m", dy: 0 }
        ],
        legend: [
          { color: "#c13a22", label: "Service lines" },
          { color: "#102a43", label: "Court lines" },
          { color: "#0f5e7a", label: "Singles / tramlines" }
        ],
        note: "Service boxes 6.40 m deep; net 1.07 m at posts, 0.914 m at centre."
      });
    },

    "table-tennis": function () {
      var m = [];
      m.push(rect(20, 20, 274, 152, "svg-mark", "Table: 2.74 m \u00D7 1.525 m, 76 cm high."));
      m.push(line(20, 96, 294, 96, "svg-mark", "Net, 15.25 cm high."));
      m.push(line(157, 20, 157, 152, "svg-mark--soft", "Centre line \u2014 in doubles the serve must go diagonally."));
      return build({
        w: 314, h: 192, bg: "#eef3f6", aria: "Table tennis table diagram",
        markings: m,
        measures: [
          { x1: 20, y1: 172, x2: 294, y2: 172, label: "2.74 m", dy: -7 },
          { x1: 300, y1: 20, x2: 300, y2: 172, label: "1.525 m", dy: 0 }
        ],
        legend: [],
        note: "Ball 40 mm; games to 11; the expedite rule kicks in at 10 minutes."
      });
    },

    handball: function () {
      var m = [];
      m.push(rect(30, 20, 200, 100, "svg-mark", "Court 40 m \u00D7 20 m."));
      m.push(line(130, 20, 130, 120, "svg-mark", "Centre line."));
      m.push(circle(130, 70, 15, "svg-mark--soft", "Centre circle, radius 3 m."));
      m.push(rect(30, 62.5, 10, 15, "svg-mark--soft", "Goal: 3 m wide \u00D7 2 m high."));
      m.push(arc(30, 70, 30, 270, 90, "svg-mark--key", "Goal-area line (crease): 6 m arc \u2014 only the goalkeeper may enter."));
      m.push(arc(30, 70, 45, 270, 90, "svg-mark--out", "9 m free-throw line \u2014 attackers must stand behind it on a free throw."));
      m.push(line(65, 67.5, 65, 72.5, "svg-mark--soft", "7 m penalty line \u2014 a 1 m mark parallel to the goal."));
      m.push(rect(230, 62.5, 10, 15, "svg-mark--soft", "Goal."));
      m.push(arc(230, 70, 30, 90, 270, "svg-mark--key", "Goal-area line."));
      m.push(arc(230, 70, 45, 90, 270, "svg-mark--out", "9 m free-throw line."));
      m.push(line(195, 67.5, 195, 72.5, "svg-mark--soft", "7 m penalty line."));
      return build({
        w: 260, h: 140, bg: "#eef3f6", aria: "Team handball court diagram",
        markings: m,
        measures: [
          { x1: 30, y1: 132, x2: 230, y2: 132, label: "40 m", dy: -7 },
          { x1: 240, y1: 20, x2: 240, y2: 120, label: "20 m", dy: 0 }
        ],
        legend: [
          { color: "#c13a22", label: "6 m crease" },
          { color: "#0f5e7a", label: "9 m free-throw line" },
          { color: "#102a43", label: "7 m penalty line" }
        ],
        note: "Matches 2 \u00D7 30 min; teams of 7; players take 3 steps / 3 seconds with the ball."
      });
    },

    athletics: function () {
      var m = [];
      var radii = [50, 45, 40, 35, 30, 25, 20, 15, 10];
      var cy = 95;
      radii.forEach(function (r, idx) {
        var cls = idx === 0 || idx === radii.length - 1 ? "svg-mark" : "svg-mark--soft";
        var info = idx === 0 ? "400 m oval track \u2014 8 lanes, each 1.22 m wide." : null;
        m.push(line(60, cy - r, 380, cy - r, cls, info));
        m.push(line(60, cy + r, 380, cy + r, cls, null));
        m.push(arc(60, cy, r, 90, 270, cls, "Bend \u2014 the outer lanes start further forward (staggered)."));
        m.push(arc(380, cy, r, 270, 90, cls, null));
      });
      m.push(line(380, 45, 380, 145, "svg-mark--key", "Finish line \u2014 results decided here (photo-finish in big meets)."));
      m.push(line(300, 45, 300, 145, "svg-mark--out", "100 m start line."));
      m.push(circle(220, 95, 30, "svg-mark--soft", "Infield \u2014 used for throws and jumps."));
      m.push({ t: "t", x: 308, y: 40, text: "100 m start", cls: "svg-text--dim" });
      return build({
        w: 440, h: 190, bg: "#f0f5e8", aria: "Athletics track diagram",
        markings: m,
        measures: [
          { x1: 60, y1: 172, x2: 380, y2: 172, label: "straight \u2248 84.4 m", dy: -7 }
        ],
        legend: [
          { color: "#c13a22", label: "Finish line" },
          { color: "#0f5e7a", label: "Start positions" },
          { color: "#102a43", label: "400 m oval" }
        ],
        note: "Two straights of \u2248 84.4 m joined by two bends; the stagger grows ~7 m per lane in a 400 m race."
      });
    },

    "boxing-ring": function () {
      var m = [];
      m.push(rect(40, 30, 140, 140, "svg-mark", "Ring: a 4.9\u20136.1 m square, raised 0.91\u20131.22 m."));
      [[40, 30], [180, 30], [40, 170], [180, 170]].forEach(function (c) {
        m.push(circle(c[0], c[1], 6, "svg-mark--key", "Corner post \u2014 red, blue or neutral white corners."));
      });
      for (var i = 1; i <= 3; i++) {
        var inset = 6 + i * 6;
        m.push(rect(40 + inset, 30 + inset, 140 - inset * 2, 140 - inset * 2, "svg-mark--soft", "Rope level " + i + " \u2014 three ropes from about 40.6 cm to 132 cm high."));
      }
      m.push({ t: "t", x: 110, y: 205, text: "canvas floor", cls: "svg-text--dim" });
      return build({
        w: 220, h: 225, bg: "#f6f0e2", aria: "Boxing ring diagram",
        markings: m,
        measures: [
          { x1: 40, y1: 182, x2: 180, y2: 182, label: "4.9\u20136.1 m", dy: -7 }
        ],
        legend: [
          { color: "#c13a22", label: "Corner posts" },
          { color: "#102a43", label: "Ring boundary" },
          { color: "#6b7c93", label: "Ropes" }
        ],
        note: "Minimum Olympic ring size 6.1 m \u00D7 6.1 m; 3 rope heights; spring canvas floor."
      });
    },

    "wrestling-mat": function () {
      var m = [];
      m.push(rect(30, 20, 220, 160, "svg-mark--out", "Mat area \u2014 safety border around the competition circle."));
      m.push(circle(140, 100, 70, "svg-mark", "Competition circle, 9 m diameter (4.5 m radius)."));
      m.push(circle(140, 100, 10, "svg-mark--key", "Centre \u2014 the bout starts and restarts here."));
      return build({
        w: 280, h: 200, bg: "#eef3f6", aria: "Wrestling mat diagram",
        markings: m,
        measures: [
          { x1: 140, y1: 100, x2: 210, y2: 100, label: "4.5 m", dy: -7 }
        ],
        legend: [
          { color: "#c13a22", label: "Centre" },
          { color: "#102a43", label: "Competition circle" },
          { color: "#0f5e7a", label: "Safety border" }
        ],
        note: "Passivity (a caution) is penalised; pushing an opponent out of the circle scores."
      });
    },

    throwball: function () {
      var m = [];
      m.push(rect(20, 20, 122, 183, "svg-mark", "Court 12.19 m \u00D7 18.29 m."));
      m.push(line(20, 111.5, 142, 111.5, "svg-mark", "Net at 2.20 m height."));
      m.push(line(81, 20, 81, 203, "svg-mark--soft", "Division line \u2014 teams stay in their own half at the serve."));
      return build({
        w: 162, h: 223, bg: "#eef3f6", aria: "Throwball court diagram",
        markings: m,
        measures: [
          { x1: 20, y1: 214, x2: 142, y2: 214, label: "12.19 m", dy: -7 },
          { x1: 148, y1: 20, x2: 148, y2: 203, label: "18.29 m", dy: 0 }
        ],
        legend: [],
        note: "Seven per side; two touches max; best of 3 sets to 25 points (win by 2)."
      });
    },

    "swimming-pool": function () {
      var m = [];
      m.push(rect(20, 20, 300, 50, "svg-mark", "Pool 50 m long \u00D7 25 m wide (8 lanes of 2.5 m)."));
      for (var i = 1; i < 8; i++) {
        m.push(line(20 + i * 37.5, 20, 20 + i * 37.5, 70, "svg-mark--soft", "Lane rope \u2014 lane " + (i + 1) + "."));
      }
      m.push(line(20, 20, 20, 70, "svg-mark--key", "Start blocks end."));
      m.push(line(320, 20, 320, 70, "svg-mark--key", "Touchpad end \u2014 timing to 1/100 s."));
      m.push(rect(20, 75, 300, 14, "svg-mark--out", "Deck / warm-down lane."));
      return build({
        w: 340, h: 110, bg: "#e3f0f6", aria: "Swimming pool diagram",
        markings: m,
        measures: [
          { x1: 20, y1: 96, x2: 320, y2: 96, label: "50 m", dy: -7 }
        ],
        legend: [
          { color: "#c13a22", label: "Start / finish walls" },
          { color: "#0f5e7a", label: "Deck" },
          { color: "#102a43", label: "Pool shell" }
        ],
        note: "8 lanes \u00D7 2.5 m; depth 2\u20133 m; backstroke starts in the water."
      });
    },

    takraw: function () {
      var m = [];
      m.push(rect(20, 20, 134, 61, "svg-mark", "Court 13.4 m \u00D7 6.1 m."));
      m.push(line(87, 20, 87, 81, "svg-mark", "Net 1.52 m (centre) \u2014 the 'foot volleyball'."));
      m.push(circle(30, 50.5, 4, "svg-mark--key", "Serving circle \u2014 the tekong serves with one foot inside."));
      m.push(circle(144, 50.5, 4, "svg-mark--key", "Serving circle."));
      return build({
        w: 174, h: 101, bg: "#eef3f6", aria: "Sepak takraw court diagram",
        markings: m,
        measures: [
          { x1: 20, y1: 92, x2: 154, y2: 92, label: "13.4 m", dy: -7 },
          { x1: 158, y1: 20, x2: 158, y2: 81, label: "6.1 m", dy: 0 }
        ],
        legend: [
          { color: "#c13a22", label: "Serving circles" },
          { color: "#102a43", label: "Court" }
        ],
        note: "Three touches max before crossing the net; no hands or arms ever."
      });
    },

    "archery-range": function () {
      var m = [];
      m.push(rect(20, 30, 40, 140, "svg-mark--key", "Shooting line \u2014 archers stand here."));
      m.push(line(60, 100, 300, 100, "svg-mark--soft", "Shooting lane."));
      m.push(circle(310, 100, 20, "svg-mark", "Target face, 122 cm at 70 m."));
      m.push(circle(310, 100, 14, "svg-mark--soft", "Rings 1\u201310 \u2014 the gold (inner 10) is tiny."));
      m.push(circle(310, 100, 6, "svg-mark--key", "10-ring \u2014 the 'gold'."));
      return build({
        w: 340, h: 200, bg: "#f0f5e8", aria: "Archery range diagram",
        markings: m,
        measures: [
          { x1: 60, y1: 152, x2: 300, y2: 152, label: "70 m", dy: -7 }
        ],
        legend: [
          { color: "#c13a22", label: "Shooting line / 10-ring" },
          { color: "#102a43", label: "Target face" }
        ],
        note: "Olympic recurve shoots 122 cm faces at 70 m; arrows fly a high parabola over the 2\u20133 m crest."
      });
    },

    "gymnastics-floor": function () {
      var m = [];
      m.push(rect(18, 18, 264, 264, "svg-mark--out", "1 m safety border around the competition mat."));
      m.push(rect(30, 30, 240, 240, "svg-mark", "Floor exercise mat 12 m \u00D7 12 m."));
      m.push(line(30, 150, 270, 150, "svg-mark--soft", "Centre line."));
      m.push(line(150, 30, 150, 270, "svg-mark--soft", "Centre line."));
      return build({
        w: 300, h: 300, bg: "#f6f0e2", aria: "Artistic gymnastics floor exercise mat diagram",
        markings: m,
        measures: [
          { x1: 30, y1: 288, x2: 270, y2: 288, label: "12 m", dy: -7 },
          { x1: 280, y1: 30, x2: 280, y2: 270, label: "12 m", dy: 0 }
        ],
        legend: [
          { color: "#1f7a46", label: "Floor mat (12 m \u00D7 12 m)" },
          { color: "#0f5e7a", label: "1 m safety border" }
        ],
        note: "Women's floor runs 75\u201390 s to music; men's is a 70 s tumbling exercise on the same mat."
      });
    },

    "weightlifting-platform": function () {
      var m = [];
      m.push(rect(30, 30, 180, 180, "svg-mark", "Platform 4 m \u00D7 4 m."));
      m.push(rect(70, 70, 100, 100, "svg-mark--key", "2.5 m \u00D7 2.5 m loading area \u2014 the barbell is centred here."));
      m.push(line(40, 120, 200, 120, "svg-mark--soft", "Barbell \u2014 20 kg (men) / 15 kg (women)."));
      m.push(circle(70, 120, 12, "svg-mark--out", "Weight plates."));
      m.push(circle(170, 120, 12, "svg-mark--out", "Weight plates."));
      m.push({ t: "t", x: 120, y: 90, text: "loading area", cls: "svg-text--dim" });
      return build({
        w: 240, h: 240, bg: "#f0f5e8", aria: "Olympic weightlifting platform diagram",
        markings: m,
        measures: [
          { x1: 30, y1: 228, x2: 210, y2: 228, label: "4 m", dy: -7 },
          { x1: 222, y1: 30, x2: 222, y2: 210, label: "4 m", dy: 0 }
        ],
        legend: [
          { color: "#1f7a46", label: "Platform" },
          { color: "#c13a22", label: "2.5 m loading area" },
          { color: "#0f5e7a", label: "Barbell & plates" }
        ],
        note: "Lifts must be completed on the platform; stepping off it with the bar is a no-lift."
      });
    },

    "shooting-range": function () {
      var m = [];
      m.push(rect(40, 50, 260, 40, "svg-mark--key", "Shooting lane \u2014 each lane is 1.25 m wide."));
      m.push(line(40, 40, 40, 100, "svg-mark", "Firing line \u2014 athletes stand with both feet behind it."));
      m.push(circle(40, 70, 7, "svg-mark", "Firing point."));
      m.push(line(40, 70, 300, 70, "svg-mark--soft", "Line of sight \u2014 10 m to the target."));
      m.push(circle(300, 70, 14, "svg-mark", "Target face \u2014 rings 1\u201310."));
      m.push(circle(300, 70, 4, "svg-mark--key", "10-ring \u2014 only 11.5 mm across at 10 m."));
      m.push(circle(300, 70, 1.5, "svg-mark", "X-ring \u2014 used to break ties."));
      return build({
        w: 340, h: 140, bg: "#eef3f6", aria: "10 m shooting range diagram",
        markings: m,
        measures: [
          { x1: 40, y1: 26, x2: 300, y2: 26, label: "10 m", dy: -7 }
        ],
        legend: [
          { color: "#c13a22", label: "Lane / 10-ring" },
          { color: "#102a43", label: "Firing line & target" },
          { color: "#0f5e7a", label: "Line of sight" }
        ],
        note: "Air rifle / pistol use a 4.5 mm pellet; the 10-ring at 10 m is only 11.5 mm across."
      });
    },

    netball: function () {
      var m = [];
      m.push(rect(40, 30, 200, 100, "svg-mark", "Court 30.5 m \u00D7 15.25 m."));
      m.push(line(106.7, 30, 106.7, 130, "svg-mark", "Transverse line \u2014 divides the court into thirds."));
      m.push(line(173.3, 30, 173.3, 130, "svg-mark", "Transverse line."));
      m.push(circle(140, 80, 6, "svg-mark--soft", "Centre circle \u2014 centre pass restarts play."));
      m.push(circle(40, 80, 32, "svg-mark--key", "Goal circle \u2014 radius 4.90 m. Only GS/GA may shoot."));
      m.push(circle(240, 80, 32, "svg-mark--key", "Goal circle."));
      m.push(rect(37, 76, 6, 8, "svg-mark--soft", "Goal post \u2014 3.05 m high, 380 mm ring."));
      m.push(rect(237, 76, 6, 8, "svg-mark--soft", "Goal post."));
      return build({
        w: 300, h: 170, bg: "#eef3f6", aria: "Netball court diagram",
        markings: m,
        measures: [
          { x1: 40, y1: 144, x2: 240, y2: 144, label: "30.5 m", dy: -7 },
          { x1: 250, y1: 30, x2: 250, y2: 130, label: "15.25 m", dy: 0 }
        ],
        legend: [
          { color: "#c13a22", label: "Goal circle (r 4.90 m)" },
          { color: "#102a43", label: "Thirds / boundary" },
          { color: "#0f5e7a", label: "Centre circle" }
        ],
        note: "7 positions with fixed zones; 4 \u00D7 15 min quarters; a goal counts only from inside the circle."
      });
    },

    "judo-mat": function () {
      var m = [];
      m.push(rect(20, 20, 260, 260, "svg-mark--out", "Tatami mat \u2014 the safety area around the contest zone."));
      m.push(rect(60, 60, 180, 180, "svg-mark", "Competition area \u2014 8 m \u00D7 8 m."));
      m.push(line(150, 60, 150, 240, "svg-mark--soft", "Centre \u2014 'hajime' begins the contest."));
      m.push(circle(110, 150, 4, "svg-mark--key", "White contestant's start mark."));
      m.push(circle(190, 150, 4, "svg-mark--key", "Blue contestant's start mark."));
      return build({
        w: 300, h: 300, bg: "#f6f0e2", aria: "Judo competition mat diagram",
        markings: m,
        measures: [
          { x1: 60, y1: 288, x2: 240, y2: 288, label: "8 m", dy: -7 }
        ],
        legend: [
          { color: "#c13a22", label: "Start marks" },
          { color: "#1f7a46", label: "Competition area (8 m \u00D7 8 m)" },
          { color: "#0f5e7a", label: "Safety area" }
        ],
        note: "An ippon (clean throw, 20 s hold, submission) wins instantly; contests are 4 minutes."
      });
    },

    "taekwondo-mat": function () {
      var m = [];
      m.push(rect(20, 20, 260, 260, "svg-mark--out", "10 m \u00D7 10 m contest area."));
      m.push(rect(55, 55, 190, 190, "svg-mark", "8 m \u00D7 8 m combat zone."));
      m.push(line(150, 55, 150, 245, "svg-mark--soft", "Centre line."));
      m.push(circle(150, 150, 6, "svg-mark--key", "Centre \u2014 referee starts with 'shi-jak'."));
      return build({
        w: 300, h: 300, bg: "#f6f0e2", aria: "Taekwondo competition mat diagram",
        markings: m,
        measures: [
          { x1: 55, y1: 288, x2: 245, y2: 288, label: "8 m", dy: -7 },
          { x1: 288, y1: 20, x2: 288, y2: 280, label: "10 m", dy: 0 }
        ],
        legend: [
          { color: "#c13a22", label: "Centre" },
          { color: "#1f7a46", label: "8 m combat zone" },
          { color: "#0f5e7a", label: "10 m contest area" }
        ],
        note: "3 \u00D7 2 min rounds; electronic hogu scores body kicks (2) and head kicks (3)."
      });
    },

    futsal: function () {
      var m = [];
      m.push(rect(30, 15, 220, 110, "svg-mark", "Court 40 m \u00D7 20 m (min 38 \u00D7 18 m)."));
      m.push(line(140, 15, 140, 125, "svg-mark", "Halfway line."));
      m.push(circle(140, 70, 16.5, "svg-mark", "Centre circle, radius 3 m."));
      m.push(rect(25, 61.75, 5, 16.5, "svg-mark--soft", "Goal: 3 m wide \u00D7 2 m high."));
      m.push(rect(250, 61.75, 5, 16.5, "svg-mark--soft", "Goal."));
      m.push(circle(63, 70, 4, "svg-mark--key", "6 m penalty mark."));
      m.push(circle(85, 70, 4, "svg-mark--out", "10 m second penalty mark \u2014 accumulated fouls."));
      m.push(circle(217, 70, 4, "svg-mark--key", "6 m penalty mark."));
      m.push(circle(195, 70, 4, "svg-mark--out", "10 m second penalty mark."));
      return build({
        w: 280, h: 145, bg: "#f0f5e8", aria: "Futsal court diagram",
        markings: m,
        measures: [
          { x1: 30, y1: 134, x2: 250, y2: 134, label: "40 m", dy: -7 },
          { x1: 260, y1: 15, x2: 260, y2: 125, label: "20 m", dy: 0 }
        ],
        legend: [
          { color: "#c13a22", label: "6 m penalty mark" },
          { color: "#0f5e7a", label: "10 m second penalty mark" },
          { color: "#102a43", label: "Court markings" }
        ],
        note: "5 per side, 2 \u00D7 20 min; no offside; kick-in replaces the throw-in; the 6th team foul gives a 10 m free kick."
      });
    },

    "beach-volleyball": function () {
      var m = [];
      m.push(rect(20, 10, 240, 120, "svg-mark--out", "Sand free zone around the court."));
      m.push(rect(40, 20, 200, 100, "svg-mark", "Court 16 m \u00D7 8 m on sand."));
      m.push(line(140, 20, 140, 120, "svg-mark", "Centre line \u2014 net 2.43 m (men) / 2.24 m (women)."));
      m.push(line(140, 20, 140, 120, "svg-mark--soft", "Net with antennae marking the 8 m width."));
      return build({
        w: 280, h: 148, bg: "#f0e7d3", aria: "Beach volleyball court diagram",
        markings: m,
        measures: [
          { x1: 40, y1: 130, x2: 240, y2: 130, label: "16 m", dy: -7 },
          { x1: 250, y1: 20, x2: 250, y2: 120, label: "8 m", dy: 0 }
        ],
        legend: [
          { color: "#c13a22", label: "Court (16 m \u00D7 8 m)" },
          { color: "#0f5e7a", label: "Sand free zone" },
          { color: "#102a43", label: "Net" }
        ],
        note: "No 3 m attack line \u2014 both players may attack anywhere; sand depth 0.40 m; sets to 21 (15 in the third)."
      });
    },

    squash: function () {
      var m = [];
      m.push(rect(20, 15, 260, 170, "svg-mark", "Court 9.75 m \u00D7 6.4 m \u2014 four walls."));
      m.push(line(150, 15, 150, 185, "svg-mark", "Short line \u2014 mid-court."));
      m.push(line(150, 100, 280, 100, "svg-mark--soft", "Half-court line to the back wall."));
      m.push(circle(150, 100, 5, "svg-mark--key", "The T \u2014 the position of control."));
      m.push(rect(237, 15, 43, 43, "svg-mark--key", "Service box \u2014 1.6 m square in the back corner."));
      m.push(rect(237, 142, 43, 43, "svg-mark--key", "Service box."));
      m.push({ t: "t", x: 20, y: 8, text: "front wall", cls: "svg-text--dim" });
      return build({
        w: 300, h: 210, bg: "#eef3f6", aria: "Squash court floor plan diagram",
        markings: m,
        measures: [
          { x1: 20, y1: 196, x2: 280, y2: 196, label: "9.75 m", dy: -7 },
          { x1: 288, y1: 15, x2: 288, y2: 185, label: "6.4 m", dy: 0 }
        ],
        legend: [
          { color: "#c13a22", label: "Service boxes & T" },
          { color: "#102a43", label: "Short line" },
          { color: "#0f5e7a", label: "Walls / half-court line" }
        ],
        note: "Front wall 4.57 m high with a 43 cm tin; the serve must land above the line in the correct box."
      });
    },

    "rhythmic-floor": function () {
      var m = [];
      m.push(rect(10, 10, 280, 280, "svg-mark--out", "1 m safety margin around the carpet."));
      m.push(rect(25, 25, 250, 250, "svg-mark", "Competition carpet 13 m \u00D7 13 m."));
      m.push(circle(150, 150, 10, "svg-mark--soft", "Centre \u2014 apparatus work radiates around it."));
      return build({
        w: 300, h: 300, bg: "#f6f0e2", aria: "Rhythmic gymnastics carpet diagram",
        markings: m,
        measures: [
          { x1: 25, y1: 288, x2: 275, y2: 288, label: "13 m", dy: -7 },
          { x1: 284, y1: 25, x2: 284, y2: 275, label: "13 m", dy: 0 }
        ],
        legend: [
          { color: "#1f7a46", label: "13 m \u00D7 13 m carpet" },
          { color: "#0f5e7a", label: "1 m safety margin" }
        ],
        note: "Routines of 75\u201390 s; D-score + E-score; stepping off the carpet is deducted."
      });
    },

    trampoline: function () {
      var m = [];
      m.push(rect(20, 20, 300, 170, "svg-mark--out", "Safety mats around the frame."));
      m.push(rect(40, 40, 260, 130, "svg-mark--soft", "Frame + springs \u2014 raised about 1.15 m."));
      m.push(rect(60, 60, 220, 90, "svg-mark", "Competition bed 4.28 m \u00D7 2.14 m."));
      m.push(line(170, 60, 170, 150, "svg-mark--key", "Centre line."));
      m.push(line(60, 105, 280, 105, "svg-mark--key", "Centre line."));
      return build({
        w: 340, h: 220, bg: "#eef3f6", aria: "Trampoline competition bed diagram",
        markings: m,
        measures: [
          { x1: 60, y1: 164, x2: 280, y2: 164, label: "4.28 m", dy: -7 },
          { x1: 290, y1: 60, x2: 290, y2: 150, label: "2.14 m", dy: 0 }
        ],
        legend: [
          { color: "#1f7a46", label: "Competition bed" },
          { color: "#102a43", label: "Frame & springs" },
          { color: "#0f5e7a", label: "Safety mats" }
        ],
        note: "Routines of 10 skills with \u2265 2 m height each; D + E + flight-time scoring."
      });
    },

    "water-polo": function () {
      var m = [];
      m.push(rect(20, 20, 300, 180, "svg-mark", "Pool 30 m \u00D7 20 m, depth \u2265 1.8 m."));
      m.push(line(170, 20, 170, 200, "svg-mark", "Halfway line."));
      m.push(line(40, 20, 40, 200, "svg-mark--key", "2 m line \u2014 the defensive re-entry zone."));
      m.push(line(300, 20, 300, 200, "svg-mark--key", "2 m line."));
      m.push(line(70, 20, 70, 200, "svg-mark--out", "5 m line \u2014 penalty throws are taken here."));
      m.push(line(270, 20, 270, 200, "svg-mark--out", "5 m line."));
      m.push(rect(20, 86.5, 4, 27, "svg-mark--soft", "Goal: 3 m wide \u00D7 0.9 m high."));
      m.push(rect(316, 86.5, 4, 27, "svg-mark--soft", "Goal."));
      return build({
        w: 350, h: 240, bg: "#e3f0f6", aria: "Water polo pool diagram",
        markings: m,
        measures: [
          { x1: 20, y1: 214, x2: 320, y2: 214, label: "30 m", dy: -7 },
          { x1: 330, y1: 20, x2: 330, y2: 200, label: "20 m", dy: 0 }
        ],
        legend: [
          { color: "#c13a22", label: "2 m line" },
          { color: "#0f5e7a", label: "5 m line" },
          { color: "#102a43", label: "Pool / halfway" }
        ],
        note: "7 per side; 4 \u00D7 8 min (men) / 7 min (women); shot clock 30 s; major fouls bring a 20-second exclusion."
      });
    },

    velodrome: function () {
      var m = [];
      var cy = 110;
      m.push(line(60, 45, 380, 45, "svg-mark", "Outer track edge (blue band)."));
      m.push(line(60, 175, 380, 175, "svg-mark", "Outer track edge."));
      m.push(arc(60, cy, 65, 90, 270, "svg-mark", "Banked bend \u2014 up to 45\u00B0."));
      m.push(arc(380, cy, 65, 270, 90, "svg-mark", "Banked bend."));
      m.push(line(60, 70, 380, 70, "svg-mark--soft", "Inner track edge (blue line)."));
      m.push(line(60, 150, 380, 150, "svg-mark--soft", "Inner track edge."));
      m.push(arc(60, cy, 40, 90, 270, "svg-mark--soft", "Inner bend."));
      m.push(arc(380, cy, 40, 270, 90, "svg-mark--soft", "Inner bend."));
      m.push(line(220, 45, 220, 175, "svg-mark--key", "Finish line \u2014 the 200 m start is here too."));
      m.push(line(60, 80, 380, 80, "svg-mark--out", "Sprinters' red line \u2014 the inner 'pole lane'."));
      m.push(circle(220, 110, 18, "svg-mark--soft", "Infield \u2014 warm-up and officials."));
      return build({
        w: 440, h: 210, bg: "#f0f5e8", aria: "Velodrome track diagram",
        markings: m,
        measures: [
          { x1: 60, y1: 24, x2: 380, y2: 24, label: "straight \u2248 90 m", dy: -7 }
        ],
        legend: [
          { color: "#c13a22", label: "Finish line" },
          { color: "#0f5e7a", label: "Sprinters' line" },
          { color: "#102a43", label: "Track (250 m)" }
        ],
        note: "Track length exactly 250 m; bends bank up to 45\u00B0; sprinters hug the red line for the flying 200 m."
      });
    },

    "rugby-union": function () {
      var m = [];
      m.push(rect(20, 20, 440, 240, "svg-mark", "Field of play up to 100 m \u00D7 70 m."));
      m.push(rect(20, 20, 26, 240, "svg-mark--soft", "In-goal area (try zone) 10\u201322 m deep."));
      m.push(rect(434, 20, 26, 240, "svg-mark--soft", "In-goal area."));
      m.push(line(240, 20, 240, 260, "svg-mark", "Halfway line."));
      m.push(line(240, 20, 240, 260, "svg-mark--soft", "10 m line (each side of halfway)."));
      m.push(line(92, 20, 92, 260, "svg-mark--out", "22 m line."));
      m.push(line(388, 20, 388, 260, "svg-mark--out", "22 m line."));
      m.push(line(46, 20, 46, 260, "svg-mark--key", "Goal line \u2014 grounding here scores a try."));
      m.push(line(434, 20, 434, 260, "svg-mark--key", "Goal line."));
      m.push(line(20, 80, 460, 80, "svg-mark--soft", "5 m line from the touchline."));
      m.push(line(20, 200, 460, 200, "svg-mark--soft", "5 m line."));
      m.push(line(20, 50, 460, 50, "svg-mark--out", "15 m line for line-out positioning."));
      m.push(line(20, 230, 460, 230, "svg-mark--out", "15 m line."));
      m.push(circle(240, 140, 16, "svg-mark--key", "Centre spot for kick-offs."));
      return build({
        w: 480, h: 280, bg: "#eef3f6", aria: "Rugby union pitch diagram",
        markings: m,
        measures: [
          { x1: 46, y1: 276, x2: 434, y2: 276, label: "up to 100 m", dy: -7 },
          { x1: 464, y1: 20, x2: 464, y2: 260, label: "70 m", dy: 0 }
        ],
        legend: [
          { color: "#1f7a46", label: "Field of play" },
          { color: "#c13a22", label: "Goal line / centre" },
          { color: "#0f5e7a", label: "22 m line" },
          { color: "#102a43", label: "In-goal area" }
        ],
        note: "Try 5, conversion 2, penalty 3, drop goal 3. Ball must be passed backwards; forwards contest scrums and line-outs."
      });
    },

    baseball: function () {
      var m = [];
      var hx = 240, hy = 120;
      function diamond(cx, cy, r, cls, info) {
        var pts = [];
        [[1, 0], [0, 1], [-1, 0], [0, -1]].forEach(function (d) {
          pts.push(rn(cx + d[0] * r) + "," + rn(cy + d[1] * r));
        });
        return { t: "p", d: "M " + pts.join(" L ") + " Z", cls: cls, info: info };
      }
      m.push(rect(30, 30, 420, 300, "svg-mark--out", "Outfield fence (boundary)."));
      m.push(diamond(hx, hy, 100, "svg-mark", "Infield diamond \u2014 bases 27.43 m apart."));
      m.push(circle(hx, hy, 14, "svg-mark--key", "Pitcher's mound \u2014 rubber 18.44 m from home plate."));
      m.push(circle(hx, hy - 100, 7, "svg-mark--soft", "Home plate."));
      m.push(circle(hx + 100, hy, 7, "svg-mark--soft", "First base."));
      m.push(circle(hx, hy + 100, 7, "svg-mark--soft", "Third base."));
      m.push(circle(hx + 200, hy, 7, "svg-mark--key", "Second base."));
      m.push(line(30, hy, hx - 100, hy - 100, "svg-mark--out", "Foul line (first base)."));
      m.push(line(30, hy, hx + 100, hy + 100, "svg-mark--out", "Foul line (third base)."));
      return build({
        w: 480, h: 360, bg: "#f0f5e8", aria: "Baseball diamond diagram",
        markings: m,
        legend: [
          { color: "#1f7a46", label: "Diamond / bases 27.43 m" },
          { color: "#c13a22", label: "Pitcher's rubber / 2nd base" },
          { color: "#0f5e7a", label: "Home plate & bases" }
        ],
        note: "9 innings, 3 outs per half. Home run clears the fence in fair territory."
      });
    },

    "ice-hockey": function () {
      var m = [];
      m.push(rect(20, 20, 440, 220, "svg-mark", "Rink 60 m \u00D7 30 m with rounded corners."));
      m.push(line(240, 20, 240, 240, "svg-mark", "Centre red line."));
      m.push(line(128, 20, 128, 240, "svg-mark--key", "Blue line \u2014 offensive/defensive zone."));
      m.push(line(352, 20, 352, 240, "svg-mark--key", "Blue line."));
      m.push(line(54, 20, 54, 240, "svg-mark--out", "Goal line."));
      m.push(line(426, 20, 426, 240, "svg-mark--out", "Goal line."));
      m.push(circle(240, 130, 24, "svg-mark--soft", "Centre face-off circle."));
      m.push(circle(128, 130, 18, "svg-mark--soft", "End-zone face-off circle."));
      m.push(circle(352, 130, 18, "svg-mark--soft", "End-zone face-off circle."));
      m.push(rect(54, 116, 6, 28, "svg-mark--key", "Goal 1.83 m \u00D7 1.22 m."));
      m.push(rect(420, 116, 6, 28, "svg-mark--key", "Goal."));
      return build({
        w: 480, h: 260, bg: "#e3f0f6", aria: "Ice hockey rink diagram",
        markings: m,
        measures: [
          { x1: 20, y1: 250, x2: 460, y2: 250, label: "60 m", dy: -7 },
          { x1: 474, y1: 20, x2: 474, y2: 240, label: "30 m", dy: 0 }
        ],
        legend: [
          { color: "#1f7a46", label: "Rink" },
          { color: "#c13a22", label: "Blue lines / goals" },
          { color: "#0f5e7a", label: "Goal lines" }
        ],
        note: "3 \u00D7 20 min stopped clock; 6 per side; icing and offside restart play; penalties give a power play."
      });
    },

    golf: function () {
      var m = [];
      m.push(rect(20, 20, 440, 260, "svg-mark--out", "Course boundary (out of bounds beyond)."));
      m.push(rect(40, 70, 220, 120, "svg-mark", "Fairway \u2014 short-mown route to the green."));
      m.push(rect(250, 90, 180, 80, "svg-mark--soft", "Rough \u2014 longer grass punishing errant shots."));
      m.push(circle(100, 100, 20, "svg-mark--key", "Tee \u2014 the starting area."));
      m.push(circle(410, 210, 26, "svg-mark", "Green with the cup (hole)."));
      m.push(circle(410, 210, 7, "svg-mark--key", "Cup \u2014 10.8 cm diameter."));
      m.push(circle(180, 180, 14, "svg-mark--out", "Bunker (sand hazard)."));
      m.push(circle(320, 150, 10, "svg-mark--out", "Water hazard (penalty area)."));
      return build({
        w: 480, h: 300, bg: "#f0f5e8", aria: "Golf hole diagram",
        markings: m,
        measures: [
          { x1: 40, y1: 74, x2: 260, y2: 74, label: "fairway", dy: -7 }
        ],
        legend: [
          { color: "#1f7a46", label: "Fairway / green" },
          { color: "#c13a22", label: "Tee & cup" },
          { color: "#0f5e7a", label: "Hazards (bunker, water)" }
        ],
        note: "An 18-hole course of par 70\u201372; birdie = 1 under, bogey = 1 over; the cup is 10.8 cm wide."
      });
    },

    karate: function () {
      var m = [];
      m.push(rect(20, 20, 300, 300, "svg-mark", "Competition mat 8 m \u00D7 8 m (WKF)."));
      m.push(rect(38, 38, 264, 264, "svg-mark--soft", "Safety margin \u2014 the action area."));
      m.push(circle(170, 170, 8, "svg-mark--key", "Centre of the action area."));
      m.push(line(80, 20, 80, 40, "svg-mark--out", "Referee positions at the edges."));
      m.push(line(260, 20, 260, 40, "svg-mark--out", "Corner judges' position."));
      return build({
        w: 340, h: 340, bg: "#f6f0e2", aria: "Karate competition mat diagram",
        markings: m,
        measures: [
          { x1: 20, y1: 330, x2: 320, y2: 330, label: "8 m", dy: -7 },
          { x1: 334, y1: 20, x2: 334, y2: 320, label: "8 m", dy: 0 }
        ],
        legend: [
          { color: "#1f7a46", label: "Competition mat 8 m \u00D7 8 m" },
          { color: "#0f5e7a", label: "Action area / safety margin" }
        ],
        note: "Kumite 3 min (men) / 2 min (women); ippon 3 (head kick), waza-ari 2, yuko 1; kata is judged on form."
      });
    },

    korfball: function () {
      var m = [];
      m.push(rect(20, 20, 440, 220, "svg-mark", "Court 40 m \u00D7 20 m."));
      m.push(line(240, 20, 240, 240, "svg-mark", "Centre line \u2014 splits the court into two zones."));
      m.push(circle(54, 120, 10, "svg-mark--key", "Korf post \u2014 3.5 m high basket."));
      m.push(circle(426, 120, 10, "svg-mark--key", "Korf post."));
      m.push(circle(54, 120, 34, "svg-mark--soft", "2.5 m circle \u2014 attackers must keep distance."));
      m.push(circle(426, 120, 34, "svg-mark--soft", "2.5 m circle."));
      return build({
        w: 480, h: 260, bg: "#eef3f6", aria: "Korfball court diagram",
        markings: m,
        measures: [
          { x1: 20, y1: 250, x2: 460, y2: 250, label: "40 m", dy: -7 },
          { x1: 474, y1: 20, x2: 474, y2: 240, label: "20 m", dy: 0 }
        ],
        legend: [
          { color: "#1f7a46", label: "Court" },
          { color: "#c13a22", label: "Korf post" },
          { color: "#0f5e7a", label: "2.5 m restricted circle" }
        ],
        note: "Mixed teams of 8 (2M + 2F per zone); pass, don't run; no defended shots; zone change after every 2 goals."
      });
    },

    dodgeball: function () {
      var m = [];
      m.push(rect(20, 20, 440, 220, "svg-mark", "Court 18 m \u00D7 9 m."));
      m.push(line(240, 20, 240, 240, "svg-mark", "Centre line \u2014 players may not cross."));
      m.push(line(240, 20, 240, 240, "svg-mark--out", "Attack lines 3 m from the centre."));
      m.push(line(102, 20, 102, 240, "svg-mark--soft", "Back (dead) line \u2014 crossing is out."));
      m.push(line(378, 20, 378, 240, "svg-mark--soft", "Back (dead) line."));
      m.push(circle(170, 130, 8, "svg-mark--key", "Ball start positions at the centre."));
      return build({
        w: 480, h: 260, bg: "#eef3f6", aria: "Dodgeball court diagram",
        markings: m,
        measures: [
          { x1: 20, y1: 250, x2: 460, y2: 250, label: "18 m", dy: -7 },
          { x1: 474, y1: 20, x2: 474, y2: 240, label: "9 m", dy: 0 }
        ],
        legend: [
          { color: "#1f7a46", label: "Court" },
          { color: "#c13a22", label: "Centre / attack lines" },
          { color: "#0f5e7a", label: "Back (dead) lines" }
        ],
        note: "Hit = out; catch = revival + thrower out; headshots illegal; WDBF uses 6\u20137 per side in timed sets."
      });
    },

    ultimate: function () {
      var m = [];
      m.push(rect(20, 20, 440, 200, "svg-mark", "Field 100 m \u00D7 37 m."));
      m.push(rect(20, 20, 101, 200, "svg-mark--soft", "End zone 23 m."));
      m.push(rect(359, 20, 101, 200, "svg-mark--soft", "End zone 23 m."));
      m.push(line(240, 20, 240, 220, "svg-mark", "Brick line \u2014 18 m from the end zone."));
      m.push(line(180, 20, 180, 220, "svg-mark--out", "Brick line."));
      return build({
        w: 480, h: 240, bg: "#f0f5e8", aria: "Ultimate (Frisbee) field diagram",
        markings: m,
        measures: [
          { x1: 20, y1: 232, x2: 460, y2: 232, label: "100 m", dy: -7 },
          { x1: 474, y1: 20, x2: 474, y2: 220, label: "37 m", dy: 0 }
        ],
        legend: [
          { color: "#1f7a46", label: "Field of play" },
          { color: "#0f5e7a", label: "End zones (23 m)" },
          { color: "#c13a22", label: "Brick lines" }
        ],
        note: "7 per side; score in the end zone; no running with the disc; stall 10; self-officiated."
      });
    },

    tchoukball: function () {
      var m = [];
      m.push(rect(20, 20, 440, 220, "svg-mark", "Court 27 m \u00D7 16 m."));
      m.push(line(240, 20, 240, 240, "svg-mark", "Centre line."));
      m.push(rect(28, 86, 18, 48, "svg-mark--key", "Rebound frame (inclined net)."));
      m.push(rect(434, 86, 18, 48, "svg-mark--key", "Rebound frame."));
      m.push(arc(37, 110, 40, 0, 180, "svg-mark--out", "Shooting circle \u2014 shots taken outside it."));
      m.push(arc(443, 110, 40, 0, 180, "svg-mark--out", "Shooting circle."));
      return build({
        w: 480, h: 260, bg: "#eef3f6", aria: "Tchoukball court diagram",
        markings: m,
        measures: [
          { x1: 20, y1: 250, x2: 460, y2: 250, label: "27 m", dy: -7 },
          { x1: 474, y1: 20, x2: 474, y2: 240, label: "16 m", dy: 0 }
        ],
        legend: [
          { color: "#1f7a46", label: "Court" },
          { color: "#c13a22", label: "Rebound frame" },
          { color: "#0f5e7a", label: "Shooting circle" }
        ],
        note: "7 per side; 3 passes max before shooting; no contact; 1 point if the rebound lands untouchaed."
      });
    }
  }
})();
