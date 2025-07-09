var entradaPrecio = prompt("Introduce el precio del producto:");
let precio = parseFloat(entradaPrecio);
const DESCUENTO = 0.10;
let precioConDescuento = precio * (1 - DESCUENTO);
var esMayor100 = precio > 100;
let negacion = !esMayor100;
var sinAsignar;

console.log("Precio con descuento:", precioConDescuento);
console.log("¿Es mayor a 100?:", esMayor100);
console.log("Negación (¡no es mayor a 100?):", negacion);
console.log("Valor sin asignar:", sinAsignar);