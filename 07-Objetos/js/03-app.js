// como asigna vaiables a un objeto
const producto = {
    nombre: "Monitor de 30 pulgadas",
    precio: 200,
    disponible: true
}

//destructuring significa, saca de una estructura, pude ser complejo, no lo es tanto sobre todo cuando se practica.
const {nombre} = producto;
// si deseamos más variables
const {precio} = producto;


console.log(nombre);
console.log(precio);

// también se puede definir asi
// const {nombre, precio} = producto;