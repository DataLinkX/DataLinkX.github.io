/* =========================================================
   Site behaviour: mobile nav + Markdown content loader
   ========================================================= */

// --- Mobile nav toggle ---
function toggleMenu() {
  var m = document.getElementById('menu');
  if (m) m.classList.toggle('open');
}

// --- Markdown loader ---
// Any element with [data-md="/content/xxx.md"] gets that file fetched,
// rendered with marked, and injected. Styling comes from .md-content CSS.
(function () {
  if (typeof marked !== 'undefined' && marked.setOptions) {
    marked.setOptions({ gfm: true, breaks: false });
  }

  function enhance(container) {
    // Open external links in a new tab
    container.querySelectorAll('a[href^="http"]').forEach(function (a) {
      a.setAttribute('target', '_blank');
      a.setAttribute('rel', 'noopener');
    });
    // Tag every ordered list so publication styling applies
    container.querySelectorAll('ol').forEach(function (ol) {
      ol.classList.add('pubs');
    });
  }

  function load(el) {
    var src = el.getAttribute('data-md');
    fetch(src, { cache: 'no-cache' })
      .then(function (r) {
        if (!r.ok) throw new Error(r.status + ' ' + r.statusText);
        return r.text();
      })
      .then(function (md) {
        el.innerHTML = marked.parse(md);
        enhance(el);
        el.classList.add('loaded');
      })
      .catch(function (err) {
        el.innerHTML =
          '<p style="color:#7b2b25">Content failed to load (' +
          src + '): ' + err.message + '</p>';
      });
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('[data-md]').forEach(load);
  });
})();
