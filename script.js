// header
const hamburguer = document.querySelector('.header .nav-bar .nav-burguer');
const burguer = document.querySelector('.header .nav-bar .nav-burguer .bar');
const mobile = document.querySelector('.header .nav-bar .nav-list ul');
const divMobile = document.querySelector('.header .nav-bar .nav-list');
// const item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const item = document.querySelectorAll('.item');
const menu = document.querySelector('li .sub-container a');
const subMenu = document.getElementsByClassName('submenu');

// header
hamburguer.addEventListener('click', ()=>{
    hamburguer.classList.toggle('active');
    burguer.classList.toggle('active');
    mobile.classList.toggle('active');
    // divMobile.classList.toggle('active');
    // main.classList.toggle("active");
    // header.classList.toggle("active");
})

item.forEach(selectItem => selectItem.addEventListener('click', ()=>{
    if ((mobile.classList = 'active') || (hamburguer.classList = 'active') || (burguer.classList = 'active')) {
        hamburguer.classList.toggle('active');
        mobile.classList.toggle('active');     
        burguer.classList.toggle('active');
    }
}))


