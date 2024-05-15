//Veamos cómo unir dos objetos, ya que esto es algo muy común. En ocasiones, al trabajar con bases de datos, 
//obtienes el ID del cliente y también cuentas con los datos de los propios clientes asociados a ese ID. 
//En este caso, es útil saber cómo unir esta información.

const producto = {
    nombre:'Monitor 10 pulgadas',
    precio: 200,
    disponible: true
}

const medida = {
    peso: '1 Kg',
    medida: '1m'
}

//una forma de hacelo es con el Objeto Method llamado
//assign

//const resultado = Object.assign(producto, medida);
//console.log(resultado);
console.log(producto);

const resultado1 = Object.assign({}, producto, medida);
console.log(producto);
console.log(resultado1);