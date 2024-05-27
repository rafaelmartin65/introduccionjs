//Operador ternario
const autenticado = true;
const puedePagar = false;

console.log(autenticado ? 'Si está autenticado' : 'No está autenticado');

//El operador && y || se pueden utilizar ternario de lña siguiente manera

console.log(autenticado && puedePagar ? `autenticado y puede pagar` : `No está autenticado`);

//Operador ternario anidado

console.log (autenticado ? puedePagar ? `Si puede pagar` : `está autenticado pero no puede pagar` : `No está autenticado` );