document.querySelector('#header').innerHTML = "estamos  leyendo el documento cesta.js";

var cesta = ["fresa", "pera", "cereza,naranja,uva"]
var contador

function elemtos_de_la_cesta() {
    alert(cesta)
}
function agregar_una_fruta() {
    var nuevafruta = prompt("agregar una nueva fruta")
    alert(cesta.push(nuevafruta))
}

function quitar_una_fruta() {
    cesta.pop()
    alert("se elimino la fruta")
}
var inicio = true
do {
    var opcion = prompt(" 1. ver elemtos de la cesta\n2. agregar una fruta a la cesta\n3. quitar una fruta de la cesta \n4 salir ")
    switch (parseInt(opcion)) {
        case 1:
            elemtos_de_la_cesta()
            break
        case 2:
            agregar_una_fruta()
            break
        case 3:
            quitar_una_fruta()
            break

        case 4:
            inicio = prompt("desea terminar el ciclo")
            if (inicio == "si") {
                inicio = false

            }


    }


} while (inicio == true)
