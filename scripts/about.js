document.getElementById('readmore-button').addEventListener('click', function() {
  document.getElementById('hidden-content').style.display = 'block';
  document.getElementById('hide-on-mobile').style.display = 'opacity: 0;'
  'transition: opacity 0.5s ease-in-out;';
});

document.addEventListener("DOMContentLoaded", function() {
  var aboutContainer = document.querySelector('.about--container');
  setTimeout(function() {
      aboutContainer.classList.add('fade-in');
  }, 500);
});