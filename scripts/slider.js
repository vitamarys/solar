$(document).ready(function(){
    $('.news__content__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        variableWidth:true,
        appendArrows:$('.arrows')
    });
  

})