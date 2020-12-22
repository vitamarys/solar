$(document).ready(function(){
    $('.news__content__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        variableWidth:true,
         appendArrows:$('.arrows')
    });
  $('.slider-sun-power-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    // infinite: false,
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
})