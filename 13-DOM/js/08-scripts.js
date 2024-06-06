/** Vamos a ver lo que se conoce como traversing 
 * del DOM
 * 
*/

/** Todo en JS está conectado en el document, la forma en que te moveras
 * entre los elementos se conoce Traversing
 */

const navegacion = document.querySelector('.navegacion');
console.log(navegacion);

/** Cada elemento en la nevagación se le conoce como Nodos... y se podría
 *  listar de la siguiente manera
 */

console.log(navegacion.childNodes);

console.log(navegacion.children);

console.log(navegacion.children[0].nodeType);
console.log(navegacion.children[0].nodeName);

//por ejemplo si selecciona el primer card
const card = document.querySelector('.card');
console.log(card.nodeType);
console.log(card.nodeName);

/** 1 = Elemento
 *  2 = Atributo
 *  3 = Text Node
 *  8 = Comentario
 *  9 = Documento
 * 10 = doctype
 */

/** En JS puedes seeleccionar un elemento y navegar en sus diferentes elementos */

console.log(card.children);

/** Si queremos acceder a este div de la clase info  */

console.log(card.children[1]);

// Si queremos acceder a los elementos hijos de este info...

console.log(card.children[1].children[1]);
// Si queremos acceder al titulo
console.log(card.children[1].children[1].textContent);

// Modificar el título
card.children[1].children[1].textContent = 'Soft Rock 80\'s';

console.log(card.children[1].children[0].textContent);

card.children[1].children[0].textContent = "Rock";

/** Vamos a ver como acceder a la imagen 
 * 
*/
console.log(card.children);
console.log(card.children[0].src);

// Para cambiar la imagen

card.children[0].src = 'img/hacer3.jpg';


