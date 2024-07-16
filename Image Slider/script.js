let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const captions = [
    "Tiger",
    "Balloon",
    "Forest",
    "Galaxy",
    "Goldfish",
    "Paris",
    "Rose",
    "Dog",
    "Scenery",
    "Painting"
];

document.querySelector('.next').addEventListener('click', () => {
    moveToNextSlide();
});

document.querySelector('.prev').addEventListener('click', () => {
    moveToPreviousSlide();
});

function updateSlides() {
    const offset = -currentIndex * 100;
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;

    const captionElement = document.getElementById('caption');
    captionElement.style.opacity = 0;
    setTimeout(() => {
        captionElement.innerText = captions[currentIndex];
        captionElement.style.opacity = 1; 
    }, 500); 

    const currentSlideSrc = slides[currentIndex].src;
    document.querySelector('.background-container').style.backgroundImage = `url(${currentSlideSrc})`;
}

function moveToNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlides();
}

function moveToPreviousSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlides();
}

updateSlides();
