document.querySelector('#header').innerHTML = "estamos  leyendo el documento array.js";

var cesta = ["fresa", "pera", "cereza"]
var cestaVacia = [] // crear un array vacio
console.log(cesta)
cesta[0] = "uva"// para modificar el valor de una posicion 
console.log(cesta);


console.log(cesta.length) // ver el tamaño del arrat 

cesta.push("naranja")// agrega un elementa al array
console.log(cesta)

cesta.pop()// elimina el ultimo elemento del array
console.log(cesta)

cesta.push("naranja")
cesta.push("piña")
console.log(cesta)
/*
el segundo paramentro (1) indica cuantos elemetos eliminar 
desde el indice proporcionado (2)
*/
cesta.splice(2,2)
console.log(cesta)


console.log(cesta[2])





