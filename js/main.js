// Получаем элемент с классом "img"
const closeNavigation = document.querySelector('.close-mobile-navigation');
const hamburger = document.querySelector('.hamburger-toogle');
// Получаем элемент с классом "one"
const one = document.querySelector('.mobile-navigation-conteiner');

// Добавляем обработчик события клика на изображение
closeNavigation.addEventListener('click', function() {
  // Добавляем класс "active" к элементу с классом "one"
  one.classList.toggle('hidde-navigation');
});

hamburger.addEventListener('click', function() {
    // Добавляем класс "active" к элементу с классом "one"
    one.classList.toggle('hidde-navigation');
  });