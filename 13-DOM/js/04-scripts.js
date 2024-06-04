/**Vamos a ve querySelector 
 * 
 * querySelector va a retornar máximo 1 elemento, si hay multiples coincidencias soplo va a 
 * retornar el primero...
*/

const card = document.querySelector('.card');
// querySelector utiliza una sintaxis como los selectores CSS, por lo tanto si deseas
// selecciona una clase, debes tener el punto

console.log(card);

//Al ser una sintaxis de CSS puedes usar unos selectores más específicos...

const info = document.querySelector('.premium .info');
console.log(info);

const segundoCard = document.querySelector('.hospedaje .card:nth-child(2)');
console.log(segundoCard);

const formulario = document.querySelector('#formulario');
console.log(formulario);

//Recuerda también que puedes seleccionar etiuetas como  por ejemplo nav
const nav = document.querySelector('nav');
console.log(nav);