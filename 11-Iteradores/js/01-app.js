//Algunas veces vas a desear ajecutar tu código hasta que una condición se cumpla o se deje de cumplir
//los for Loops tienen esa característica, se ejecutan hast aque el código deja de cumplir esa condición

for (let x = 0 ; x <= 10; x++){
    console.log(`número -> ${x}`);
}

console.log(`*** Números pares e impares ***`);
for (let x = 0; x <= 20; x++ ){
    if(x % 2 == 0){
        console.log( `Número par => ${x}`);
    }else{
        console.log( `Número impar => ${x}`);
    }
}


console.log(`*** Números pares e impares usando funciones ***`);
function determinarParidad(numero) {
    return numero % 2 === 0 ? 'par' : 'impar';
}

for (let x = 0; x <= 20; x++) {
    const tipo = determinarParidad(x);
    console.log(`Número ${tipo} => ${x}`);
}
