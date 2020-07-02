
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
let topHeader = dom(".header__top");
window.onscroll = function () {
    if (window.pageYOffset > 60) {
        topHeader.classList.add("fixedTop")
    }
    else {
        topHeader.classList.remove("fixedTop")
    }
    let stick0 = dom('.adv__card:nth-child(1)');
    let stick1 = dom('.adv__card:nth-child(2)');
    let stick2 = dom('.adv__card:nth-child(3)');
    let stick3 = dom('.adv__card:nth-child(4)');
    let stick4 = dom('.adv__card:nth-child(5)');
    let stick5 = dom('.content__right');
    if (window.pageYOffset + 400 > stick0.offsetTop) {
        odometer0.innerHTML = 8888;
    }
    if (window.pageYOffset + 400 > stick1.offsetTop) {
        odometer1.innerHTML = 88;
    }
    if (window.pageYOffset + 400 > stick2.offsetTop) {
        odometer2.innerHTML = 88;
    }
    if (window.pageYOffset + 400 > stick3.offsetTop) {
        odometer3.innerHTML = 88;
    }
    if (window.pageYOffset + 400 > stick4.offsetTop) {
        odometer4.innerHTML = 88;
    }
    if (window.pageYOffset + 400 > stick5.offsetTop) {
        odometer5.innerHTML = 88;
    }
}
$('#backToTop').click(function () {
    $('html,body').animate({
        scrollTop: 0
    }, 1000, 'swing');
    return false;
});
