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
         
     
