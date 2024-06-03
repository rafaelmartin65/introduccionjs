// Vamos a unir 2 arreglos, para ello existe un Array method
// llamado concat

const meses1 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
const meses2 = ['Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembe', 'Diciembre'];

// unir 2 arreglos con concat

const meses = meses1.concat(meses2);

console.log(meses);

//Existe otra forma de concatenar, es con spread operator

const mesesd = [...meses1,...meses2];
console.log(mesesd);