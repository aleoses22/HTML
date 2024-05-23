var arreglo = []

document.querySelector('#header').innerHTML = "estoy leyendo el documento proyecto12 ale.js";

var largo = parseInt(prompt("dijite la cantidad de elementos del arreglo"))

function costruir(parametrolargo) {
    //aqui se define la cantidad del largo del arreglo
    for (let i = 1; i < costruir.length; i++) {
        arreglo.length = parametrolargo

    }
}

//llamar funcion costruir
costruir(largo)

function llenarArreglo() {
    for (let index = 0; index < arreglo.length; index++) {
        let NumeroAleatorio = Math.floor(Math.random() * 20) + 1
    }
}
// llenarArreglo
function llenarArreglo() {
    for (let i = 1; i < llenarArreglo.length; i++) {
        let llenarArreglo = Math.floor(Math.random() * 20) + 1
        arreglo[i] = NumeroAleatorio
    }
}
// aqui se llena el arreglo con numeros del 1 al 20
function  ArregloPromedio(arreglo) {
    for (let index = 0; index < ArregloPromedio.length; index++) {
        let resultado = (index * ArregloPromedio) / 20;
    }
}
// sacar el porsentaje
function SumaValor(ArregloPromedio) {
    for (let i = 0; i < SumaValor.length; index  ++) {
        let resultado = (i * SumaValor) + 20;
    }
}
// suma el porcentaje
function SumadeImpares(ArregloPromedio) {
    for (let index = 0; SumadeImpares < arreglo.length; index++){
        let impares = Math.floor(Math.impares() * 20) + 1
        let resultado = (index * SumadeImpares) + 20
    }
}
// suma del porcentaje impar
function MayorArreglo(arreglo) {
    for (let i = 0; i < MayorArreglo.length; i++) {
        let arreglo = [10, 11, 3, 20, 5];
        let MayorQueDiez = arreglo.filter(element > element > 10)
    }
}
function MayorQueDiez(arreglo) {
    for (let i = 0; i < MayorDiferencia.length; i++) {
        let arreglo = [10, 11, 3, 20, 5];
        let MayorQueDiez = arreglo.filter(element > element > 10);
    }
}
function EncontrarElemento(largoPromedio) {
    for (let i = 0; i < EncontrarElemento.length; i++) {
        if (largo[i] === EncontrarElemento) {
            //devuelve el indice del elemento encontrado
        }
    }
}
function posicionElemento(largoEncontrarElememto) {
    for (let i = 0; i < posicionElemento.length; i++) {
        if (largo[i] === posicionElemento) {
            return i + 1;
            // devuelve la posicion del elemnto encontrado
        }
    }
    return -1;
    // si el elemeto no se encuantra , devuelve uno 
}
function invertirArreglo(largo) {
    var longitud = insertarElemento
    var invertirArreglo = []
    for (var i = longitud - 1; i >= 0; i--) {
        invertirArreglo.push(largo)[i]
    }
}
function insertarElemento(largo, EncontrarElemento) {
    var longitud = insertarElemento.length
    for (var i = longitud - 1; i >= (posicionElemento); i--) {
        insertarElemento[i + 1] = largo[insertarElemento]
    }
    //insertar el nuevo elemnto en la posicion deseada
    largo[posicionElemento] = insertarElemento

    return insertarElemento
}
var inicio = true
do { var resultado = prompt("\n.1.llenarArreglo\n2llenarArreglo\n3.ArregloPromedio\n4 .SumarValor\n5.SumadeImpares\n6.MayorArreglo\n7.MayorDiferencia\n8.EncontrarElemento\n9.PosicionElemento\n10.InvartirArreglo\n11.IncertarElemeto")
switch(parseInt(resultado)){

case 1:
    llenarArreglo()
break
case 2:
   llenarArreglo()
break
case 3:
    ArregloPromedio()
break
case 4:
        SumaValor()
break
case 5:
    SumadeImpares()
break
case 6:
   MayorArreglo ()
break
case 7:
    MayorDiferencia()
break
case 8:
    EncontrarElemento()
break
case 9:
    posicionElemento()
break
case 10:
    invertirArreglo()
break
case 11:
    insertarElemento()
break
}
}while(inicio===inicio)
    console.log