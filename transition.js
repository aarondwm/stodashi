(function () {
  function isInternal(a) {
    if (!a || !a.getAttribute('href')) return false;
    if (a.target && a.target !== '' && a.target !== '_self') return false;
    if (a.hasAttribute('download')) return false;
    var url;
    try { url = new URL(a.href, location.href); } catch (e) { return false; }
    if (url.origin !== location.origin) return false;
    if (url.protocol === 'mailto:' || url.protocol === 'tel:') return false;
    if (url.pathname === location.pathname && url.search === location.search) return false;
    return true;
  }

  document.addEventListener('click', function (e) {
    if (e.defaultPrevented) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    if (e.button !== 0) return;
    var a = e.target.closest('a');
    if (!isInternal(a)) return;
    e.preventDefault();
    document.documentElement.classList.add('leaving');
    setTimeout(function () { window.location.href = a.href; }, 280);
  });

  window.addEventListener('pageshow', function () {
    document.documentElement.classList.remove('leaving');
  });
})();
