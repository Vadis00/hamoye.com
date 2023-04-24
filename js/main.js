
const closeNavigation = document.querySelector('.close-mobile-navigation');
const hamburger = document.querySelector('.hamburger-toogle');

const one = document.querySelector('.mobile-navigation-conteiner');


closeNavigation.addEventListener('click', function () {

  one.classList.toggle('hidde-navigation');
});

hamburger.addEventListener('click', function () {

  one.classList.toggle('hidde-navigation');
});


const sliderWrapper = document.querySelector('.slider-wrapper');
const cards = document.querySelectorAll('.card');
const arrowLeft = document.querySelector('.action-wrapper-left');
const arrowRight = document.querySelector('.action-wrapper-right');

let counter = 0;
let size = cards[0].clientWidth;

let offsetCount = 0;
let offsetWidth = 0;
let offsetMargin = 10;

sliderWrapper.style.transform = 'translateX(' + (-size * counter) + 'px)';


arrowRight.addEventListener('click', () => {

  if (window.innerWidth >= 1100) {
    //  console.log(window.innerWidth);
    offsetCount = 4;
    offsetWidth = -25;
    offsetMargin = 15;
  } else if (window.innerWidth < 1100 && window.innerWidth >= 950) {
    offsetCount = 3;
    offsetWidth = -33;
    offsetMargin = 10;
  }
  else if (window.innerWidth < 950 && window.innerWidth >= 600) {
    offsetCount = 2;
    offsetWidth = -50;
    offsetMargin = 10;
  }

  size = cards[0].clientWidth;
  if (counter >= cards.length - offsetCount) return;
  sliderWrapper.style.transition = "transform 0.4s ease-in-out";
  counter++;


  //sliderWrapper.style.transform = 'translateX(' + (-size * counter) + 'px)';

  sliderWrapper.style.transform = 'translateX(calc(' + offsetWidth * counter + '% + ' + offsetMargin * counter + 'px)';

  cards[counter].style.margin = '0';
});

arrowLeft.addEventListener('click', () => {
  size = cards[0].clientWidth;
  if (counter <= 0) return;
  sliderWrapper.style.transition = "transform 0.4s ease-in-out";
  cards[counter].style.marginLeft = '20px';
  counter--;
  sliderWrapper.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

sliderWrapper.addEventListener('transitionend', () => {
  if (cards[counter].classList.contains('last-item')) {
    sliderWrapper.style.transition = "none";
    counter = cards.length - 5;
    sliderWrapper.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }

  if (cards[counter].classList.contains('first-item')) {
    sliderWrapper.style.transition = "none";
    counter = 0;
    sliderWrapper.style.transition = "transform 0.4s ease-in-out";
    sliderWrapper.style.transform = 'translateX(0)';

  }
});

cards.forEach((card, i) => {
  if (i == 0) card.classList.add('first-item');
  if (i == cards.length - 1) card.classList.add('last-item');
});

window.addEventListener('resize', function () {

  if (window.innerWidth >= 1100) {
    cards[0].style.margin = '0';

    if (counter >= 2) {
      counter = 1;
    }
    sliderWrapper.style.transform = 'translateX(calc(' + -25 * counter + '% + 15px)';
    cards[2].style.marginLeft = '20px';
    cards[3].style.marginLeft = '20px';

  } else if (window.innerWidth < 1100 && window.innerWidth >= 950) {

    if (counter !== 0) {
      sliderWrapper.style.transform = 'translateX(calc(' + -33 * counter + '% + 9px)';
    }

  }
  else if (window.innerWidth < 950 && window.innerWidth >= 600) {
      sliderWrapper.style.transform = 'translateX(calc(' + -50 * counter + '%' + counter * 10+ 'px))';
      sliderWrapper.style.transform = 'translateX(calc(' + -50 * counter + '% + 9px)';
      console.log(counter)
  }
});

 
/* const scrollContainer = document.querySelector('.slider');

setInterval(() => {
  // scroll by a fixed amount (adjust as needed)
  scrollContainer.scrollLeft += 1;
}, 100); // adjust the interval (in milliseconds) as needed

 */
// Находим контейнер, который нужно скроллить


let sliderItems = document.querySelectorAll('.slider-item')
let currentIndex = 0;

function showCurrentSlide() {
  // remove class active from all items
  sliderItems.forEach(item => item.classList.remove('active'))

  // add class active to current slide and neighboring slides
  sliderItems[currentIndex].classList.add('active')
  if (currentIndex > 0)
    sliderItems[currentIndex - 1].classList.add('active')
  if (currentIndex < sliderItems.length - 1)
    sliderItems[currentIndex + 1].classList.add('active')
}





const carousel = document.querySelector('.carousel');
const carouselInner = carousel.querySelector('.carousel-inner');
const carouselItems = carousel.querySelectorAll('.carousel-item');
const prevButton = carousel.querySelector('.carousel-prev');
const nextButton = carousel.querySelector('.carousel-next');
const itemWidth = carouselItems[0].offsetWidth;
let currentIndex1 = 0;
let currentLarge = 1;

function updateCarousel() {
  carouselInner.style.transform = `translateX(-${currentIndex1 * itemWidth}px)`;
}

function next() {
  if (currentIndex1 < carouselItems.length - 1) {

    carouselItems[currentLarge].classList.remove('large-item');
    currentLarge++;
    carouselItems[currentLarge].classList.add('large-item');
    currentIndex1++;
    updateCarousel();
  }
}

function prev() {
  if (currentIndex1 > 0) {
    carouselItems[currentLarge].classList.remove('large-item');
    currentLarge--;
    carouselItems[currentLarge].classList.add('large-item');


    currentIndex1--;
    updateCarousel();
  }
}

nextButton.addEventListener('click', next);
prevButton.addEventListener('click', prev);

updateCarousel();
