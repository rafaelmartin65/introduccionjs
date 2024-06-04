// En JS también es pòsible cambiar el CSS de un elemento

const heading = document.querySelector('h1');

//Puedes usar muchas propiedades de CSS

console.log(heading.style);
heading.style.backgroundColor = 'red';
heading.style.textTransform = 'uppercase';
heading.style.visibility = 'visible';

//Ahora yo no recomiendo que pongas style ya que tu archivo de JS será muy
//grande, otra desventaja es que la apariencia debe sere algo que sea responsabilidad
//de CSS pero lo que si debes hacer es quitar o agregar clases


//seleccionar el primer card ("Veamos que tiene un texto con una categoría llamada concierto")
const card = document.querySelector('.card');
console.log(card);
console.log(card.classList); //classlist nos permitirá listar las clases
card.classList.add('nueva-clase'); // esto te permitirá crear una clase...
//Ahora si deseas eliminar
card.classList.remove('card');

