let dom = function (selector) {
    return document.querySelector(selector);
}
let menuBurger = dom('.menu__burger');
const clickBurger = function () {
    menuBurger.classList.toggle('show');
}