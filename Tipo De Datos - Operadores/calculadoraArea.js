let ancho = parseFloat(prompt("Introduce el ancho del rectángulo:"));
let alto = parseFloat(prompt("Introduce el alto del rectángulo:"));
let area = ancho * alto;
const AREA_REFERENCIA = 50;
let esMayor50 = area > AREA_REFERENCIA;
var variableSinDefinir;

console.log("Área:", area);
console.log("¿El área es mayor a 50?:", esMayor50);
console.log("Valor sin definir:", variableSinDefinir);