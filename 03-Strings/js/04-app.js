//Métodos de string:
const producto = "           Monitor de 30 Pulgadas";

console.log(producto);
console.log(producto.length);

//Eliminar el espacio del inicio.
console.log(producto.trimStart());//Elimina todos los espacios anterior al texto.
console.log(producto.trimEnd());//Elimina todos los espacios posteriores al texto.

//Los métodos en JavaScript se pueden encadener (concatenar), es decir, colocarse juntos en un mismo console.log
console.log(producto.trimStart().trimEnd());

console.log(producto.trim().length);