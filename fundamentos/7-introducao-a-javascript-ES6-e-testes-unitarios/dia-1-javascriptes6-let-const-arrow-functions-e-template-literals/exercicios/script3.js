// const factorial = (numero) => {
//     let resultado = 1;
//     for (let index = 1; index <= numero; index += 1) {
//        resultado *= index;
//     };
//     return resultado
// };
// factorial();
// console.log(factorial(4));

const factorial = (numero) => numero > 1 ? numero * factorial(numero - 1) : 1;
console.log(factorial(150));


