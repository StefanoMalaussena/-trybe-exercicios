// passo 1 - criar uma function que gera numeros aleatorios de 1 a 5.
const numerosAleatorios = () =>  Math.ceil(Math.random() * 5);
   
// passo 2 - criar uma function que compare o parametro (numeros do bilhiete) da hof com os numeros gerados pela function do passo 1.
const comparador = (numeroApostado, numeroAleatorio) => {
    console.log(numeroAleatorio);
    console.log(numeroApostado);
  if (numeroAleatorio === numeroApostado){
  return 'Parabéns você ganhou'
  }
  else {
  return  'perdeu playboy'
  }

}
console.log(comparador(5, numerosAleatorios()));

// passo 4 - O retorno da HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns você ganhou”).

// const sorteio = (numeroApostado) => {
// let resultado = comparador(numerosAleatorios(), numeroApostado);
// console.log(numerosAleatorios());
// console.log(numeroApostado);
// return resultado;
// };
// console.log(sorteio(5));



// const numberChecker = (myNumber, number) => myNumber === number;
// const lotteryResult = (myNumber, callback) => {
//   const number = Math.floor((Math.random() * 5) + 1);
//   return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
// };
// console.log(lotteryResult(2, numberChecker));