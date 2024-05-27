//  https://leetcode.com/problems/fizz-buzz/description/


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
for (let i = 1; i <= 100; i++) {
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
for (let i = 1; i < 100;) console.log( (++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i);