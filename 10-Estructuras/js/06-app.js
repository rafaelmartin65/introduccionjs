//Veamos que son el Operador && 
// El operador && revisa que se cumplan ambas o todas las condiciones

const usuario = false;
const puedePagar = true;

if (usuario && puedePagar){
    console.log(`Su pedido se tramitó con éxito`);

}else{
    console.log(`Hubo un error con su pago`);
}

