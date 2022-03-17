class Materia{
    constructor(id, materia){
        this.id = id;
        this.materia = materia; 
    }
}
// materias
// 1
const constitucional = new Materia(1, 'Constitucional')
const privado = new Materia(2, 'Privado')
const hca = new Materia(3, 'Historia Constitucional Argentina')
const introAFilo = new Materia(4, 'Introducción a la Filosofía')
const introADerecho = new Materia(5, 'Introducción al Derecho')
// 2
const danios = new Materia(6, 'Derecho de Daños')
const obligaciones = new Materia(7, 'Obligaciones')
const ddhh = new Materia(8, 'Derechos Humanos')
const reales = new Materia(9, 'Derechos Reales')
const economía = new Materia(10, 'Economía Política')
const finanzas = new Materia(11, 'Finanzas')
const histDerecho = new Materia(12, 'Historia del Derecho')
// 3
const contratos = new Materia(13, 'Contratos')
const agrario = new Materia(14, 'Agrario')
const comercial = new Materia(15, 'Derecho de la Empresa y del Mercado')
const penalUno = new Materia(16, 'Penal I')
const politico = new Materia(17, 'Derecho Político')
const procesalUno = new Materia(18, 'Procesal I')
const tributario = new Materia(19, 'Tributario')
const practicaUno = new Materia(20, 'Práctica Profesional I')
// 4
const ambiental = new Materia(21, 'Ambiental')
const familia = new Materia(22, 'Familia')
const sociedades = new Materia(23, 'Sociedades')
const consumidor = new Materia(24, 'Derecho del Consumidor')
const laboral = new Materia(25, 'Laboral')
const penalDos = new Materia(26, 'Penal II')
const procesalDos = new Materia(27, 'Procesal Civil II')
const sociologia = new Materia(28, 'Sociología')
// 5
const admin = new Materia(29, 'Administrativo')
const intPublico = new Materia(30, 'Internacional Público')
const procesalPenal = new Materia(31, 'Procesal Penal')
const sucesiones = new Materia(32, 'Sucesiones')
const titulos = new Materia(33, 'Títulos')
const practicaDos = new Materia(34, 'Práctica Profesional II')
const politicaDemocratica = new Materia(35, 'Política Democrática')
// 6
const intPrivado = new Materia(36, 'Internacional Privado')
const filDerecho = new Materia(37, 'Filosofía del Derecho')
const insolvencia = new Materia(38, 'Insolvencia')
const idioma = new Materia(39, 'Idioma extranjero')
// 
const gente = [
    {id: 8, nombre: 'Débora Barulich', catedra: 'A', celular: 3364650420, ig: 'debibaru'},
    {id: 8, nombre: 'Martina Saslavsky', catedra: 'A', celular: 3413629236, ig: 'martusaslavsky'},
    {id: 8, nombre: 'Camila Barrera', catedra: 'A', celular: 3413084748, ig: 'camibarrera14'},
    {id: 7, nombre: 'Martina Saslavsky', catedra: 'Única', celular: 3413629236, ig: 'martusaslavsky'},
    {id: 7, nombre: 'Pedro Albelo', catedra: 'Única', celular: 3413342283, ig: 'pitysidernova'},
    {id: 1, nombre: 'Nicolas Garcia', catedra: 'A', celular: 3415499855, ig: 'nicolasggarcia'},
    {id: 1, nombre: 'Juan Cejas Agotegaray', catedra: 'A', celular: 3407468704, ig: 'juancejasag'},
    {id: 1, nombre: 'Tomas Riva', catedra: 'A', celular: 3471561956, ig: 'Tomas.riva'},
    {id: 1, nombre: 'Tobías Luna ', catedra: 'A', celular: 3364311155, ig: 'tobiass_luna'},
    {id: 1, nombre: 'Pedro Martinez', catedra: 'B', celular: 3412280335, ig: 'pedroomartinez'},
    {id: 34, nombre: 'Julia Bisio', catedra: 'A', celular: 3416240931, ig: 'julibisio'},
    {id: 3, nombre: 'Ana Martino', catedra: 'A', celular: 3415497812, ig: 'anumartino'},
    {id: 3, nombre: 'Florencia Di Rosa', catedra: 'B', celular: 3382575816, ig: 'Flordirosaa'},
    {id: 2, nombre: 'Lucio Rodríguez', catedra: 'A', celular: 3415002193, ig: 'luciorodriguezz_'},
    {id: 13, nombre: 'Emilia Tassisto', catedra: 'A', celular: 3413413308, ig: 'emiliatassisto'},
    {id: 24, nombre: 'Emilia Tassisto', catedra: 'A', celular: 3413413308, ig: 'emiliatassisto'},
    {id: 7, nombre: 'Camila Amorelli', catedra: 'Única', celular: 3416350546, ig: 'cami_amorelli'},
    {id: 16, nombre: 'Juan Blas Zampierin', catedra: 'Única', celular: 3476661036, ig: 'juanblas_zampierin'},
    {id: 16, nombre: 'Gian Luca Talotti ', catedra: 'Única', celular: 3415408620, ig: 'gian_talotti '},
    {id: 5, nombre: 'Franco Martínez', catedra: 'B', celular: 3400532847, ig: 'Ffranmartinez1'},
    {id: 5, nombre: 'Matias Castro', catedra: 'B', celular: 3401406592, ig: 'castro_matias95'},
    {id: 5, nombre: 'Solange Abril Pellegrini', catedra: 'B', celular: 3413535998, ig: 'sol.pellegrini'},
    {id: 5, nombre: 'Franco Martínez', catedra: 'B', celular: 3400532847, ig: 'Ffranmartinez1'},
    {id: 5, nombre: 'Luz Ledesma', catedra: 'C', celular: 3413921507, ig: 'luzledesma1'},
    {id: 21, nombre: 'Ana Medina', catedra: 'Única', celular: 3415067594, ig: 'anitaamedina_'},
    {id: 4, nombre: 'Piñero Lucas Matias', catedra: 'B', celular: 2477658007, ig: 'lucaspinero1994'},
    {id: 4, nombre: 'Emiliano Berra López', catedra: 'C', celular: 3415939554, ig: 'emilianoberralopez'},
    {id: 6, nombre: 'Lucía Kraus', catedra: 'Única', celular: 3415158568, ig: 'lukraus01'},
    {id: 35, nombre: 'Camila Schwarzstein', catedra: 'Única', celular: 3415932189, ig: 'camischw'},
]

