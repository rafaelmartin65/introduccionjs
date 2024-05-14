// Los objetos si se pueden modificar sus valores, veamos como
// prevenirlos en caso de que sea algo que desees hacer

const producto = {
    nombre: 'Monitor 10 pulgadas',
    precio: 200,
    disponible: true

}

//veamos como prevenir que un objeto sea modificado, para ello utilizaremos
//freeze, y funciona así

Object.freeze(producto); //freeze toma como agumento el objeto

//producto.disponible = false;
//console.log(producto);

producto.imagen = 'imagen.jpg';
//tampoco se pueden elimina propiedades

delete producto.imagen;

//finalmente si quieres revisa si un objeto está congelado 'Freeze' puedes usar
console.log(Object.isFrozen(producto)); 
console.log(producto);