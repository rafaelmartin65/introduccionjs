//un objeto puede contener cualquier tipo de dato dentro de el
//incluso otro objeto a esto se le conoce como objetos anidados
const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 30,
    disponibilidad: true,
    informacion:{
        peso: '1 kg',
        medida: '1m',

    }
}

console.log(" este es el objeto ",producto); //puedes ver que tenemos un objeto dentro de otro
console.log(producto.informacion.medida);

//para acceder a un objeto podemos utilizar la sintaxis de punto . 
console.log(" este es el objeto dentro del otro ", producto.informacion);

console.log(" este es el acceso a la propiedad del objeto anidado  ", producto.informacion.peso);


