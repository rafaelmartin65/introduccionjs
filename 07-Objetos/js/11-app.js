// La palabra reservada 'this' se refiere al objeto o contexto 
// que está siendo ejecutado en ese momento.
const producto = {
    nombre: 'Monitor 30 pulgadas',
    precio: 200,
    disponible: true,
    mostrarInfo: function(){
        return `El producto: ${this.nombre} tiene un precio ${this.precio}`;
    }
}

console.log(producto.mostrarInfo());