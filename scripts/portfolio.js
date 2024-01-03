document.addEventListener('DOMContentLoaded', (event) => {
  const loadMoreButton = document.getElementById('loadMore');
  const portfolioImages = Array.from(document.getElementsByClassName('portfolio--image'));

  function checkWidth() {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 768) {
          portfolioImages.slice(0, 4).forEach(img => img.classList.remove('hidden'));
          portfolioImages.slice(4).forEach(img => img.classList.add('hidden'));
          loadMoreButton.style.display = 'block';
      } else {
          portfolioImages.forEach(img => img.classList.remove('hidden'));
          loadMoreButton.style.display = 'none';
      }
  }

  loadMoreButton.addEventListener('click', () => {
      portfolioImages.forEach(img => img.classList.remove('hidden'));
      loadMoreButton.style.display = 'none';
  });

  window.addEventListener('resize', checkWidth);
  checkWidth();
});