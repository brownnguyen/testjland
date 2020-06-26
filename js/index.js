var dom = function (selector) {
    return document.querySelector(selector);
}
var menuBurger = dom('.menu__burger');
const clickBurger = function () {
    menuBurger.classList.add('show');
}
var contact = dom('.contact');
var lineRight = dom('.line__info .line__content .right')
const clickLine = function () {
    contact.classList.toggle('show');
    lineRight.classList.toggle('bg__color');
}
var closemenu = dom('.close__menu');
const closeButton = function () {
    menuBurger.classList.remove('show');
}
window.addEventListener("scroll", function (event) {
    var top = this.scrollY;
    if (top > 600) {
        odometer0.innerHTML = 8888;
        setTimeout(function () {
            odometer1.innerHTML = 88;
        }, 200);
        setTimeout(function () {
            odometer2.innerHTML = 88;
        }, 500);
        setTimeout(function () {
            odometer3.innerHTML = 88;
        }, 1000);
        setTimeout(function () {
            odometer4.innerHTML = 88;
        }, 1200);
    }
    if (top > 2500) {
        odometer7.innerHTML = 88;
    }
}, false);