// 
const numero1 = 20;
const numero2 = "20";
const numero3 = 30;

//Revisar si 2 valores son iguales o diferentes
console.log("n1 = n3", numero1 == numero3);
console.log("n1 = n2", numero1 == numero2);

//Typeof
console.log(typeof(numero1));
console.log(typeof(numero2));

//Operador estricto (revisa valor y tipo de dato)
console.log("n1 === n2", numero1 === numero2);
// console.log("n1 + n2", typeof(numero1 + numero2)); //número + string es igual a string
// console.log("n2 + n1", typeof(numero2 + numero1));

//Diferente a
console.log("n1 != n3", numero1 != numero3);
console.log("n1 != n2", numero1 != numero2);
console.log("n1 != n2", numero1 !== numero2);
