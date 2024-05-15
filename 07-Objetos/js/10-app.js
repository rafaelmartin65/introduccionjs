//

const producto = {
    nombre:'Monitor 10 pulgadas',
    precio: 200,
    disponible: true
}

const medida = {
    peso: '1 Kg',
    medida: '1m'
}

//Otra forma mas moderna es con Spread Operator o Rest Operator

const resultado = {...producto, ...medida};
console.log(resultado);
console.log(producto);