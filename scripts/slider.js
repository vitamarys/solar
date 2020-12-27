$(document).ready(function(){
    $('.news__content__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        variableWidth:true,
         appendArrows:$('.arrows'),
         responsive: [
          {
            breakpoint: 768,
            settings: {
              variableWidth: true,
              slidesToShow: 1,
              centerMode: true,
              centerPadding: '40px'
            }
          },
        ]
    });
  $('.slider-sun-power-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
   
    arrows:true,
    asNavFor: '.slider-sun-power-nav'
  });
$('.slider-sun-power-nav').slick({
    slidesToShow: 3,
    asNavFor: '.slider-sun-power-for',
    focusOnSelect: true,
    slidesToScroll: 1,
    easing:'ease-in',
    autoplay: false,
})
$('.slider-private-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  
  arrows:true,
  asNavFor: '.slider-private-nav'
});
$('.slider-private-nav').slick({
  slidesToShow: 3,
  asNavFor: '.slider-private-for',
  focusOnSelect: true,
  slidesToScroll: 1,
  easing:'ease-in',
  autoplay: false,
})
})