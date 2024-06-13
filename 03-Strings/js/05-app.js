//Vamos a ver 3 métodos más...
//Replace
const producto = "Monitor de 30 Pulgadas";
console.log(producto.replace("30","48"));
console.log(producto.replace("Pulgadas",'"'));

//Slice te permite extraer  una parte de una cadena.
console.log(producto.slice(0,10));//Va a cortar desde el inicio hasta la 10 casilla del string.
console.log(producto.slice(8));//Corta desde la 8 casilla del string hasta el final.
console.log(producto.slice(2,10));

console.log(producto.slice(2,1));//Si el primer número es mayor, este método no funciona.

//Existe uno similar al slice que se llama substring.
console.log(producto.substring(0,10));
console.log(producto.substring(2,1));//El substring alterna los números y te hace el corte al revés.
