/* como se comunican las funciones entre si */

/* las funciones se van a comunicar, en lugar de tener una gran función con 800 es recomendable
dividirla en pequeñas partes */

iniciarApp();

function iniciarApp(){
    console.log("Iniciando la App...");
    segundaApp();
}

function segundaApp (){
    console.log('desde la segunda App');
    usuarioAutenticado('Rafael');
}

function usuarioAutenticado (usuario){
    console.log(`validando usuario... `);
    console.log(`Usuario verificado con exito ${usuario}`);
}


