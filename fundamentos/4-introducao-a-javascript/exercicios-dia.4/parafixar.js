// let diasDaSemana = {
//   1: 'domingo',
//   2: 'segunda',
//   3: 'terça',
//   4: 'quarta',
//   5: 'quinta',
//   6: 'sexta',
//   7: 'sábado',
// };

// diasDaSemana.1; // SyntaxError: Unexpected number
// console.log(diasDaSemana['1']); // domingo

// Para fixar
// Vamos fazer alguns exercícios de fixação para consolidar os conhecimentos adquiridos! 

// Crie uma variável player e atribua um objeto contendo as variáveis listadas abaixo:


// let firstName = 'Marta';
// let lastName = 'Silva';
// let age = 34;
// let medals = { golden: 2, silver: 3 };

// let player = {
// firstName: 'Marta',
// lastName: 'Silva',
// age: 34,
// medals: { golden: 2, silver: 3 },
// };
// console.log('A jogadora ' + player.firstName + ' tem ' + player.age + ' anos');
// console.log('A jogadora ' + player.firstName + ' ' + player.lastName + ' possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalha de prata');

// Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

// let names = {
//     person1: 'João',
//     person2: 'Maria',
//     person3: 'Jorge',
//   };

//   for ( let key in names) {
//     console.log('Olá ' + names[key]);
//   };

// //   Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.

// let car = {
//     model: 'A3 Sedan',
//     manufacturer: 'Audi',
//     year: 2020
//   };

//   for (let key in car) {
//     console.log(key, car[key]);
//   };

// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

function soma (som1, som2, som3) {
  return (som1 + som2 + som3)
};

function subtracao (sub1, sub2) {
  return (sub1 - sub2)
};

function multiplicacao (mult1, mult2) {
  return (mult1 * mult2)
};

function divisao (div1, div2) {
  return (div1 / div2)
};

function modulo (mod1, mod2) {
  return (mod1 % mod2)
}

 console.log(soma (20.5, 3, 2));
// console.log(subtracao(20, 3));
// console.log(multiplicacao (20, 3));
// console.log(divisao (20, 3));
// console.log(modulo (20, 3));

// Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

// function maiorNumero (valor1, valor2) {
//   if (valor1 > valor2) {
//   return (valor1 + ' é o maior número.')
//   }
//   else if (valor1 === valor2) {
//   return ('Os números sao iguais.')  
//   }
//   else {
//     return (valor2 + ' é o maior número.')
//   }
// }
// console.log(maiorNumero(34, 23));

// Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

// function maiorValor (valor1, valor2, valor3) {
//   if (valor1 > valor2 && valor1 > valor3 ) {
//     return (valor1 + ' é maior.')
    
//   } 
//   else if (valor2 > valor1 && valor2 > valor3) {
//     return (valor2 + ' é maior.')
//   }
//   else if (valor3 > valor1 && valor3 > valor2) {
//     return (valor3 + ' é maior.')
//   }
//   else {
//     return ('Os números sao iguais')
//   }
  
// }

// console.log(maiorValor(89,89,89))

// Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

// function positiveOrNegative(par1) {
//   if (par1 > 0) {
//     return (par1 + ' is positive')
//   }
//   else if (par1 < 0) {
//     return (par1 + ' is negative')
//   }
//   else {
//     return ('zero')
//   }
  
// }
// console.log(positiveOrNegative(34));

// Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.
// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
// Um ângulo será considerado inválido se não tiver um valor positivo.

// function triangulo (ang1, ang2, ang3) {
//   if (ang1 < 0 || ang2 < 0 || ang3 < 0) {
//     return ('Isso nao é um tringulo.')
//   } 
//   else if (soma(ang1, ang2, ang3) === 180) {
//     return (true)
//   }
//   else {
//     return (false)
//   }
// }

// console.log(triangulo(80, 50, 50));

