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
    precio: 300
}

const producto4 = {
    nombre: 'Teclado',
    precio: 30
}

carrito.push(producto);
carrito.push(producto2);
carrito.push(producto3);
carrito.push(producto4);
//carrito.unshift(producto3);

//veamos como eliminar elementos del arrglo. con un objeto sólo se utiliza delete

//carrito.shift(); //eliminar el primer elemento
//carrito.pop(); //eliminar el último

console.log(carrito);


carrito.splice(2,1); //elimina el elmento que está en el indice 2 y elimina sólo 1 que es el segundo parámetro

console.log(carrito);


