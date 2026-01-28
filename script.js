document.addEventListener('DOMContentLoaded', function () {

function initSlideshows(selector) {
    document.querySelectorAll(selector).forEach(function (slideshow) {
        var slides = slideshow.querySelectorAll('.slide');
        var index = 0;

        var nextBtn = slideshow.querySelector('.next');
        var prevBtn = slideshow.querySelector('.prev');

        nextBtn.addEventListener('click', function () {
            slides[index].classList.remove('slide_active');
            index = (index + 1) % slides.length;
            slides[index].classList.add('slide_active');
        });

        prevBtn.addEventListener('click', function () {
            slides[index].classList.remove('slide_active');
            index = (index - 1 + slides.length) % slides.length;
            slides[index].classList.add('slide_active');
        });
    });
}

// obsługiwane galerie
initSlideshows('.slideshow');
});
