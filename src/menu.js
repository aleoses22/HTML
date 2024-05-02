document.querySelector('#header').innerHTML = "estamos  leyendo el documento menu.js";

var menu = []
var tarea
var contador

function ver_elementos_del_menu() {
    alert(menu)
}
function agregar_una_tarea() {
var tarea = prompt("agregar una nueva tarea ")
    alert(menu.push(tarea))
}
function quitar_una_tarea() {
    menu.pop()
    alert("se elimino la tarea ")
}

function modificar_una_tarea() {
var mod = prompt("Nueva Tarea a reemplazar")
var numer = prompt("numro tarea a reemplazar")
menu[numer]=mod


}

function salir_del_menu() {
    menu.pop()
    alert("salir del menu ")
    
}

function eliminar_un_elemento_espesifico() {
    tarea .pop (
        alert ("se elimino correctamente")
    )
}
var inicio = true
do {
    var opcion = prompt(" 1. ver elemtos del menu\n2. agregar una tarea al menu\n3. quitar una terea del menu \n4. modificar una tarea\n5. eliminar un elemento espesifico  \n6 salir ")
    switch (parseInt(opcion)) {
        case 1:
            ver_elementos_del_menu()
            break
        case 2:
            agregar_una_tarea()
            break
        case 3:
            quitar_una_tarea()
            break
        case 4:
            modificar_una_tarea()
            break
            case 5:
                eliminar_un_elemento_espesifico()
                break
        case 6:
            inicio = prompt("desea terminar el ciclo")
            if (inicio == "si") {
                inicio = false

            }


    }


} while (inicio == true)
