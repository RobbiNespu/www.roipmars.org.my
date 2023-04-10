let sttButton = document.getElementById('scrollToTop');
window.onscroll = function () { scrollFunction() };
sttButton.style.display = 'none';

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    sttButton.style.display = 'flex';
  } else {
    sttButton.style.display = 'none';
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}