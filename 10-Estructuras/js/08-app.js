// Buenas prácticas con el if


const autenticado = true;
//Mala práctica
if(autenticado == true){
    console.log(`El usuario está autenticado --> mala prática del uso del if`);
}

if(autenticado){
    console.log(`El usuario está autenticado --> buena práctica en el uso del if, no es necesario el uso de == true`);
}


//también muchas personas escriben if pensando que se podrán ejecutar 2 condiciones el mismo tiempo
//el if solo va a ejecutar la primera que se cumpla
const puntaje = 500;
if(puntaje > 300){
    console.log(`Buen puntaje...  felicidades`);

}else if(puntaje > 400){
    console.log(`Excelente esfuerzo`);
}else{
    console.log(`No sabría decirte, pero esta muy hablado el `);
}

