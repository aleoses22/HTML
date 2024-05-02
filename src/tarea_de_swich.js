document.querySelector('#header').innerHTML = "estoy leyendo el documento swich";
var mensaje;
var userInput = prompt("Ingrese el numero del dia")



function lunes() {


    document.querySelector('#header').innerHTML = mensaje
    document.querySelector('#header').style.color = "red"

}
function martes() {

    document.querySelector('#header').innerHTML = mensaje
    document.querySelector('#header').style.color = "red"

}
function miercoles() {

    document.querySelector('#header').innerHTML = mensaje
    document.querySelector('#header').style.color = "red"

}
function jueves() {

    document.querySelector('#header').innerHTML = mensaje
    document.querySelector('#header').style.color = "red"
}
function viernes() {

    document.querySelector('#header').innerHTML = mensaje
    document.querySelector('#header').style.color = "red"
}
function sabado() {

    document.querySelector('#header').innerHTML = mensaje
    document.querySelector('#header').style.color = "red"
}
function domingo() {

    document.querySelector('#header').innerHTML = mensaje
    document.querySelector('#header').style.color = "red"
}
function dia_no_existe() {

    document.querySelector('#header').innerHTML = mensaje
    document.querySelector('#header').style.color = "red"
}
dia = parseInt(userInput)// con parseInt se convierte a entero
switch (dia) {
    case 1:
        mensaje = "lunes"
        lunes()
        break
    case 2:
        mensaje = "martes"
        martes()
        break
    case 3:
        mensaje = "miercoles"
        miercoles()
        break
    case 4:
        mensaje = "jueves"
        jueves()
        break
    case 5:
        mensaje = "viernes"
        viernes()
        break
    case 6:
        mensaje = "sabado"
        sabado()
        break
    case 7:
        mensaje = "domingo"
        domingo()
        break
    case 8:
        mensaje = "dia_no_existe"
        dia_no_existe()
        break
        case 0:
            mensaje = "dia_no_existe ingrese un numero entre el 1-7"
            viernes()
            break




}