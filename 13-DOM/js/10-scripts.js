// Cuando trabajas con DOM hay algo importante que es la creación de HTML desde JavaScript

const enlace = document.createElement('a');
// segundo paso s crear el texto del enlace
// con textContent

enlace.textContent = 'Nuevo Enlace';

// Vamos a asignar la ruta

enlace.href = '/nuevo-enlace';

console.log(enlace);

//const div = document.getElementById('navegacion');
const div = document.querySelector('.navegacion');
console.log(div);

div.appendChild(enlace);
