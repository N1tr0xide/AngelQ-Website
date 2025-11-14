
const SPACER_PADDING = 50; //px
const header = document.getElementById('main-header');
const spacer = document.getElementById('header-spacer');

window.onresize = adjustSpacer;
window.onload = adjustSpacer;
if (window.visualViewport)  window.visualViewport.addEventListener('resize', () => { adjustSpacer(); });

function adjustSpacer() {
  spacer.style.height = (header.offsetHeight + SPACER_PADDING) + 'px';
}

