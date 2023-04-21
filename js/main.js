
const closeNavigation = document.querySelector('.close-mobile-navigation');
const hamburger = document.querySelector('.hamburger-toogle');

const one = document.querySelector('.mobile-navigation-conteiner');


closeNavigation.addEventListener('click', function() {

  one.classList.toggle('hidde-navigation');
});

hamburger.addEventListener('click', function() {

    one.classList.toggle('hidde-navigation');
  });


 const slider = document.querySelector('.slider-wrapper');
const cards = document.querySelectorAll('.card');
const arrowLeft = document.querySelector('.action-wrapper-left');
const arrowRight = document.querySelector('.action-wrapper-right');

let counter = 0;
const size = cards[0].clientWidth;

slider.style.transform = 'translateX(' + (-size * counter) + 'px)';

arrowRight.addEventListener('click', () => {
  if (counter >= cards.length - 4) return;
  slider.style.transition = "transform 0.4s ease-in-out";
  counter++;
  slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
  cards[1].style.margin = '0';
});

arrowLeft.addEventListener('click', () => {
  if (counter <= 0) return;
  slider.style.transition = "transform 0.4s ease-in-out";
  counter--;
  slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
  cards[1].style.marginLeft = '20px';
});

slider.addEventListener('transitionend', () => {
  if (cards[counter].classList.contains('last-item')) {
    slider.style.transition = "none";
    counter = cards.length - 5;
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }

  if (cards[counter].classList.contains('first-item')) {
    slider.style.transition = "none";
    counter = 0;
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
});

cards.forEach((card, i) => {
  if (i == 0) card.classList.add('first-item');
  if (i == cards.length - 1) card.classList.add('last-item');
});

