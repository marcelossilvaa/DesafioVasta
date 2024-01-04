document.addEventListener("DOMContentLoaded", function() {
  var scrollProgressContainer = document.getElementById('scroll-progress-container');
  var scrollProgress = document.getElementById('scroll-progress');

  window.addEventListener('scroll', function() {
      var scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      scrollProgress.style.width = scrolled + '%';
  });

  window.addEventListener('scroll', function() {
      if (window.scrollY > 100) {
          scrollProgressContainer.style.display = 'block';
      } else {
          scrollProgressContainer.style.display = 'none';
      }
  });
});
