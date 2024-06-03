
/* Un poco más de spread operator *
/* El rest operator es muy útil para crear un nuevo arreglo 
    sin modificar el original */ 


const meses1 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
const meses2 = ['Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembe', 'Diciembre'];


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

//si tenemos 2 arreglos los unimos con concat, pero si
//tienes un arreglo y quieres agregar o añadir un elemento al final

const meses3 = [...meses1, 'Julio'];
console.log(meses3); //esto no modifica el array como si haría el push y esoes muy útil en programación funcional


//o al incio del Array... en lugar de utiliza unshift
const meses4 = ['Julio', ...meses1];
console.log(meses4);

//o añadir un objeto a un arreglo al final 
const producto = {producto: 'Disco Duro', precio: 300 };
const carrito2 = [...carrito, producto];
console.log(carrito2);

//o al inicio
const carrito3 = [producto, ...carrito];
console.log(carrito3);

/*  1. Realizar un ejercicio de JavaScript que pida un texto e indique si es un palindromo.

    2. Crea una función que reciba un parámetro, un DNI, y devuelva la letra del mismo. Si el DNI pasado tiene
    algún error, devolverá "" 
    
    3. 
    */




     

