"use strict";

// Hamburger menu start


const ham = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const menuClose = document.querySelector('.menu__close');
const menuActive = document.querySelector('.menu__active');

ham.onclick = function () {
  // menu.classList.remove('menu');
  ham.classList.add('hamburger__active');
  menu.classList.add('menu__active');
};

menuClose.onclick = function () {
  ham.classList.remove('hamburger__active');
  menu.classList.remove('menu__active');
};

// Hamburger menu end

// Tab start

const ttoggle = document.querySelector('.target__toggle'),
  topen = document.querySelector('.target__open');

ttoggle.onclick = function () {
  topen.classList.toggle('target__open--active');
}

// Tab end

// Youtube carousel start

$('.youtube-carousel').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
})

// Youtube carousel end

//  Methodics start

$('.methodics').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  slidesPerRow: 1,
  adaptiveHeight: true,
  rows: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
})

// Methodics end