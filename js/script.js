"use strict";

const phone = document.getElementsByClassName('promo__phone'),
      header = document.getElementsByClassName('header'),
      pageup = document.getElementsByClassName('pageup'),
      menu = document.querySelector('.menu'),
      hamburger = document.querySelector('.hamburger'),
      cross = document.querySelector('.menu__close'),
      links = document.querySelectorAll('.bonus__link'),
      bonusMore = document.querySelectorAll('.bonus__link-more'),
      bonusBack = document.querySelectorAll('.bonus__link-back'),
      bonusMain = document.querySelectorAll('.bonus__main'),
      bonusDescr = document.querySelectorAll('.bonus__descr');

document.addEventListener('scroll', () => {
    if (pageYOffset >= 100) {
        phone[0].classList.add('promo__phone_scrolled');
        
    } else {
        phone[0].classList.remove('promo__phone_scrolled');
    }
    if (pageYOffset >= 250) {
        header[0].classList.add('header_scrolled');
    } else {
        header[0].classList.remove('header_scrolled');
    }
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

bonusMain.forEach((e) => {
    e.document.querySelector('a').preventDefault();
});