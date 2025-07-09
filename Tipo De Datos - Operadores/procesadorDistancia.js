let distanciaKm = parseFloat(prompt("Introduce una distancia en kilómetros:"));
const METROS_POR_KM = 1000;
let metros = distanciaKm * METROS_POR_KM;
let centimetros = metros * 100;
var esMenorAUnKm = distanciaKm < 1;
var valorNulo = null;

console.log("Distancia en metros:", metros);
console.log("Distancia en centímetros:", centimetros);
console.log("¿Es menor a 1 km?:", esMenorAUnKm);
console.log("Valor nulo:", valorNulo);