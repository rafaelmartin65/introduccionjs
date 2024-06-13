//Veamos como concatenar unir cadenas de texto y variables.
const producto = 'Monitor de 30 Pulgadas';
const precio = "200";

console.log(producto.concat(" En Descuento"));//Concatenar un string.
console.log(producto.concat(precio));//Concatenar una variable.

//Otras formas de concatenar:
console.log(producto + precio);
console.log(producto + " con un precio de " + precio);
console.log("El producto " + producto + " tiene un descuento de "+ precio);//Esta forma se puede complicar
console.log("El producto ", producto, " tiene un descuento de ", precio);

//ES6 "SmartScript6" trajo consigo una mejor forma de concatenar variables
//Se le llama Template string o Template Literal
console.log(`El producto ${producto} tiene un precio de ${precio}`);