
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    fadeOutAndRedirect();
  }, 3000);
});

function fadeOutAndRedirect() {
  const body = document.body;
  body.style.transition = 'opacity 1s';
  body.style.opacity = 0;

  setTimeout(function () {
    window.location.href = "https://ananditasinghh.github.io/SurPravah/"; 
  }, 1000); 
}
