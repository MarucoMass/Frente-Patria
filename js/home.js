// home
const homeBox = document.getElementById('home_box')
let homeBoxes = document.querySelectorAll('.home_boxes')
let homeLast = homeBoxes[homeBoxes.length -1]
const btnLeftHome = document.getElementById('leftBtn')
const btnRightHome = document.getElementById('rightBtn')

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