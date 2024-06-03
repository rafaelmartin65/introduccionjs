//Filter te va a crear un arreglo basado en un parámetro
//que es evaluado...

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión 50 Pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 },
    { nombre: 'Altavoces', precio: 300 },
    { nombre: 'Portatil', precio: 800 },
]

let resultado = carrito.filter(producto => producto.precio > 400);
//Va a mostrar todos los mayores a 400 - Podemos añadir
//&& producto.precio > 600


let resultado2 = carrito.filter(producto => producto.nombre == "movil");

let resultado3 = carrito.filter(producto => producto.nombre == "Celular");


console.log(resultado);
console.log(resultado2);
console.log(resultado3);


