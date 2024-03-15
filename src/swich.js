document.querySelector('#header').innerHTML = "estoy leyendo el documento swich";
var fruta;
var mensaje;
var userInput = prompt("Ingrese el numero de la  ftuta")


function servir_vaso_de_agua() {
    mensaje = "sirveme un vaso de agua"
    document.querySelector('#header').innerHTML = mensaje
    document.querySelector('#header').style.color = "blue"
}




function jugo_de_naranja() {
    mensaje = "batir naranjas y mandarianas"
    document.querySelector('#header').innerHTML = mensaje
    document.querySelector('#header').style.color = "red"

}

function jugo_de_fresas() {
    mensaje = "batir fresa"
    document.querySelector('#header').innerHTML = mensaje
    document.querySelector('#header').style.color = "red"
}

fruta = parseInt(userInput)// con parseInt se convierte a entero
switch (fruta) {
    case 1:
        jugo_de_fresas()
    break
    case 2:
    case 3:
        jugo_de_naranja()
    break
    default:
        servir_vaso_de_agua()
    break
}

