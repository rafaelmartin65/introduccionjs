/**Seleccionar elementos del DOM nos va a permitir
 * modificar nuestros HTML y hacerlo más interactivo...
*/

/**Veamos por ejemplo como modificar el texto de la parte superior ...*/

/**Primero tenemos que seleccionarlo */

const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);
//Si deseas acceder al texto hay 3 formas de hacerlo
//Aunque este oculto con la regla CSS visibilñity: hidden, igual lo muestra
console.log("innerHTML -->", encabezado.innerHTML);
console.log("textContent -->", encabezado.textContent);
console.log("innerText -->", encabezado.innerText);

// Puedes ver que con innerText no puedes acceder a ese contenido si tenemos CSS visibility:hidden

//En caso de encadenamiento
const textoEncabezado = document.querySelector('.contenido-hero h1').textContent;
console.log(textoEncabezado);

//Ahora si puedes ver que estoy asignando nuevo texto a una variable 
document.querySelector('.contenido-hero h1').textContent = 'Nuevo Heading';

//Otra forma sería...
const nuevoTexto = 'Nuevo Heading';
document.querySelector('.contenido-hero h1').textContent = nuevoTexto;

//También puedo cambiar una imagen
const imagen = document.querySelector('.card img');
console.log(imagen.src);

//Cambiar la imagen
imagen.src = 'img/hacer2.jpg';