(function($) {
  'use strict';

  var changeEyeOpen = function(isButtonHovered, el) {
    var openEye = el.getElementsByClassName('open-eye')[0];
    var closeEye = el.getElementsByClassName('close-eye')[0];

    if (openEye && closeEye) {
      openEye.style.display = isButtonHovered ? 'inline' : 'none';
      closeEye.style.display = isButtonHovered ? 'none' : 'inline';
    }
  };

  var buttons = document.getElementsByClassName('button');

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('mouseover', function(el) {
      changeEyeOpen(true, el.target);
    });

    buttons[i].addEventListener('mouseout', function(el) {
      changeEyeOpen(false, el.target);
    });
  }

  $('.plus-btn').click(function(){
    $('body').toggleClass('menu-open');
  })

  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });


  $(document).ready(function () {

    var swiper1 = new Swiper ('.swiper-testimonials', {
      direction: 'horizontal',
      loop: true,

      pagination: {
        el: '.swiper-pagination-testimonials',
        type: 'bullets',
        clickable: true
      },

      navigation: {
        nextEl: '.swiper-button-next-testimonials',
        prevEl: '.swiper-button-prev-testimonials'
      },

      mousewheel: {
        forceToAxis: true,
      }
    });

    var swiper2 = new Swiper ('.swiper-work', {
      direction: 'horizontal',
      loop: true,

      pagination: {
        el: '.swiper-pagination-work',
        type: 'bullets',
        clickable: true
      },

      mousewheel: {
        forceToAxis: true,
      }
    })

  });

})(jQuery);
