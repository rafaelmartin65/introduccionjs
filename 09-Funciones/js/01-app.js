/* Las funciones en cualquier lenguaje son una serie de procedimientos o 
instrucciones que realizan una acción. Una de las ventajas de las funciones
es que permiten tener un código más ordenado y fácil de mantener. */

/* Otra de las ventajas de las funciones es que son reutilizables. Puedes tener una función 
que valide un formulario y utilizarla en todos los formularios. También puedes tener 
una función que envíe datos al servidor y reutilizarla miles de veces. */

// Existen muchas formas de crear funciones en JavaScript.

// Declaración de función: la declaración de la función utiliza la palabra 
// reservada "function", seguida de un nombre y unos paréntesis. En estos
// paréntesis se colocan los argumentos. Finalmente, el cuerpo de la 
// función se define con unas llaves.


function sumar(){
    console.log(2 + 2);
}

sumar(); //llamada ala función sumar

//Expresión de función, Este tipo de funciones se asigna como si fuese una variable
const sumar2 = function(){
    console.log( 3 + 3 );
}

sumar2();

//Existe una 3ra forma de crear funciones, que más bien son métodos
//la veremos un poco más adelante. 

