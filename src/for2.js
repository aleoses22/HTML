document.querySelector('#header').innerHTML = "estamos  leyendo el documento for2.js";

var arreglo = []

for (let i = 0; i < 10; i++) {
    let numerooAleatorio = Math.floor(Math.random() * 20) + 1
    arreglo[i] = numerooAleatorio
}
console.log(arreglo)
