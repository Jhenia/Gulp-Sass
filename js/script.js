 //Header burger     
      let header__burger = document.querySelector('.burger');
        let header_menu = document.querySelector('.header__menu');
        let back = document.querySelector('body');


        header__burger.onclick = function(){
            header__burger.classList.toggle('active');
            header_menu.classList.toggle('active');
            back.classList.toggle('locked');
        }
//Header burger   

 // Submenu

    let submenu = document.querySelector('.submenu');
    let trigger = document.querySelector('.with__submenu');
    let trigger__link = document.querySelector('.trigger__link');
    let arrow = document.querySelector('.submenu__arrow');
     trigger.onclick = function(){
        submenu.classList.toggle('active');
        arrow.classList.toggle('active');
        trigger__link.classList.toggle('active');
     }
     var swiper = new Swiper(".swiper__team", {   
        slidesPerView: 3,
        spaceBetween: 60,
        loop: true, 
      navigation: {
        nextEl: ".next__btn",
        prevEl: ".prev__btn",
      },
      breakpoints:{
         320:{
            slidesPerView: 1,
            spaceBetween: 30,
         },
         480:{
            slidesPerView: 1,
            spaceBetween: 30,
         },
         768:{
            slidesPerView: 2,
            spaceBetween: 30,
         },
         992:{
            slidesPerView: 3,
            
         }
      }
  
  
    });
    
         
     
