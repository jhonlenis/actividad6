let nombre = prompt("Introduce tu nombre:");
var entradaEdad = prompt("Introduce tu edad:");
let edad = parseInt(entradaEdad);
let peso = parseFloat(prompt("Introduce tu peso en kilogramos:"));
const MESES_POR_ANIO = 12;
let edadEnMeses = edad * MESES_POR_ANIO;
var gramos = peso * 1000;
let nombreVacio = nombre === "";
let edadPar = edad % 2 === 0;
let combinacionLogica = nombreVacio || edadPar;

console.log("Nombre:", nombre);
console.log("Edad en meses:", edadEnMeses);
console.log("Peso en gramos:", gramos);
console.log("¿El nombre está vacío?:", nombreVacio);
console.log("¿La edad es par?:", edadPar);
console.log("Combinación lógica (nombreVacio || edadPar):", combinacionLogica);