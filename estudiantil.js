// biblioteca
const accordiono = document.querySelectorAll('.estudiantil_box_single')
const titles = document.querySelectorAll('.estudiantil_box_single--title')
// const biblio = document.getElementById('biblio')

titles.forEach((cadaTitle, i) => {
    titles[i].addEventListener('click', () => {
        // accordiono.forEach((cadaAcordion, i) => {       
        //     accordiono[i].classList.remove('active')
        // })
            accordiono[i].classList.toggle('active')
    })
})