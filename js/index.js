let dom = function (selector) {
    return document.querySelector(selector);
}
let menuBurger = dom('.menu__burger');
const clickBurger = function () {
    menuBurger.classList.toggle('show');
}
let contact = dom('.contact');
let lineRight = dom('.line__info .line__content .right')
const clickLine = function() {
    contact.classList.toggle('show');
    lineRight.classList.toggle('bg__color');
}
let closemenu = dom('.close__menu');
const closeButton = function() {
    menuBurger.classList.remove('show');
}