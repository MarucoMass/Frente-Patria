const hamburguer = document.querySelector('.header .nav-bar .nav-burguer');
const burguer = document.querySelector('.header .nav-bar .nav-burguer .bar');
const mobile = document.querySelector('.header .nav-bar .nav-list ul');
const divMobile = document.querySelector('.header .nav-bar .nav-list');
const menu = document.querySelector('li .sub-container a');
const subMenu = document.getElementsByClassName('submenu');
const main = document.querySelector('main');
const header = document.getElementById('header');

hamburguer.addEventListener("click", ()=>{
    hamburguer.classList.toggle("active");
    burguer.classList.toggle("active");
    mobile.classList.toggle("active");
    divMobile.classList.toggle("active");
    // main.classList.toggle("active");
    // header.classList.toggle("active");
})

// menu.addEventListener("click", () => {
//     subMenu.classList.toggle("active");
// })