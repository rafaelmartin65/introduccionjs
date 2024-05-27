//Veamos lo que es Break y Continue, el break cortará la ejecución del loops, mienras que el continue
//nos permitirá interceptar digamos un elemento y continuar con su ejecución

for(let i = 0; i <= 10; i++){
    if(i == 5){
        console.log(`Estamos en el 5 ..FIN`);
        break;
    }
    console.log(`Número: ${i}`);
}


for(let i = 0; i <= 10; i++){
    if(i == 5){
        console.log(`Estamos en el 5 ..Continuar`);
        continue;
    }
    console.log(`Número: ${i}`);
}

// En que casos debemos utilizar el continue
const carrito = [
    {nombre: 'Monitor 20 pulgadas', precio:300},
    {nombre: 'Televiion 50 pulgadas', precio: 200},
    {nombre: 'Tablet', precio: 300, descuento: true},
    {nombre: 'Audifonos', precio: 200},
    {nombre: 'Teclado', precio: 50, descuento: true},
    {nombre: 'Movil', precio: 500}
    
]

for (let i = 0; i < carrito.length; i++){
    if(carrito[i].descuento == true){
        console.log(`El articulo ${carrito[i].nombre} tiene descuento`);
        continue;
    }
    console.log(carrito[i].nombre);
}

for (let i = 0; i <= 50; i++){
    if(i % 3 == 0 && i % 5 == 0 ){
        console.log(`FizzBuzz ${i}`);
    }else if( i % 3 == 0){
        console.log(`Fizz ${i}`);
    }else if(i % 5 == 0){
        console.log(`Buzz ${i}`);
    }else{
        console.log(` ${i}`);
    }
}

// Version mejorada
console.log(`************* Version mejorada ****************`)
for (let i = 1; i <= 50; i++) {
    let output = '';

    if (i % 3 === 0) {
        output += 'Fizz';
    }

    if (i % 5 === 0) {
        output += 'Buzz';
    }

    if (output === '') {
        output = ` ${i}`;
    } else {
        output += ` ${i}`;
    }

    console.log(output);
}

console.log('*****************  Opción 3  operador ternario *************************')
for (let i = 1; i <= 50;) console.log( (++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i);