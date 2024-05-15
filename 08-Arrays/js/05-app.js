const carrito = [];
//Añadir un elemento al carrito
const producto = {
    nombre: 'Monitor de 50 pulgadas',
    precio: 600
}

const producto2 = {
    nombre: 'Movil',
    precio: 500
}

carrito.push(producto);
carrito.push(producto2);

//Añadir al inicio del carrito
const producto3 = {
    nombre: 'Teclado',
    precio: 30
}
carrito.unshift(producto3);


console.log(carrito);