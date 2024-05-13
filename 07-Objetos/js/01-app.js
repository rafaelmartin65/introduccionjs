//los objetos son la pieza pincipal en javascript
//en lugar de crear diferentes variables
const nombreProducto = "Monitor 30 pulgadas";
const precio = 200;
const disponible = "si";

//podemos crear un objeto que agrupe toda esta información
//en una sola variable
const producto = { //esto se le conoce como Object literal ...

}
//estas llaves despues del signo = representa un objeto
const poducto = {
    nombre: // esto se le llama una propiedad o llave del objeto
}

const producto = {
    nombre: "Monitor de 30 pulgadas" // nota como el lugar del signo = se utiliza los :
    // esta sintaxis es propia de los objetos y reprsenta el valor ue tendra la propiedad

}

// si desea agregar mas propiedades puedes hacelo de la siguiente forma
const prodcuto = {
    nombre: 'Monitor de 30 pulgadas', //la coma es importante para separar las propiedades
    precio: 200,
    disponible: true //el último elemento puede o no tener la coma ","
}

console.log(producto.nombre);