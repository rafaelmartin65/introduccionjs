// veamos algunos métodos existentes 
const producto = "Monitor 20 pulgadas";
const precio = "30 euros";

console.log(producto.length);
console.log(precio.length); // .length es una propiedad por eso no lleva parentesis

// indexof nos devuelve
console.log(producto.indexOf("pulgadas")); // devuelve la posición donde comienza la palabra en la variable
console.log(producto.indexOf("tablet")); // -1 significa que no la encontró

// 
console.log(producto.includes("Monitor")); // devuelve 
console.log(producto.includes("monitor"));