const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]


meses.forEach(element => {
    if (element === 'Febrero'){
        console.log('Febrero si existe...');
    }
});

const resultado = meses.includes('Enero');
console.log(resultado);

const existe = carrito.some(producto => producto.nombre === 'Celular');
console.log('El celular existe? ', existe);

const existe2 = meses.some(mes => mes === 'Febrero');
console.log(existe2);
