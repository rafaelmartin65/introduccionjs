//Cuando tienes multiples condiciones por revisar, una forma fácil es 
//usando el switch

const metodoPago = "tarjeta";

switch (metodoPago){
    case 'efectivo': 
        console.log(`pagaste con ${metodoPago}`);
        break;
    case 'tarjeta':
        console.log(`pagaste en ${metodoPago}`);
        break;
    case 'cheque':
        console.log(`pagaste en ${metodoPago}`);
        break;
    default:
        console.log(`No has pagado`);
        break;
}

//Los switch suelen ejecutar funciones, no solamente console.log también pueden tener 2 condiciones en un mismo if

