let sttButton = document.getElementById('scrollToTop');
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    sttButton.style.display = 'block';
  } else {
    sttButton.style.display = 'none';
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}