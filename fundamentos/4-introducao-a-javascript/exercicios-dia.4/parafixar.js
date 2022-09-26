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

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

  for ( let key in names) {
    console.log('Olá ' + names[key]);
  };

//   Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for (let key in car) {
    console.log(key, car[key]);
  };

  