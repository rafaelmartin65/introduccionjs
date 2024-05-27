//Algunas veces vas a desear revisar si se cumple más de una condición

let rol = 'ADMIN';
if (rol === 'ADMIN'){
    console.log('El usuario puede editar elminar y consultar toda la información');
}else if( rol = 'EDITOR') {
    console.log('El usuario sólo puede editar sus registros');
}else{
    console.log('El usuario es invitadop, sólo puede consultar la información');
}

//El problema del else if es que si agregas multiples
//llegan a ser complejos de leer



