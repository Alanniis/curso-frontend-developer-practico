const email =document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');


email.addEventListener('click',toggleDesktopMenu);

function toggleDesktopMenu(){

    console.log(desktopMenu.getAttribute('class'))

    if(desktopMenu.classList.contains('inactive'))
    {
        desktopMenu.classList.remove('inactive');

    }else{
        desktopMenu.classList.add('inactive');
    }
}