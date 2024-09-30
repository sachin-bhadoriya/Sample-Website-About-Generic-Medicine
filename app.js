let left = document.querySelector('.crsl-btn-left');
let right = document.querySelector('.crsl-btn-right');
let images = document.querySelectorAll('.images');
let slider = document.querySelector('.slider');
let length = images.length;
let slideNumber = 1;
let interval; 

autoSlide();

function autoSlide() {
    interval = setInterval(goNextSlide, 3000); 
}

function goNextSlide() {
    slideNumber++;
    if (slideNumber > length) {
        slideNumber = 1; 
    }
    slider.style.transform = `translateX(-${(slideNumber - 1) * 1100}px)`;
}

function goPrevSlide() {
    slideNumber--;
    if (slideNumber < 1) {
        slideNumber = length; 
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

right.addEventListener('click', () => {
    goNextSlide();
});

left.addEventListener('click', () => {
    goPrevSlide();
});
