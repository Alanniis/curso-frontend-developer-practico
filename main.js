const email =document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuIcon = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');

const menuCarrito = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

email.addEventListener('click',toggleDesktopMenu);
menuIcon.addEventListener('click',toggleMobileMenu);
menuCarrito.addEventListener('click',toggleCarrito);

function toggleDesktopMenu(){
    
    if(!aside.classList.contains('inactive')){
        aside.classList.add('inactive');
    }
  

    // if(desktopMenu.classList.contains('inactive'))
    // {
    //     desktopMenu.classList.remove('inactive');

    // }else{
    //     desktopMenu.classList.add('inactive');
    // }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    if(!aside.classList.contains('inactive')){
        aside.classList.add('inactive');
  }
  
    menuMobile.classList.toggle('inactive')
}

function toggleCarrito(){
    
    if(!menuMobile.classList.contains('inactive')){

        menuMobile.classList.add('inactive')
        
    }
    aside.classList.toggle('inactive')
}