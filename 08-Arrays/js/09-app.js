const carrito = [
    {nombre: 'Monitor 20 pulgadas', precio:300},
    {nombre: 'Televiion 50 pulgadas', precio: 200},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 200},
    {nombre: 'Teclado', precio: 50},
    {nombre: 'Movil', precio: 500}
    
]
// recorrer un array de la forma tradicional y mostrar el contenido
for (let i = 0; i < carrito.length; i++){
    console.log(`Artículo: ${carrito[i].nombre} Precio: ${carrito[i].precio}`);

}
console.log("---------------");

carrito.forEach(item => {
    console.log(`Artículo: ${item.nombre} Precio: ${item.precio}`);
});
