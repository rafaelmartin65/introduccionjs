const carrito = [
    {nombre: 'Monitor 20 pulgadas', precio: 300},
    {nombre: 'Television 50 pulgadas', precio: 200},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 200},
    {nombre: 'Teclado', precio: 50},
    {nombre: 'Movil', precio: 500}
];

// Muy similar al foreach existe un array method llamado map, la diferencia es que te crea un nuevo array.

const nuevoArray = carrito.map(function(producto){
    return `Articulo: ${producto.nombre} precio: ${producto.precio}`;
});

carrito.forEach(item => {
    console.log(`Artículo: ${item.nombre} Precio: ${item.precio}`);
});

console.log("Array 1 con método map:", nuevoArray);
// ForEach no retorna un nuevo array, solo realiza una acción sobre cada elemento.
console.log("Array 1 con forEach no genera un nuevo array, solo itera sobre los elementos.");

