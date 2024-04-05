document.querySelector('#header').innerHTML = "estamos  leyendo el documento while.js";

var i = 0
var loquesea = false
var quehago
do{
var  quehago = prompt("desea terminar con el siclo(si/no) ")
if (quehag == "si"){
loquesea = true
while (inicio == true) {
    var respuesta = prompt("n1. suma\n2. resta\n3. multiplicacion \n4. divicion\n5. cerrar ")
    switch (parseInt(respuesta)) {
        case 1:
            
            break
        case 2:
            
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
}

}while(loquesea == false)