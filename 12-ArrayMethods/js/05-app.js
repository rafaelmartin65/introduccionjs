//Vamos a ver el FIND
//Find te creará un arreglo nuevo en base al primer resultado que sea true

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

let resultado2 = carrito.find(item => item.precio > 600);

console.log(resultado2);

var resultado = '';
resultado = carrito.forEach((producto, index) => {
    if(producto.nombre === `Altavoces`){
        resultado = carrito[index];
    }
    
});
console.log("Resultado con Foreach: ", resultado);


//Vamos a hacerlo con Find
const resultado3 = carrito.find(producto => producto.nombre === 'Altavoces');
console.log("Resultado con Find: ", resultado3);