let arrayMaterias = [constitucional, privado, hca, introAFilo, introADerecho, danios, obligaciones, ddhh, reales, economía, finanzas, histDerecho, contratos, agrario, comercial, penalUno, politico, procesalUno, tributario, practicaUno, ambiental, familia, sociedades, consumidor, laboral, penalDos, procesalDos, sociologia, admin, intPublico, procesalPenal, sucesiones, titulos, practicaDos, politicaDemocratica, intPrivado, filDerecho, insolvencia, idioma]
// console.log(arrayAyudantes)
let newArray
let selectMateria = document.getElementById('selectMateria')
let selectCatedra = document.getElementById('selectCatedra')
let selectContacto = document.getElementById('selectContacto')
let optionCatedra = document.getElementById('optionCatedra')
const nombres = document.querySelector('.nombres')
arrayMaterias.forEach((value) => {
    selectMateria.innerHTML += `
    <option value="${value.id}">${value.materia}</option>
    `
})
   const cargarCat = () => { 
       selectMateria.addEventListener('click', (e) => {
        
        newArray = gente.filter((el) => el.id == e.target.value)
        if( e.target.value == selectMateria.value){
            selectCatedra.innerHTML = `<option value="Catedra" id="optionCatedra">Cátedra:</option>`
                newArray.forEach((value) => {
                    selectCatedra.innerHTML += `
                    <option class="optionCatedra" value="${value.nombre}">Cátedra ${value.catedra} -> Ayudante: ${value.nombre}</option>
                    `
                })
                if (e.target.value == 'Materia') {
                    selectCatedra.innerHTML = ''
                    nombres.innerHTML = ''
                    nombres.classList.remove('active')
                }
                cargarNombres()
            }
        })
    }
     const cargarNombres = () => {
        selectCatedra.addEventListener('click', (e) => {
            let nombre = newArray.filter((el) => el.nombre == e.target.value)
            for (const item of nombre) {
                nombres.innerHTML = `
                <p class="datos">Nombre: <span id="nombre">${item.nombre}</span></p><br>
                <p class="datos" id="celular">Celular: ${item.celular}</p><Br>
                <p class="datos" id="ig">Ig: ${item.ig}</p><Br>
            `    
            }
            nombres.classList.add('active')

            if (e.target.value == 'Catedra' || selectCatedra.innerHTML == '') {
                nombres.innerHTML = ''
                nombres.classList.remove('active')
            }
        })
     }
    cargarCat()