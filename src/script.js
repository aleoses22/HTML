var peras;
var fresas;
var mangos;
var mensaje;


function jugo_de_fresas() {
  window.alert(mensaje);
  document.queryselector('header').innerHTML = mensaje

}

function servir_vaso_de_agua() {
  window.alert(mensaje);
  document.queryselector('header').innerHTML = mensaje

}


function jugo_de_peras() {
  window.alert(mensaje);
  document.queryselector('header').innerHTML = mensaje

}

function jugo_de_mangos() {
  window.alert(mensaje);
  document.querylselector('header').innerHTML = mensaje

}


fresas = true;
peras = false;
mangos = false;

if (fresas) {
  mensaje = "jugo de fresas"
  jugo_de_fresas();
} else if (peras) {
  jugo_de_peras();
  mensaje = "jugo de peras"
} else if (mangos) {
  mensaje = "jugo de mango"
  jugo_de_mangos();
} else {
  mensaje = "sirveme un vaso de agua"
  servir_vaso_de_agua();
}