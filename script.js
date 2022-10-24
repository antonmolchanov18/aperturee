'use strict'

const header = document.querySelector('.header'),
    burger = document.querySelector('#burger'),
    menuList = document.querySelector('.menu__list');

function burgerOpen() {
    this.classList.toggle('__active');
    menuList.classList.toggle('__active');
    if (burger.classList.contains('__active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}
window.addEventListener( 'scroll', () => {
    if (this.scrollY > header.offsetHeight) {
        header.classList.add('__scroll');
    } else {
        header.classList.remove('__scroll');
    }
    
})

burger.addEventListener( 'click', burgerOpen);

