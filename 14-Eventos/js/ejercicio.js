const enlaces = document.querySelectorAll('.nav-juego a');

// Array de opciones para el juego
const opciones = ['Piedra', 'Papel', 'Tijera'];

enlaces.forEach(enlace => {
    enlace.addEventListener('click', (e) => {
        e.preventDefault();

        // Obtiene la elección del usuario desde el id del enlace
        const eleccionUsuario = enlace.id.charAt(0).toUpperCase() + enlace.id.slice(1);

        console.log("Elección usuario: ", eleccionUsuario);

        // Genera una elección aleatoria para la computadora
        const eleccionComputadora = opciones[Math.floor(Math.random() * opciones.length)];

        console.log("Elección computer: ", eleccionComputadora);

        let resultado;
        if(eleccionComputadora == eleccionUsuario){
            resultado = "Empate";
           
        }else{
            if(
                (eleccionUsuario == 'Piedra' && eleccionComputadora == "Tijera" ) || 
                (eleccionUsuario == 'Papel' && eleccionComputadora == "Piedra" ) ||
                (eleccionUsuario == 'Tijera' && eleccionComputadora == "Papel" )){
                    resultado = "Ganaste!!!"
                
            }else{
                resultado = "Perdiste!!!";
            }
        }

        alert(resultado);

    });
})
