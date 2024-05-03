document.querySelector('#header').innerHTML = "estamos  leyendo el documento for.js";



for  (let index1 = 1; index1 < 10; index1++) {
 
    for  (let index2 = 1; index2 < 10; index2++) {
        respuesta = index1 * index2


console.log(index1,"x",index2,"=",respuesta) 
}
}
// se un array con un largo de 10

var arreglo = new Array(10)

for (let i = 0; i < arreglo.length; i++) {
    // se llena el array con los valores de i
    arreglo [i] = i
}
console.log(arreglo)