
$(".tab-trigger").click(function(){
   
    var id = $(this).attr("data-tab"),
    content = $('.tab-content[data-tab="'+ id +'"]');
    $('.tab-trigger.active').removeClass('active'); 
    $(this).addClass('active'); 
    
    $('.tab-content.active').removeClass('active'); 
    content.addClass('active');
   

    
})
$(".triger-tab").click(function(){
   
    var id = $(this).attr("data-tab"),
    content = $('.energie-tab-content[data-tab="'+ id +'"]');
    $('.triger-tab.active').removeClass('active'); 
    $(this).addClass('active'); 
    
    $('.energie-tab-content.active').removeClass('active'); 
    content.addClass('active');
   

    
})

