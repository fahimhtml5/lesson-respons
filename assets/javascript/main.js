jQuery(document).ready(function() {
    $(".mobile-menu-btn-1").on("click", function() {
        $(".mobile-menu").slideToggle("slow");
    });
});


// Swiper-1
var swiper = new Swiper(".mySwiper1", {
      slidesPerView: 1.2,
      spaceBetween: 30,
      loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
        },

        breakpoints: {
            992: {
                slidesPerView: 3,
            },

            576: {
                slidesPerView: 2,
            }
        }
    });


// swiper-2 
var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    loop: true,
      autoplay: {
          delay: 2500,
          disableOnInteraction: false,
      },
      pagination: {
          el: ".swiper-dots1",
          clickable: true,
      },
  });


// Swiper-3
var swiper = new Swiper(".mySwiper3", {
    slidesPerView: 1.2,
    spaceBetween: 30,
    loop: true,
      autoplay: {
          delay: 2500,
          disableOnInteraction: false,
      },
      pagination: {
          el: ".swiper-dots2",
          clickable: true,
      },

      breakpoints: {
            992: {
                slidesPerView: 3,
            },
    
            576: {
                slidesPerView: 2,
            }
      }
  });

