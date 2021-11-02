"use strict";

// Hamburger menu start


const ham = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const menuClose = document.querySelector('.menu__close');
const menuActive = document.querySelector('.menu__active');

ham.onclick = function() {
  // menu.classList.remove('menu');
  ham.classList.add('hamburger__active');
  menu.classList.add('menu__active');
};

menuClose.onclick = function() {
  ham.classList.remove('hamburger__active');
  menu.classList.remove('menu__active');
};

// Hamburger menu end

// Tab start

const ttoggle = document.querySelector('.target__toggle'),
		topen = document.querySelector('.target__open');

ttoggle.onclick = function() {
	topen.classList.toggle('target__open--active');
};

// Tab end

// Form script start

document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('form');
	form.addEventListener('submit', formSend);

	async function formSend(e) {
		e.preventDefault();

		let error = formValidate(form);
	}


	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('._req');

		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);

			if (input.classList.container('_email')) {

			}

		}
		function formAddError(input) {
			input.parentElement.classList.add('_error');
			input.classList.add('_error');
		}
		function formRemoveError(input) {
			input.parentElement.classList.remove('_error');
			input.classList.remove('_error');
		}
	}
});

// Form script end

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
});

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
});

// Methodics end