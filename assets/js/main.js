/* ---------------------------------------------------------------------
 * main.js — purely decorative: a live clock in the header, matching the
 * finance-terminal motif used across the linked projects.
 * ------------------------------------------------------------------- */
(function () {
  'use strict';
  const el = document.getElementById('clock');
  if (!el) return;
  function tick() {
    el.textContent = new Date().toLocaleTimeString('en-US', { hour12: false });
  }
  tick();
  setInterval(tick, 1000);
})();
