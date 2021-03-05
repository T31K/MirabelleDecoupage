$(document).ready(function(){
    $('.slider-center').slick({
        dots: true,
        centerMode: true,
        centerPadding: '70px',
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-description',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 660,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              arrows: false,
              dots: true
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
              arrows: false
            }
          }
        ]
      });

        $('.slider-description').slick({
            arrows: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            adaptiveHeight: true,
            asNavFor: '.slider-center',
        });

        $('.main-slider').slick({
          arrows: true,
          infinite: true,
          speed: 300,
          dots: true
        })
});