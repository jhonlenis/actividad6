var entradaPeso = prompt("Introduce tu peso en kilogramos:");
let peso = parseFloat(entradaPeso);
let gramos = peso * 1000;
const PESO_REFERENCIA = 70;
var esMayor70 = peso > PESO_REFERENCIA;
let combinacionLogica = esMayor70 && true;

console.log("Peso en gramos:", gramos);
console.log("¿Es mayor a 70kg?:", esMayor70);
console.log("Combinación lógica (esMayor70 && true):", combinacionLogica);