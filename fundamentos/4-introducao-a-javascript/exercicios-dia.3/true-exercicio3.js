// Utilize a estrutura de repetição for para escrever dois algoritmos: um que retorne a maior palavra desse array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];
let contador = 0;
let maior = '';
let menor = 0;
let recebePrimeira = array[0]

for (let index = 0; index < array.length; index += 1) {
    if (array[index].length > contador) {
       contador = array[index].length;
        maior = array[index];
    }
    
}

for (let index = 0; index < array.length; index += 1) {
    if (array[index].length < recebePrimeira.length) {
       menor = array[index].length;
        recebePrimeira = array[index];
    }
    
}



console.log(maior)
console.log(recebePrimeira)