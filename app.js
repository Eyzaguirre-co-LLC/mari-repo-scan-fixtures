// Shows how long ago the page loaded, refreshed every second.
const started = Date.now();
function tick() {
  const seconds = Math.round((Date.now() - started) / 1000);
  document.getElementById('age').textContent = `Loaded ${seconds} s ago.`;
}
setInterval(tick, 1000);
tick();
