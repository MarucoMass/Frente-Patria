// header
const hamburguer = document.querySelector('.header .nav-bar .nav-burguer');
const burguer = document.querySelector('.header .nav-bar .nav-burguer .bar');
const mobile = document.querySelector('.header .nav-bar .nav-list ul');
const divMobile = document.querySelector('.header .nav-bar .nav-list');
const menu = document.querySelector('li .sub-container a');
const subMenu = document.getElementsByClassName('submenu');
// home
const homeBox = document.getElementById('home_box')
let homeBoxes = document.querySelectorAll('.home_boxes')
let homeLast = homeBoxes[homeBoxes.length -1]
const btnLeftHome = document.getElementById('leftBtn')
const btnRightHome = document.getElementById('rightBtn')

// header
hamburguer.addEventListener('click', ()=>{
    hamburguer.classList.toggle('active');
    burguer.classList.toggle('active');
    mobile.classList.toggle('active');
    divMobile.classList.toggle('active');
    // main.classList.toggle("active");
    // header.classList.toggle("active");
})
// fin slider

// home
eventListenersHome();
function eventListenersHome(){
    btnRightHome.addEventListener('click', next)
    btnLeftHome.addEventListener('click', prev)
}
homeBox.insertAdjacentElement('afterbegin', homeLast)

function next() {
    let homeFirst = document.querySelectorAll('.home_boxes')[0]
    homeBox.style.marginLeft = '-200vw'
    homeBox.style.transition = 'all 1s'
    setTimeout(() => {
    homeBox.style.transition = 'none'
    homeBox.insertAdjacentElement('beforeend', homeFirst)    
    homeBox.style.marginLeft = '-100vw'
    }, 500)
}
function prev() {
    let homeBoxes = document.querySelectorAll('.home_boxes')
    let homeLast = homeBoxes[homeBoxes.length -1]
    homeBox.style.marginLeft = '0'
    homeBox.style.transition = 'all 1s'
    setTimeout(() => {
    homeBox.style.transition = 'none'
    homeBox.insertAdjacentElement('afterbegin', homeLast)    
    homeBox.style.marginLeft = '-100vw'
    }, 500)
}

setInterval(() => {
    next();
}, 7000);
// fin home


