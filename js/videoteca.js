const videos = [
    {id: 1, nombre: 'Derecho Constitucional', url: 'https://www.youtube.com/playlist?list=PLyvm-1CvBQUvQ6P7HgwUYco9-LVezAh1J'},
    {id: 1, nombre: 'Derecho Privado', url: 'https://www.youtube.com/playlist?list=PLyvm-1CvBQUt9UbSNoL9gvsxuNGZxWS3w'},
    {id: 1, nombre: 'HCA', url: 'https://www.youtube.com/playlist?list=PLyvm-1CvBQUtUiCUDi2hbLAgmDxS6VU_f'},
    {id: 1, nombre: 'Introd. a la Filosofía', url: 'https://www.youtube.com/playlist?list=PLyvm-1CvBQUvQkz-dqjbK8aBSoQDP0n2i'},
    {id: 1, nombre: 'Introd. al Derecho', url: 'https://www.youtube.com/playlist?list=PLyvm-1CvBQUsgoXDxDyGCrTk5LQbroZa9'},
    {id: 2, nombre: 'Derechos Humanos', url: 'https://www.youtube.com/playlist?list=PLXwWt6JrESbAZXfmsHPUpqfnGEvLpEIsr'},
    {id: 2, nombre: 'Derechos Reales', url: 'https://www.youtube.com/playlist?list=PLyvm-1CvBQUt0O2mJ_9wa14QxFjGXcL5s'},
    {id: 2, nombre: 'Economía Política', url: 'https://www.youtube.com/playlist?list=PLyvm-1CvBQUv3aTvh93INYCAbdjneBVyX'},
    {id: 2, nombre: 'Finanzas', url: 'https://www.youtube.com/playlist?list=PLyvm-1CvBQUuu2UkROPS4ug7tPILel55u'},
    {id: 2, nombre: 'HDD', url: 'https://www.youtube.com/playlist?list=PLyvm-1CvBQUvWzE9INtC8Uj5VX2P0o07o'},
    {id: 3, nombre: 'Contratos', url: 'https://www.youtube.com/playlist?list=PLyvm-1CvBQUt4WxPasWVjDi2BHEcdO23y'},
    {id: 3, nombre: 'Agrario', url: 'https://www.youtube.com/playlist?list=PLyvm-1CvBQUvu5iYhXCViozDT_d-aOK8_'},
    {id: 3, nombre: 'D. de la empresa y del mercado', url: 'https://www.youtube.com/playlist?list=PLyvm-1CvBQUtEUYJ51ViTMYYU8NiISv6u'},
    {id: 3, nombre: 'Penal 1', url: 'https://www.youtube.com/playlist?list=PLyvm-1CvBQUv1aPbwBpHaomsi1aDpZyFN'},
    {id: 3, nombre: 'Tributario', url: 'https://www.youtube.com/playlist?list=PLyvm-1CvBQUtL8aAdxmzB-4kAWXRTKQNx'},
    {id: 3, nombre: 'Práctica profesional 1', url: 'https://www.youtube.com/playlist?list=PLyvm-1CvBQUsTqfd7aWOfCOYbi066bIgY'},
    {id: 4, nombre: 'Sociedades', url: 'https://www.youtube.com/playlist?list=PLyvm-1CvBQUvWevQ_q0UuzBslh3G6Zwc2'},
    {id: 4, nombre: 'Consumidor', url: 'https://www.youtube.com/playlist?list=PLyvm-1CvBQUs8Rx9OvMFNX3jP5MVn09AA'},
    {id: 4, nombre: 'Laboral', url: 'https://www.youtube.com/playlist?list=PLyvm-1CvBQUtflTNUFsKt-wBfeFGUn2ia'},
    {id: 4, nombre: 'Penal 2', url: 'https://www.youtube.com/playlist?list=PLyvm-1CvBQUsIRSlun_wTeRwZ2DhdvIh2'},
    {id: 4, nombre: 'Procesal Civil', url: 'https://www.youtube.com/playlist?list=PLyvm-1CvBQUvy0iqpBxY0bz8i66Mg3SXQ'},
    {id: 4, nombre: 'Sociologia', url: 'https://www.youtube.com/playlist?list=PLyvm-1CvBQUt3tsJTwME0_LPuu7imEhTQ'},
    {id: 5, nombre: 'Administrativo', url: 'https://www.youtube.com/playlist?list=PLyvm-1CvBQUsHviQ0MF4vNa5eU-TpUL7o'},
    {id: 5, nombre: 'Internacional Público', url: 'https://www.youtube.com/playlist?list=PLyvm-1CvBQUv8tRmEeJYkH2EkRLDPH900'},
    {id: 5, nombre: 'Procesal Penal', url: 'https://www.youtube.com/playlist?list=PLyvm-1CvBQUtU06mpwumJ53xSjTAvOlfB'},
    {id: 5, nombre: 'Sucesiones', url: 'https://www.youtube.com/playlist?list=PLyvm-1CvBQUv08KhaaoYMckdVMPJ7X2jB'},
    {id: 5, nombre: 'Títulos', url: 'https://www.youtube.com/playlist?list=PLyvm-1CvBQUtxE69E8wtk213EpNsFAHVC'},
    {id: 5, nombre: 'Políticas Democráticas', url: 'https://www.youtube.com/playlist?list=PLyvm-1CvBQUsbJfv59ioIP6uwtoFGCjc5'},
    {id: 6, nombre: 'Internacional Privado', url: 'https://www.youtube.com/playlist?list=PLyvm-1CvBQUsZicL_IkLXaGlGJO5G49PH'},
    {id: 6, nombre: 'Filosofía del derecho', url: 'https://www.youtube.com/playlist?list=PLyvm-1CvBQUuyNzLGDk-V5W_ayO1a1I03'},
    {id: 6, nombre: 'Insolvencia', url: 'https://www.youtube.com/playlist?list=PLyvm-1CvBQUvIQzZpR5mohAIYH06CMjNL'},
    {id: 6, nombre: 'Taller de acceso a la información jurídica', url: 'https://www.youtube.com/playlist?list=PLyvm-1CvBQUsA4QAFSxV8BJBFh6LdntmF'},
    {id: 6, nombre: 'Integración', url: 'https://www.youtube.com/playlist?list=PLyvm-1CvBQUuEofDDeyhkv1f4LTkzJrPK'},

]

const btnVideoteca = document.querySelectorAll('.videoteca_contenedorBtn--box img')
const boxVideos = document.querySelector('.videos')
const closeVideo = document.querySelector('.videos_closed')
const videosUl = document.querySelector('.videosUl')

const cargarVideos = () => { 
    btnVideoteca.forEach(btn => 
    btn.addEventListener('click', (e) => {
        
    let numero = e.target.parentElement.getAttribute("data-id")
    let videosElegidos = videos.filter(el => el.id == numero)
    videosUl.innerHTML = ''
    if (numero == 1 || numero == 2 || numero == 3) {  
        boxVideos.style.top = '60%'
        boxVideos.classList.toggle('active')
    }
    if (numero == 4 || numero == 5 || numero == 6) {  
        boxVideos.style.top = '30%'
        boxVideos.classList.toggle('active')
    }
    videosElegidos.forEach((element) => {
        let {url, nombre, id} = element
        videosUl.innerHTML += `
        <li><a href=${url}>${nombre}</a></li>
        <hr>
        `
    })
    }))
}
closeVideo.addEventListener('click', () => {
    boxVideos.classList.remove('active')
})

cargarVideos()