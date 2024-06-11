
/*  1. Realizar un ejercicio de JavaScript que pida un texto e indique si es un palindromo.

    2. Crea una función que reciba un parámetro, un DNI, y devuelva la letra del mismo. Si el DNI pasado tiene
    algún error, devolverá "" 
    
    3. 
    */


function esPalindromo(texto) {
    // Convertir a minúsculas y eliminar caracteres no alfanuméricos manualmente
    let textoLimpio = '';
    for (let i = 0; i < texto.length; i++) {
        const char = texto[i].toLowerCase();
        if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
            textoLimpio += char;
        }
    }

    // Invertir el texto
    const textoReverso = textoLimpio.split('').reverse().join('');
    // Comparar el texto limpio con su reverso
    return textoLimpio === textoReverso;
}

function verificarPalindromo() {
    const userInput = prompt("Por favor, ingresa un texto:");
    if (userInput) {
        if (esPalindromo(userInput)) {
            alert("El texto ingresado es un palíndromo.");
        } else {
            alert("El texto ingresado NO es un palíndromo.");
        }
    } else {
        alert("No se ingresó ningún texto.");
    }
}



verificarPalindromo();

/*****************************************************/
function crearLetraDni(dni) {

    let resto = dni % 23;
    //console.log(resto);
    const letra = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
    //console.log(letra[resto]);

    return letra[resto];
}

const userInputDni = prompt("Por favor, ingresa tu DNI: ");
const userInputDniUp = userInputDni.toUpperCase();
const numero = userInputDniUp.slice(0, -1);
//console.log(numero);
const l = crearLetraDni(numero);
const dniValidado = numero + l;
//console.log(dniValidado);
if (dniValidado == userInputDniUp) {
    alert("DNI es ok!");
} else {
    /* console.log("dni validado", dniValidado);
     console.log("dni por teclado", userInputDniUp);*/
    alert(`El DNI tiene un error, la letra correcta es ${l}`);
}