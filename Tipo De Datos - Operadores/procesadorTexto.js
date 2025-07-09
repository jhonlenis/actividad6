const SALUDO = "¡Tu texto es: ";
let texto = prompt("Escribe un texto:");
let esLargo = texto.length > 10;
var textoCompleto = SALUDO + texto;
var valorNulo = null;
let negacion = !esLargo;

console.log("Texto completo:", textoCompleto);
console.log("¿El texto es largo?:", esLargo);
console.log("Negación (¡no es largo?):", negacion);
console.log("Valor nulo:", valorNulo);