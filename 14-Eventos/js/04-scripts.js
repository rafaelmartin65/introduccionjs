/** Vamos a ver los eventos para un formulaio, básicamente
 * es uno pero es muy importante saberlo
 */

/** Cuando envias un formulario usualmente lo que este
 * en el action, es la página que se abre
 */

const formulario = document.querySelector('.formulario');

formulario.addEventListener('submit', e => {
    e.preventDefault(); // Es para evitar que el navegador realice la acción por default
    console.log('enviando...');
    console.log('información que da \'e\'', e);
    console.log('información que da \'e-target-method\'', e.target.method);
    console.log('información que da \'e-target-action\'', e.target.action);
})

/** Realiza un script que simule el juego de piedra, papel o tijera 
 *  
 *  0-Piedra 1-Papel 2-Tijera
*/

/** Realiza un script del juego 3 en línea, asocie el evento click de los nueve botones a una única función.
 * Alternar ente la X y O. Mostrar un mensaje cuando gana un jugador
 * 
 */