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



document.addEventListener("DOMContentLoaded", function() {
    var aboutContainer = document.querySelector('.about--container');
    var portfolioContent = document.getElementById('portfolioContent');
    var portfolioImages = document.querySelectorAll('.portfolio--image');

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }


    function addFadeInClass(element) {
        element.classList.add('fade-in');
    }
    function checkVisibilityAndFadeIn() {
        if (isElementInViewport(aboutContainer)) {
            addFadeInClass(aboutContainer);
        }

        if (isElementInViewport(portfolioContent)) {
            addFadeInClass(portfolioContent);
        }

        portfolioImages.forEach(function(image) {
            if (isElementInViewport(image)) {
                addFadeInClass(image);
            }
        });
    }
    checkVisibilityAndFadeIn();
    window.addEventListener('scroll', function() {
        checkVisibilityAndFadeIn();
    });
});