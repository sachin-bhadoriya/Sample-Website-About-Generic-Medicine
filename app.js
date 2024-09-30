let left = document.querySelector('.crsl-btn-left');
let right = document.querySelector('.crsl-btn-right');
let images = document.querySelectorAll('.images');
let slider = document.querySelector('.slider');
let length = images.length;
let slideNumber = 1;
let interval; // Declare interval variable

// Auto sliding function call
autoSlide();

// Autosliding function
function autoSlide() {
    interval = setInterval(goNextSlide, 3000); // Set the interval
}

function goNextSlide() {
    slideNumber++;
    if (slideNumber > length) {
        slideNumber = 1; // Reset to first slide
    }
    slider.style.transform = `translateX(-${(slideNumber - 1) * 1100}px)`;
}

function goPrevSlide() {
    slideNumber--;
    if (slideNumber < 1) {
        slideNumber = length; // Go to last slide
    }
    slider.style.transform = `translateX(-${(slideNumber - 1) * 1100}px)`;
}

function goFirstSlide() {
    slideNumber = 1;
    slider.style.transform = `translateX(0px)`;
}

function goLastSlide() {
    slideNumber = length;
    slider.style.transform = `translateX(-${(length - 1) * 1100 }px)`;
}

// Right sliding event
right.addEventListener('click', () => {
    goNextSlide();
});

// Left sliding event
left.addEventListener('click', () => {
    goPrevSlide();
});
