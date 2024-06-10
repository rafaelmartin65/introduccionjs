/** Veamos lo que se conoce com oEvent Bubbling...
 * Event Bubbling es cuando presionar en un evento, pero ese 
 * evento se propaga por muchos otros dando resultados inesperados
 * 
 * Vamos a crear 3 selectores
 */

const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');
const precio = document.querySelector('.precio');

cardDiv.addEventListener('click', e => {
    e.stopPropagation();
    console.log('click card');
})

infoDiv.addEventListener('click', e => {
    e.stopPropagation();
    console.log('click info');
})

titulo.addEventListener('click', e => {
    e.stopPropagation();
    console.log('click titulo');
})

precio.addEventListener('click', e => {
    e.stopPropagation();
    console.log('click precio');
})

