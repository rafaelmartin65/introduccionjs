// El operador OR revisa que se cumpla una u otra condición

let efectivo = 300;
let credito = 400;
let disponible = efectivo + credito;
let totalCarrito = 700;

if(efectivo > totalCarrito || credito > totalCarrito){
    console.log(`Puedes pagar con efectivo o credito`);
}else if(disponible >= totalCarrito){
    console.log(`Puedes pagar con ambos efectivo y credito`);
}else{
    console.log(`No tienes disponble para pagar`);
}

