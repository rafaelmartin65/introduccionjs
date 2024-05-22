/* funciones que retornan valores */
/* actualmente hemos tenido funciones que envían datso a la consola, ya cuando
veamos el DOM algunas funciones van al validar formularios y seguramente ejecutaran el código ahí,
pero también tendremos funciones que retornan valores para pasarlos a otras funciones */

function sumar(a, b){
    console.log( "sumar a + b" );
    return a + b;
}

const resultado = sumar(1 , 2);
console.log(resultado);

// ejemplo más avanzado
let total = 0;
function agregarCarrito(precio){
    return total += precio;
}

function calculaImpuesto(total){
    return 1.15 * total;
}

total = agregarCarrito(200);
total = agregarCarrito(300);
total = agregarCarrito(400);

console.log(total);

const totalPagar = calculaImpuesto(total);
console.log(`El total a pagar es de ${totalPagar}` );

