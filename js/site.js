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
    // Bold + darken the * (corresponding) and # (equal contribution) markers
    markSymbols(container);
  }

  // Wrap every literal * and # with <strong class="mark"> so author markers
  // stand out — ONLY inside publication list items (not the legend line),
  // and skipping any text inside links.
  function markSymbols(root) {
    var targets = [];
    root.querySelectorAll('ol.pubs li').forEach(function (li) {
      var walker = document.createTreeWalker(li, NodeFilter.SHOW_TEXT, null);
      var n;
      while ((n = walker.nextNode())) {
        if (/[*#]/.test(n.nodeValue) &&
            !(n.parentNode.closest && n.parentNode.closest('a'))) {
          targets.push(n);
        }
      }
    });
    targets.forEach(function (node) {
      var frag = document.createDocumentFragment();
      node.nodeValue.split(/([*#])/).forEach(function (part) {
        if (part === '*' || part === '#') {
          var s = document.createElement('strong');
          s.className = 'mark';
          s.textContent = part;
          frag.appendChild(s);
        } else if (part) {
          frag.appendChild(document.createTextNode(part));
        }
      });
      node.parentNode.replaceChild(frag, node);
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

function fallbackCopy(text) {
  var t = document.createElement('textarea');
  t.value = text; t.setAttribute('readonly', ''); t.style.position = 'fixed'; t.style.opacity = '0';
  document.body.appendChild(t); t.select();
  try { document.execCommand('copy'); } catch (e) {}
  document.body.removeChild(t);
}

// --- Modals: [data-open="id"] opens <dialog id="id">; [data-close],
//     Esc, or a click on the backdrop closes it ---
(function () {
  document.addEventListener('click', function (e) {
    var opener = e.target.closest && e.target.closest('[data-open]');
    if (opener) {
      var d = document.getElementById(opener.getAttribute('data-open'));
      if (d && d.showModal) { d.showModal(); }
      else if (d) { d.setAttribute('open', ''); }
      return;
    }
    var copier = e.target.closest && e.target.closest('[data-copy]');
    if (copier) {
      var text = copier.getAttribute('data-copy');
      var done = function () {
        var label = copier.textContent;
        copier.textContent = 'Copied ✓'; copier.classList.add('done');
        setTimeout(function () { copier.textContent = label; copier.classList.remove('done'); }, 1600);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, function () { fallbackCopy(text); done(); });
      } else { fallbackCopy(text); done(); }
      return;
    }
    var closer = e.target.closest && e.target.closest('[data-close]');
    if (closer) {
      var dlg = closer.closest('dialog');
      if (dlg) dlg.close ? dlg.close() : dlg.removeAttribute('open');
      return;
    }
    // click on the dimmed backdrop (outside the dialog box) closes it
    if (e.target.tagName === 'DIALOG' && e.target.open) {
      var r = e.target.getBoundingClientRect();
      if (e.clientX < r.left || e.clientX > r.right ||
          e.clientY < r.top || e.clientY > r.bottom) e.target.close();
    }
  });
})();
