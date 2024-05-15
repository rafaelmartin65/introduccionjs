//Al igual que los objetos un arreglo se puede modificar
//a pesar de utilizar 

const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio');

meses[0] = 'Nuevo mes';

//también puedo añadir al final
meses[6] = 'Ultimo mes';
console.log(meses);