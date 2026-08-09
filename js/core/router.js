/* ==========================================================================
   THE ARENA — Hash router
   Routes live behind the #/ ... hash so the whole site works as static
   files with no server.
   ========================================================================== */

(function () {
  "use strict";

  function parse() {
    var hash = location.hash || "#/";
    var pathPart = hash.replace(/^\#\/?/, "");          /* strip #/ */
    var qIndex = pathPart.indexOf("?");
    var query = {};
    if (qIndex > -1) {
      var qs = pathPart.slice(qIndex + 1);
      new URLSearchParams(qs).forEach(function (v, k) { query[k] = v; });
      pathPart = pathPart.slice(0, qIndex);
    }
    var segs = pathPart.split("/").filter(Boolean);
    var name = segs[0] || "home";
    return { name: name, segs: segs, query: query };
  }

  window.ROUTER = {
    parse: parse,
    navigate: function (route) {
      location.hash = route || "#/";
    }
  };
})();
