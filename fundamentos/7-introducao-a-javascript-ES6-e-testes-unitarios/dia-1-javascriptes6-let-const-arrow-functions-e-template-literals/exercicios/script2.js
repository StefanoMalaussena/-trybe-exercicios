// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// const sortOddsAndEvens = () => {
//     oddsAndEvens[0] = 2;
//     oddsAndEvens[1] = 3;
//     oddsAndEvens[2] = 4;
//     oddsAndEvens[3] = 7;
//     oddsAndEvens[4] = 10;
//     oddsAndEvens[5] = 13;
//     return oddsAndEvens
// }
// console.log(`Os números ${sortOddsAndEvens()} se encontram ordenados de forma crescente!`);

// const oddsAndEvens = [13, 3, 4, 10, 7, 2]
// const sortOddsAndEvens = (array) => {
//     for (let index = 1; index < array.length; index += 1) {
//         for (let index2 = 0; index2 < index; index2 += 1) {
//             if (array[index2] > array[index]) {
//               let menorNumero = array[index2];
//                 array[index2] = array[index];
//                 array[index] = menorNumero;


//             }
//         }
//     }
//     return array;
// };
// console.log(sortOddsAndEvens(oddsAndEvens));


const oddsAndEvens = [13, 3, 4, 10, 7, 2];
// const xablau = oddsAndEvens.sort((a, b) => a - b);
console.log(`Os numeros ${oddsAndEvens.sort((a, b) => a - b)}`)
console.log(`Os numeros ${xablau}`)
