//si recuerdas una variable con const una vez definida no se le puede reasignar un valor
// const producto = 'Monitor';
// producto = 'Tablet';
// console.log(producto);

//en el caso de los objetos veremos que tienen un comportamiento diferente ya que sus
//propiedades si se pueden reescribir o reasignar

const producto = {
    nombre: 'Monitor',
    precio: 200,
    disponibilidad: true
}
console.log(producto);

producto.disponibilidad = 'false';

console.log(producto);
