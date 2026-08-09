/* ==========================================================================
   THE ARENA — Mini Markdown Renderer
   A tiny, safe renderer for the article bodies written by the community.
   Supports: headings, bold/italic, inline code, [[wiki-links]], lists,
   tables, blockquotes, callouts (>>> type ... ) and hr.
   ========================================================================== */

(function () {
  "use strict";

  function esc(s) {
    return s
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /* Inline formatting: `code`, **bold**, *italic*, [[slug|text]] */
  function inline(s) {
    s = esc(s);
    s = s.replace(/`([^`]+)`/g, "<code>$1</code>");
    s = s.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    s = s.replace(/\*([^*]+)\*/g, "<em>$1</em>");
    s = s.replace(/\[\[([a-z0-9-]+)\|([^\]]+)\]\]/g, function (m, slug, text) {
      var slugLower = slug.toLowerCase();
      var exists = window.SPORTS_BY_SLUG && window.SPORTS_BY_SLUG[slugLower];
      var href = "#/article/" + slugLower;
      return '<a href="' + href + '">' + text + "</a>" + (exists ? "" : '<sup title="stub article">*</sup>');
    });
    return s;
  }

  function renderTable(lines) {
    var html = '<div class="tablewrap"><table class="data">';
    lines.forEach(function (row, idx) {
      var cells = row.split("|").map(function (c) { return c.trim(); });
      if (cells.length && cells[0] === "") cells.shift();
      if (cells.length && cells[cells.length - 1] === "") cells.pop();
      if (idx === 1 && cells.every(function (c) { return /^:?-{2,}:?$/.test(c); })) {
        return; /* skip separator row */
      }
      var tag = idx === 0 ? "th" : "td";
      html += "<tr>";
      cells.forEach(function (c) {
        html += "<" + tag + ">" + inline(c) + "</" + tag + ">";
      });
      html += "</tr>";
    });
    html += "</table></div>";
    return html;
  }

  /* >>> type\nlabel\nbody lines ... (ends at blank line or next >>>) */
  function renderCallout(type, lines) {
    var label = lines.length ? lines[0] : "";
    var body = lines.slice(1).join("\n");
    var cls = "callout";
    if (type === "exam") cls += " callout--exam";
    var labelHtml = label ? '<span class="callout__label">' + inline(label) + "</span>" : "";
    return '<div class="' + cls + '"><div>' + labelHtml + "<p>" + inline(body) + "</p></div></div>";
  }

  function renderBlockquote(lines) {
    var inner = [];
    var src = "";
    lines.forEach(function (l) {
      if (/^> (?:--|from|source)\s*:?\s*/i.test(l.trim())) {
        src = l.trim().replace(/^>\s*/, "").replace(/^(?:--|from|source)\s*:?\s*/i, "");
      } else {
        inner.push(l);
      }
    });
    var html = "<blockquote><p>" + inline(inner.join("\n")) + "</p>";
    if (src) html += '<span class="bq__src">\u2014 ' + inline(src) + "</span>";
    return html + "</blockquote>";
  }

  window.MARKDOWN = {
    /* main entry: string body -> html fragment */
    render: function (body) {
      var lines = body.split("\n");
      var html = "";
      var i = 0;
      var para = [];
      var inList = null;
      var tableBuf = null;
      var blockquoteBuf = null;

      function flushPara() {
        if (para.length) {
          html += "<p>" + inline(para.join(" ")) + "</p>\n";
          para = [];
        }
      }
      function flushList() {
        if (inList) { html += "</" + inList + ">\n"; inList = null; }
      }
      function flushTable() {
        if (tableBuf) { html += renderTable(tableBuf); tableBuf = null; }
      }
      function flushQuote() {
        if (blockquoteBuf) { html += renderBlockquote(blockquoteBuf); blockquoteBuf = null; }
      }

      function flushAll() { flushPara(); flushList(); flushTable(); flushQuote(); }

      for (; i < lines.length; i++) {
        var raw = lines[i];
        var line = raw.trim();

        /* callout */
        var co = line.match(/^>>>\s*(\w+)\s*$/);
        if (co) {
          flushAll();
          var buf = [];
          i++;
          while (i < lines.length && !/^>>>/.test(lines[i].trim()) && lines[i].trim() !== "") {
            buf.push(lines[i]);
            i++;
          }
          if (/^>>>/.test((lines[i] || "").trim())) i--;
          html += renderCallout(co[1], buf);
          continue;
        }

        /* hr */
        if (/^(---+|\*\*\*+)$/.test(line)) { flushAll(); html += '<hr class="divider" />'; continue; }

        /* table */
        if (line.indexOf("|") === 0 || (line.indexOf("|") > -1 && /^\|.*\|$/.test(line))) {
          flushPara(); flushList(); flushQuote();
          tableBuf = tableBuf || [];
          tableBuf.push(line);
          continue;
        } else if (tableBuf) { flushTable(); }

        /* headings */
        if (/^##\s+/.test(line)) { flushAll(); html += "<h2>" + inline(line.replace(/^##\s+/, "")) + "</h2>\n"; continue; }
        if (/^###\s+/.test(line)) { flushAll(); html += "<h3>" + inline(line.replace(/^###\s+/, "")) + "</h3>\n"; continue; }

        /* lists */
        var ul = line.match(/^-\s+(.*)/);
        if (ul) {
          flushPara(); flushTable(); flushQuote();
          if (inList !== "ul") { flushList(); html += "<ul>\n"; inList = "ul"; }
          html += "<li>" + inline(ul[1]) + "</li>\n";
          continue;
        }
        var ol = line.match(/^\d+\.\s+(.*)/);
        if (ol) {
          flushPara(); flushTable(); flushQuote();
          if (inList !== "ol") { flushList(); html += "<ol>\n"; inList = "ol"; }
          html += "<li>" + inline(ol[1]) + "</li>\n";
          continue;
        }

        /* blockquote */
        if (line.indexOf("> ") === 0) {
          flushPara(); flushList(); flushTable();
          blockquoteBuf = blockquoteBuf || [];
          blockquoteBuf.push(raw.replace(/^>\s?/, ""));
          continue;
        } else if (blockquoteBuf) { flushQuote(); }

        if (line === "") { flushAll(); continue; }

        para.push(raw);
      }
      flushAll();
      return html;
    },

    renderInline: inline,

    /* Turn a plain body back into editable markdown (strips nothing — body is already markdown source) */
    escapeForEditor: function (s) { return s; }
  };
})();
