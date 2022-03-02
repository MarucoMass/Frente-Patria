// biblioteca
const accordion = document.querySelectorAll('.biblioteca_box_single')
const title= document.querySelectorAll('.biblioteca_box_single--title')
// const biblio = document.getElementById('biblio')

title.forEach((cadaTitle, i) => {
    title[i].addEventListener('click', () => {
        // accordion.forEach((cadaAcordion, i) => {       
        //     // accordion[i].classList.remove('active')
        // })
            accordion[i].classList.toggle('active')
    })
})

    // for (let i = 0; i < accordion.length; i++) {
    //     accordion[i].addEventListener('click', ()=>{
    //         this.classList.toggle('active')
    //     })
    // }
    // biblio.addEventListener('click', (e) =>{
    //     if(e.target.className == 'biblioteca_box_single--title::before') {
    //         e.target.classList.toggle('active')
    //     }
    //     console.log(e.target)
    // })

 