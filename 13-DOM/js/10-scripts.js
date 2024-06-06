// Cuando trabajas con DOM hay algo importante que es la creación de HTML desde JavaScript

const enlace = document.createElement('a');
// segundo paso s crear el texto del enlace
// con textContent

enlace.textContent = 'Nuevo Enlace';

// Vamos a asignar la ruta

enlace.href = '/nuevo-enlace';

console.log(enlace);

//const div = document.getElementById('navegacion');
const navegacion = document.querySelector('.navegacion');
console.log(navegacion);

navegacion.appendChild(enlace);



/** Vamos a probar un segundo ejemplo crearemos un card */

// Selecciona el contenedor de las tarjetas
let contenedorCards = document.querySelector('.contenedor-cards');

// Crea un nuevo elemento <div> para la tarjeta
let nuevaCard = document.createElement('div');
nuevaCard.classList.add('card');

// Crea y configura el elemento <img>
let nuevaImg = document.createElement('img');
nuevaImg.src = 'img/hacer3.jpg'; // URL de la nueva imagen
nuevaImg.alt = 'Concierto';

// Crea el contenedor para la información de la tarjeta
let nuevaInfo = document.createElement('div');
nuevaInfo.classList.add('info');

// Crea y configura los elementos de información (categoría, título, precio)
let nuevaCategoria = document.createElement('p');
nuevaCategoria.classList.add('categoria', 'concierto');
nuevaCategoria.textContent = 'concierto';

let nuevoTitulo = document.createElement('p');
nuevoTitulo.classList.add('titulo');
nuevoTitulo.textContent = 'Rock en vivo 2024';

let nuevoPrecio = document.createElement('p');
nuevoPrecio.classList.add('precio');
nuevoPrecio.textContent = '€1.900 por persona';

// Añade los elementos de información al contenedor de información
nuevaInfo.appendChild(nuevaCategoria);
nuevaInfo.appendChild(nuevoTitulo);
nuevaInfo.appendChild(nuevoPrecio);

// Añade la imagen y el contenedor de información a la nueva tarjeta
nuevaCard.appendChild(nuevaImg);
nuevaCard.appendChild(nuevaInfo);

// Añade la nueva tarjeta al contenedor de tarjetas
contenedorCards.appendChild(nuevaCard);
