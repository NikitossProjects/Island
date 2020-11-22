"use strict"

const header = document.getElementsByClassName('header'),
      pageup = document.getElementsByClassName('pageup'),
      menu = document.querySelector('.menu'),
      hamburger = document.querySelector('.hamburger'),
      cross = document.querySelector('.menu__close');

document.addEventListener('scroll', () => {
    if (pageYOffset >= 350) {
        pageup[0].classList.add('pageup_active');
    } else {
        pageup[0].classList.remove('pageup_active');
    }
});

hamburger.addEventListener('click', () => {
    menu.classList.add('menu_active');
});

cross.addEventListener('click', () => {
    menu.classList.remove('menu_active');
});