const carousel = document.querySelector('.slideshow');
const slide = document.querySelector('.slide');

function handleCarouselMove(positive = true){
    const slideWidth = slide.clientWidth;
    carousel.scrollLeft = positive ? carousel.scrollLeft + slideWidth : carousel.scrollLeft - slideWidth;
}