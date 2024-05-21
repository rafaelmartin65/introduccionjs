/* Además de la notable diferencia de la sintaxis, si llamamos a la función
antes de declararla, el function expresion va a funcionar bien mientras que el 
otro nos va a marcar un error*/


sumar();
function sumar(){
    console.log(2 + 2);
}

sumar2();
const sumar2 = function(){
    console.log(3 + 3);
}
// Esto pasa porque JavaScript se ejecuta, digamos, en dos etapas. Esto se conoce como Hoisting.
// En la primera etapa, registra todas las funciones y determina las variables. A esta etapa se le llama "creación".

// La segunda pasada es la que ejecuta el código. Se le llama "ejecución".

// Por lo tanto, el primer código funciona porque la palabra clave "function" se registra primero y después se ejecuta.

// El segundo no funciona porque, aunque es una función, no está declarada como tal. Más bien, se ve como una variable.


const sumar2;
sumar2();
sumar2 = function(){
    console.log(3 + 3);
}

/*
El flujo de ejecución de JavaScript es el orden en el que el motor de JavaScript procesa el código. Aquí te explico los conceptos clave para entender cómo se maneja el flujo de ejecución:

1. Ejecución Síncrona:
   - JavaScript es un lenguaje de programación single-threaded, lo que significa que ejecuta una tarea a la vez en un solo hilo.
   - Las instrucciones se ejecutan de arriba hacia abajo, una a la vez, en el orden en que aparecen en el código.

2. Fases del Flujo de Ejecución:
   - Fase de Creación (Hoisting):
     - Durante esta fase, el motor de JavaScript escanea el código y realiza el hoisting (elevación) de las declaraciones de variables y funciones.
     - Las declaraciones de variables con var se elevan al inicio de su ámbito (scope) pero no se inicializan. Las declaraciones de variables con let y const también se elevan pero no se inicializan y permanecen en la "zona muerta temporal" (TDZ) hasta que se ejecuta su asignación.
     - Las funciones declaradas (usando function) se elevan completas, incluyendo su cuerpo.
   - Fase de Ejecución:
     - En esta fase, el motor de JavaScript ejecuta el código línea por línea, asignando valores a las variables y ejecutando las funciones.

3. Pilas y Colas:
   - Pila de Ejecución (Call Stack):
     - La pila de ejecución maneja el seguimiento de las funciones que se están invocando. Cuando se llama a una función, se añade un marco de pila (stack frame) a la pila. Cuando la función termina, se elimina el marco de pila.
   - Cola de Tareas (Task Queue):
     - La cola de tareas gestiona las funciones que deben ejecutarse después de que se complete el código síncrono actual. Esto incluye callbacks de eventos, promesas resueltas y otros tipos de tareas asíncronas.

4. Eventos y Asincronía:
   - Eventos y el Event Loop:
     - JavaScript utiliza un modelo basado en eventos para manejar tareas asincrónicas. Cuando ocurre un evento (como un clic del usuario o la resolución de una promesa), se coloca un callback en la cola de tareas.
     - El Event Loop es un mecanismo que monitorea la pila de ejecución y la cola de tareas. Si la pila de ejecución está vacía, el Event Loop toma el primer callback de la cola de tareas y lo coloca en la pila de ejecución para ser procesado.
   - Promesas y el Microtask Queue:
     - Las promesas añaden otra capa de asincronía. Las promesas resueltas se colocan en la cola de microtareas (Microtask Queue), que tiene prioridad sobre la cola de tareas normal. Esto significa que las microtareas se ejecutan antes de que se procesen las tareas en la cola de tareas normal.

Entender el flujo de ejecución en JavaScript es crucial para escribir y depurar código asíncrono de manera efectiva.
*/
