//longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'

//const longestWord = 'Antônio foi ao banheiro e não sabemos o que aconteceu' // retorna 'aconteceu

let longestWord = 'Antônio foi ao banheiro e não sabemos o que aconteceu'; // retorna 'aconteceu'
let array = [];
array = longestWord.split(' ');
let biggest = array[0];
for (let i = 0; i<array.length; i+=1){
  if(array[i].length>biggest.length){
    biggest = array[i];
  }
}
console.log(biggest);