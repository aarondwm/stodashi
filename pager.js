(function () {
  var prev = document.querySelector('[data-pager-prev]');
  var next = document.querySelector('[data-pager-next]');
  if (!prev && !next) return;

  document.addEventListener('keydown', function (e) {
    if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
    var t = e.target;
    if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) return;
    if (e.key === 'ArrowLeft' && prev) {
      e.preventDefault();
      window.location.href = prev.href;
    } else if (e.key === 'ArrowRight' && next) {
      e.preventDefault();
      window.location.href = next.href;
    }
  });
})();
