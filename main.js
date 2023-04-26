const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const hamburMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', showDesktopMenu);
hamburMenu.addEventListener('click', showMobileMenu);

function showDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}

function showMobileMenu(){
    mobileMenu.classList.toggle('inactive');
}
