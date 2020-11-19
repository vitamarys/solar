
$(".tab-trigger").click(function(){
   
    var id = $(this).attr("data-tab"),
    content = $('.tab-content[data-tab="'+ id +'"]');
    $('.tab-trigger.active').removeClass('active'); 
    $(this).addClass('active'); 
    
    $('.tab-content.active').removeClass('active'); 
    content.addClass('active');
    console.log($('.underline'))
//    if($(first).hasClass('active')){
//     $('.underline').css("left","500px")
//    }
    
})

