// Otro operador muy común es el while, este se ejecutará mientras una condición sea verdadera

let i = 0;
while ( i < 10){
    console.log(`Numero ${i}`);

    i++;
}




// crea una función que genere 100 números aleatorios entre 1 y 1000, que no se repitan y luego mostrarlos por pantalla.
console.log(`Aleatorio. `, aleatorios(1,1000));

//Se define una función llamada aleatorios que toma dos parámetros: min y max. 
function aleatorios(min, max){
    console.log(min, max);

    //min = Math.ceil(min); //La función Math.ceil() se utiliza para redondear hacia arriba el valor de min para asegurarse de que sea un número entero.
    //console.log(`minimo`, min);
    //max = Math.floor(max);  //La función Math.floor() se utiliza para redondear hacia abajo el valor de max para asegurarse de que sea un número entero.
    //console.log(`maximo`, max);
    //console.log(`Resultado: `, Math.floor(Math.random() * (max - min + 1) + min));
   
    return Math.floor(Math.random() * (max) + min); 
    
    
    // Math.random() genera un número decimal pseudoaleatorio entre 0 (inclusive) y 1 (exclusivo).
    // Multiplicar Math.random() por (max - min + 1) genera un número entre 0 (inclusive) y max - min + 1 (exclusivo).
    // Sumar min al resultado asegura que el número aleatorio generado esté dentro del rango deseado [min, max].
    // Math.floor() se utiliza para redondear el resultado hacia abajo para obtener un número entero.
}