var entrada1 = prompt("Introduce el primer número:");
var entrada2 = prompt("Introduce el segundo número:");
let num1 = parseFloat(entrada1);
let num2 = parseFloat(entrada2);
var suma = num1 + num2;
let diferencia = num1 - num2;
const sonIguales = num1 === num2;
let combinacionLogica = sonIguales || false;

console.log("Suma:", suma);
console.log("Diferencia:", diferencia);
console.log("¿Son estrictamente iguales?:", sonIguales);
console.log("Combinación lógica (sonIguales || false):", combinacionLogica);