//Similar al freeze, existe otro método de objeto llamado
//seal, a diferencia del freeze no se puede agregar ni eliminar propiedades
//pero si se pueden modificar las propiedades existentes
const producto = {
    nombre: 'Monitor 10 pulgadas',
    precio: 200,
    disponible: true

}

Object.seal(producto);
//se pueden reasignar

producto.nombre = "Tablet";
console.log(producto);

//verificarr si el objeto está sellado 'seal'
console.log(Object.isSealed(producto));