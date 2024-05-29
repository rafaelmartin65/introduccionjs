

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Primero veamos como funciona con forEach

meses.forEach((mes, index) => {
    if(mes === 'Abril'){
        console.log(`Encontrando en el indice ${index}`);
    }
});

//findIndex te dirá el indice, es decir la ubicación del elemento en el arreglo

const indice = meses.findIndex(mes => mes === 'Abril');
console.log(indice);

// s cambiamos a Dicienbre tendremos como resultado -1, significa que no lo encontró

const indice1 = meses.findIndex(mes => mes === 'Diciembre');
console.log(indice1);


