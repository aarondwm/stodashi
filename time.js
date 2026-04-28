(function () {
  var el = document.getElementById('local-time');
  if (!el) return;
  var fmt = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Kuwait',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });
  function tick() { el.textContent = 'KWT ' + fmt.format(new Date()); }
  tick();
  setInterval(tick, 60000);
})();
