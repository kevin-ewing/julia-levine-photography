let slideIndex = 0;
let slides = document.querySelectorAll('.slide');
let loader = document.getElementById('loader');
let slideshowContainer = document.querySelector('.page');
let slideInterval;

function showSlides(n = slideIndex + 1) {
    slides[slideIndex].classList.remove('active');
    slideIndex = (n + slides.length) % slides.length;
    slides[slideIndex].classList.add('active');
}

function changeSlide(n) {
    clearInterval(slideInterval);
    showSlides(slideIndex + n);
    slideInterval = setInterval(showSlides, 7500);
}

function hideLoader() {
    loader.classList.add('hidden');
    slideshowContainer.classList.remove('hidden');
}

function checkImagesLoaded() {
    let loadedCount = 0;

    slides.forEach((slide) => {
        const img = new Image();
        img.src = slide.src;
        img.onload = () => {
            loadedCount++;
            if (loadedCount === slides.length) {
                hideLoader();
                slideInterval = setInterval(showSlides, 7500);
                showSlides(slideIndex);
            }
        };
        img.onerror = () => {
            loadedCount++;
            if (loadedCount === slides.length) {
                hideLoader();
                slideInterval = setInterval(showSlides, 7500);
                showSlides(slideIndex);
            }
        };
    });
}

window.addEventListener('load', () => {
    checkImagesLoaded();
});
