// foreach y map con el arrow function

const carrito = [
    {nombre: 'Monitor 20 pulgadas', precio: 300},
    {nombre: 'Television 50 pulgadas', precio: 200},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 200},
    {nombre: 'Teclado', precio: 50},
    {nombre: 'Movil', precio: 500}
];

const nuevoArray = carrito.map(producto => `Articulo: ${producto.nombre} Pecio: ${producto.precio}`);

const nuevoArray2 = carrito.forEach(producto => console.log(`Articulo: ${producto.nombre} Precio: ${producto.precio}`));

console.log(nuevoArray);
console.log(nuevoArray2);

// los arow function si no se coloca el return y queda en una sola línea dan por implícito el return

