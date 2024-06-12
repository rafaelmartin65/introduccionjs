
/***************************************/
/* Ejercicios en clase
/*
****************************************/
//Realiza un programa en JavaScript que cuente el número de vocales que tiene un texto.
const vocales = ["a","e","i","o","u","á","é","í","ó","ú"];

let palabra = prompt("Escribe una palabra");


let cuenta = 0;
for (let i = 0; i < palabra.length; i++){
    const existe = vocales.includes(palabra[i]);
    if(existe){
        cuenta++;
        console.log(palabra[i]);
    }
    
}
console.log("La palabra es: ", palabra);
console.log("El total de vocales es: ", cuenta);

//realiza un programa en JavaScript que pida una cadena de texto y la devuelva al revés
let palabra1 = prompt("Escribe una palabra");
let reves = "";
let y = 1;
for(let x = 1; x <= palabra1.length;x++){
    
    reves = reves + palabra1[(palabra1.length-x)];
}
console.log(reves);