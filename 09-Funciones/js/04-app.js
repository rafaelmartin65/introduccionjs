/* veamos la diferencia entre un método y una función */

const numero1 = 20;
const numero2 = "20";

// Aunque en realidad terminan siendo prácticamente lo mismo, la forma en que
// se utilizan depende más del contexto en el que se usan...

console.log(parseInt(numero2)); //esto es una función
console.log(numero1.toString); //esto es un método

// En JavaScript, tanto las funciones como los métodos son bloques de código que realizan una tarea específica
// o calculan un valor. Sin embargo, hay una diferencia clave entre ambos términos:

// Función: 
// Una función es un bloque de código independiente que puede ser invocado por su nombre.
// No está asociada a ningún objeto en particular y puede ser definida en cualquier parte del código.
// Ejemplo:
function saludar() {
    console.log("¡Hola, mundo!");
}
saludar(); // Invocación de la función

// Método:
// Un método es una función que está asociada a un objeto. Se define como una propiedad del objeto
// y generalmente opera sobre los datos que contiene ese objeto.
// Ejemplo:
const persona = {
    nombre: "Juan",
    saludar: function() {
        console.log("Hola, " + this.nombre);
    }
};
persona.saludar(); // Invocación del método

// Resumen:
// - Las funciones son bloques de código independientes que no pertenecen a ningún objeto.
// - Los métodos son funciones que están asociadas a un objeto y se definen como propiedades del mismo.



