
//Otro Array method es .reduce

//Si buscas la diferencia de que es una función que reduce, te diran que es una función reductora
//Pero basicamente es tomar una gran cantidad de datos y entregar un resultado
//Supongamos que tenemos en nuestro carrito de compras y queremos decirle al usuario cuanto es el total a pagar

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//Con un forEach lo podrías hace así
let total = 0;
carrito.forEach(producto => total += producto.precio);
console.log(total);

let resultado = carrito.reduce((total, producto) => total += producto.precio,0);
console.log(total);



/***************************************/
/* Ejercicios en clase
/*
****************************************/
//Realiza un programa en JavaScript que cuente el número de vocales que tiene un texto.
const vocales = ["a","e","i","o","u","á","é","í","ó","ú"];

let palabra = prompt("Escribe una palabra");


let cuenta = 0;
for (let i = 0; i < palabra.length; i++){
    const existe = vocales.includes(palabra[i]);
    if(existe){
        cuenta++;
        console.log(palabra[i]);
    }
    
}
console.log("La palabra es: ", palabra);
console.log("El total de vocales es: ", cuenta);

//realiza un programa en JavaScript que pida una cadena de texto y la devuelva al revés
let palabra1 = prompt("Escribe una palabra");
let reves = "";
let y = 1;
for(let x = 1; x <= palabra1.length;x++){
    
    reves = reves + palabra1[(palabra1.length-x)];
}
console.log(reves);