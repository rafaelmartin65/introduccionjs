//como hacer destructuring de un objeto que esta dentro de otro objeto
const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 30,
    disponibilidad: true,
    informacion:{
        peso: '1 kg',
        medida: '1m',

    }
}

const {nombre, informacion, informacion:{peso, medida}} = producto;

console.log('mostrar el nombre ',nombre);
console.log('mostrar producto ',producto);
console.log('el peso ',peso);
console.log('esta es la medida ',medida);