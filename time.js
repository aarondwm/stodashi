(function () {
  var el = document.getElementById('local-time');
  if (!el) return;
  var fmt = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/London',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });
  function tick() { el.textContent = 'LDN ' + fmt.format(new Date()); }
  tick();
  setInterval(tick, 60000);
})();
