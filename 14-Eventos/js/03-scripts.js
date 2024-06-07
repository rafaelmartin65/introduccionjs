// Eventos que suceden con el teclado, usuario escribe en un input

const busqueda = document.querySelector('.busqueda');

busqueda.addEventListener('input', () => {
    console.log('escribiendo');
})

//Ahora vamos a hacer otro ejemplo
//No tiene mucho sentido enviar mensaje a la consola, lo idela sería saber el texto que se escribe
/*busqueda.addEventListener('input', e => {
    console.log(e);  //Mucha información
    console.log(e.type);  //Sobre el elemento que estamos tabajando
    console.log(e.target);  //El input completo
    console.log(e.target.value);  //lo que el usuario escribe
});*/

/** también puede ser con una función */

function leerInput (e) {
    alert(e);  //Mucha información
    console.log(e.type);  //Sobre el elemento que estamos tabajando
    console.log(e.target);  //El input completo
    console.log(e.target.value);  //lo que el usuario escribe
}



