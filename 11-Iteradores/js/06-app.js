// Otros Iteradores en JavaScript
// Ya hemos hablado de Foreach y Map

let pendientes = ['Tarea', 'Comer', 'Ducharse foo', 'Estudiar']

//Recorrer con un Foreach
pendientes.forEach((pendientes, index) => {
        console.log(`${index} : ${pendientes}`);
});

const carrito = [
    {id:1, producto: 'Libro'},
    {id:2, producto: 'Camisa'},
    {id:3, producto: 'Disco'},
];

carrito.forEach(producto =>{
    console.log(`Agregaste ${producto}`);
});

// Maps funciona de la misma aplica para los Maps, la sintaxis