/**Vamos a ver el querySelectorAll 
 * 
 * La diferencia ente querySelector y querySelectorAll
 * es que este último va a retomar todos los elementos que concuerdan con el selector y no
 * va a limitarte con el primero como querySelector
*/

const card = document.querySelectorAll('.card');
console.log(card);

const formulario = document.querySelectorAll('#formulario');
console.log(formulario);