//Vamos a ver a Every
//every es muy raro ya que todos los elementos del Array deberan cumplir la condición



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

//Vamos a hacerlo primero con un Foreach

let cumple = true;
carrito.forEach(producto =>{
    if(producto.precio < 900){
        console.log(producto.nombre,"  ",producto.precio);
        cumple = false;
        return
    }
});
console.log(cumple);

//Vamos a hacerlo con Every
const resultado = carrito.every(producto => producto.precio < 700);
console.log("Resultado en every: ", resultado);