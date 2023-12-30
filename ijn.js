const burger = document.querySelector('.burger');
const mainMenu = document.querySelector('.main-menu');

burger.addEventListener('click', () => {
  mainMenu.classList.toggle('show');
});
