const carrito = [
    { id: 1, producto: 'Libro' },
    { id: 2, producto: 'Camisa' },
    { id: 3, producto: 'Disco' },
];

for (let item of carrito) {
    console.log(item.producto);
}

let automovil = {
    modelo: 'Mustang',
    motor: '6.0',
    year: '1996',
    marca: 'Ford',
}

for (let car in automovil) {
    console.log(`${car}: ${automovil[car]}`);
}

//Realizar el siguiente script que pida el número filas y columnas y escriba una tabla, dentro de cada una de las celdas deberá escribir
//número consecutivo en orden descendente

//Realice un script que imprima 14 resultados aleatorios de una quiniela de 1 x 2


let max = 10;
for (let i = 1; i <= 14; i++) {

    let resultado = aleatorios(max);

    console.log(`resultado ${i}: `, resultado.a, "-", resultado.b);


}


function aleatorios(max) {
    const a = Math.floor(Math.random() * max);
    const b = Math.floor(Math.random() * max);
    
    return { a: a, b: b };

}
console.log(`*********************************`)
/*************************************************** */
// Version mejorada
// Función para generar un resultado aleatorio de un marcador de fútbol
function generarMarcador(max) {
    const a = Math.floor(Math.random() * (max + 1)); // Genera un número aleatorio entre 0 y max
    const b = Math.floor(Math.random() * (max + 1)); // Genera un número aleatorio entre 0 y max
    return { a, b };
}

// Definir el número máximo para los valores del marcador
const maxValor = 10;

// Generar y mostrar 14 resultados aleatorios de marcadores de fútbol
for (let i = 0; i < 14; i++) {
    const resultado = generarMarcador(maxValor);
    console.log(`Resultado ${i + 1}: ${resultado.a} - ${resultado.b}`);
}

