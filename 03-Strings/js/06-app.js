//Repeat te permite repetir una cadena de texto.
const producto = "Monitor de 30 Pulgadas";
const texto = " en Promoción".repeat(3);

console.log(producto.repeat(3));
console.log(producto.repeat(2.2));
console.log(`${producto}${texto}!!!`);//En este caso hemos aplicado el template string para concatenar ambos textos y además hemos usado el repeat con el signo de exclamación.

//Split
const madrid = "Va a ganar hoy en la champions";
console.log(madrid.split(" "));

const bayern = "equipo, perderdor, equipo perderdor, escribir, aprender a programar";
console.log(bayern.split(", "));