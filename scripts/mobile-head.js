document.addEventListener('DOMContentLoaded',()=>{
const burgerBtn = document.querySelector('.burger-btn'),
      line1 = document.querySelector('.line-1'),  
      line2 = document.querySelector('.line-2'),
      line3 = document.querySelector('.line-3'),
      linkParent = document.querySelector('.mobile-menu__nav'),
      links = document.querySelectorAll('.mobile-menu__nav__item'),
      subMenus = document.querySelectorAll('.mobile-menu__nav__sub-menu'),
      menuBody = document.querySelector('.mobile-menu'),
      body = document.querySelector('body');
   
function hideSubMenu(){
    subMenus.forEach(item =>{
        item.classList.remove('active');
       
    });
    links.forEach(item =>{
        item.classList.remove('active');
       
    })
};

function openSudMenu(i){
   subMenus[i].classList.add('active');
   links[i].classList.add('active');
};

linkParent.addEventListener('click', (event)=>{
    const target = event.target;
    if(target && target.classList.contains('mobile-menu__nav__item')){
        links.forEach((item,i)=>{
            if(target == item){
                hideSubMenu();
                openSudMenu(i);
               
                
            }
            
            
        })
       
    }
})



function transformBtn(){
    line1.classList.toggle('active');
    line2.classList.toggle('active');
    line3.classList.toggle('active');
    burgerBtn.classList.toggle('active');
    
};  

burgerBtn.addEventListener('click',() =>{
    transformBtn();
    menuBody.classList.toggle('active');
    links.forEach(item=>{
        item.classList.remove('active');
    });
    subMenus.forEach(item=>{
        item.classList.remove('active');
    });
    body.classList.toggle('no-scroll');

});

});