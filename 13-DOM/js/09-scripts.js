/** Después de una super extensa explicación de Traversing del DOM vamos aprender a eliminar
 *  elementos del DOM
*/

/** Es muy común eliminar o borrar un a foto de  Facebook o Tweet se elimnina automáticamente
 * también cunado quitas elementos de un carrito de compras ...
 */

/** Cuando le das megusta  auna foto por accidente y le quitas el like. */

/** Hay 2 formas de eliminar elementos del DOM, una es eliminar un elemento por si mismo y la otra es 
 *  eliminarlo desde el padre...
 */

//const primerEnlace = document.querySelector('a');
//primerEnlace.remove();

/** La otra forma es por el padre */

const navegacion = document.querySelector('.navegacion');

// El siguiente paso es ver el elemento a eliminar

console.log(navegacion.children);
navegacion.removeChild(navegacion.children[3]);

// Otra formas es creando una variable
const borrar = navegacion.children[1];

