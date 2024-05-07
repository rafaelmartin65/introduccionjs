// variables
// 3 formas de crearlas en js
// en las nuevas versiones se utilizan 2

var producto = 'Monitor de 23 pulgadas'; // inicializamos varibale con un valor

producto = "Monitor de 19 pulgadas"; // las variables también se pueden reasignar
console.log(producto);

// lenguaje de tipo dinámico
// no se especifica el tipo de dato
var precio = 200;
console.log(precio);

//también se puede asignar una variable sin valor y asignarlo después
var disponible;
disponible = true;
console.log(disponible);


// iniciar multiples variables
var categoria = 'ordenador',
    marca = 'Marca famosa',
    calificacion = 5;

console.log(categoria);
console.log(marca);
console.log(calificacion);

// reglas de variables
// pueden tener: letras, números ..
// no pueden iniciar con números

var 99dias;
var dias99;

// estilos para crear vaiables con mas de una palabra
var nombreProducto = 'Monitor'; // camelcase
var nombre_producto = 'Monitor'; // snake case
var Nombre_Producto = 'MOnitor'; // pascal case
// var nombre-producto = 'Monitor'; // kebab case

