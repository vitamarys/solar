const link = $('.header__nav__link');
const dropdown = $('.dropdown');
const first = $('.first');
const second = $('.second');
const third = $('.third');
const fourth = $('.fourth');
const fifth = $('.fifth');
const sixth = $('.sixth');
const dropFirst = $('.dropdown__first');
const dropSecond = $('.dropdown__second');
const dropThird = $('.dropdown__third');
const dropFourth = $('.dropdown__fourth');
const dropFifth = $('.dropdown__fifth');
const dropSixth = $('.dropdown__sixth');
const noDrop = $('.no-drop');
link.hover(function(){
    
    dropdown.toggleClass("active");
    

})
noDrop.hover(function(){
    dropdown.removeClass("active");
})

first.hover(function(){
    dropFirst.addClass("active");
    dropSecond.removeClass("active");
    dropThird.removeClass("active");
    dropFourth.removeClass("active");
    dropFifth.removeClass("active");
    dropSixth.removeClass("active");
})
second.hover(function(){
    dropSecond.addClass("active")
    dropFirst.removeClass("active")
    dropThird.removeClass("active");
    dropFourth.removeClass("active");
    dropFifth.removeClass("active");
    dropSixth.removeClass("active");
})
third.hover(function(){
    dropThird.addClass("active");
    dropFirst.removeClass("active");
    dropSecond.removeClass("active");
    dropFourth.removeClass("active");
    dropFifth.removeClass("active");
    dropSixth.removeClass("active");
})
fourth.hover(function(){
    dropFourth.addClass("active");
    dropThird.removeClass("active");
    dropFirst.removeClass("active");
    dropSecond.removeClass("active");
    dropFifth.removeClass("active");
    dropSixth.removeClass("active");
})

fifth.hover(function(){
    dropFourth.removeClass("active");
    dropThird.removeClass("active");
    dropFirst.removeClass("active");
    dropSecond.removeClass("active");
    dropFifth.addClass("active");
    dropSixth.removeClass("active");
})
sixth.hover(function(){
    dropFourth.removeClass("active");
    dropThird.removeClass("active");
    dropFirst.removeClass("active");
    dropSecond.removeClass("active");
    dropFifth.removeClass("active");
    dropSixth.addClass("active");
})