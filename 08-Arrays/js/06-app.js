//Veamos como añadir un elemento a un arreglo utilizandop spread operator

const carrito = [];

//Añadir un elemento al carito
const producto = {
    nombre: 'Monitor 30 pulgadas',
    precio: 300
}

const producto2 = {
    nombre: 'Movil',
    precio: 200
}

const producto3 = {
    nombre: 'Movil',
    precio: 200
}

const producto4 = {
    nombre: 'Teclado',
    precio: 30
}

//Esta instrucción en JavaScript utiliza el operador de propagación (...) para crear una nueva matriz que combina los elementos de dos matrices existentes.
let resultado = [...carrito, producto];

resultado = [...resultado, producto2];
resultado = [...resultado, producto3];
resultado = [producto4, ...resultado];

console.log(resultado);
