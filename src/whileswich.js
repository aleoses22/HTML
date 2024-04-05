mensaje = "estoy leyendo el documento whileswich,js"
var mensaje;
mensaje = "error"
var elemento = document.querySelector('#header');
elemento.innerHTML = mensaje


var inicio = true
function suma() {


    var numero1 = prompt("dijite un numero")
    var numero2 = prompt("dijite otro numero")
    alert(parseInt(numero1) + parseInt(numero2))
}
function resta() {
    var numero1 = prompt("dijite un numero")
    var numero2 = prompt("dijite otro numero")
    alert(parseInt(numero1) - parseInt(numero2))
}
function multiplicacion() {
    var numero1 = prompt("dijite un numero")
    var numero2 = prompt("dijite otro numero")
    alert(parseInt(numero1) * parseInt(numero2))
}
function divicion() {
    var numero1 = prompt("dijite un numero")
    var numero2 = prompt("dijite otro numero")
    alert(parseInt(numero1) / parseInt(numero2))
}
while (inicio == true) {
    var respuesta = prompt("n1. suma\n2. resta\n3. multiplicacion \n4. divicion\n5. cerrar ")
    switch (parseInt(respuesta)) {
        case 1:
            suma()
            break
        case 2:
            resta()
            break
        case 3:
            multiplicacion()
            break
        case 4:
            divicion()
            break
        default: 
        alert(def) = ("mensaje no valido")
    }
}


