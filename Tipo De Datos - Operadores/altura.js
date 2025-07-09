let altura = parseFloat(prompt("Introduce tu altura en metros (ej. 1.75):"));
let alturaCm = altura * 100;
var alturaMm = alturaCm * 10;
const ALTURA_REFERENCIA = 1.5;
let esAlta = altura > ALTURA_REFERENCIA;
var sinAsignar;

console.log("Altura en centímetros:", alturaCm);
console.log("Altura en milímetros:", alturaMm);
console.log("¿Es mayor a 1.5m?:", esAlta);
console.log("Valor sin asignar:", sinAsignar);