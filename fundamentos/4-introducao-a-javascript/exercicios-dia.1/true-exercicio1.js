// const a = 2;
// const b = 7;
// const c = 12;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);


// if (a > b) {
//     console.log('a é maior')
// }
// else {
//     console.log('b é maior')
// }

// if (a > b && a > c) {
//     console.log('a é maior')
// }
// else if (b > a && b > c) {
//     console.log('b é maior')
// }
// else {
//     console.log('c é maior')
// }

// if (a > 0) {
//     console.log('positive')
// } 
// else if (a === 0) {
//     console.log('zero')
// }
// else {
//     console.log('negative')
// }

// const a1 = 60;
// const a2 = 60;
// const a3 = 60;

// if (a1 < 180 && a1 > 1 && a2 < 180 && a2 > 1 && a3 < 180 && a3 > 1) {
//     console.log(true)
// } 
// else {
//     console.log(false)
// }

// const a = 90;
// const b = 80;
// const c = 70;
// const d = 60;
// const e = 50;
// const f = 49;

// * Utilize if/else para fazer um programa que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
//     * Porcentagem >= 90 -> A 
//     * Porcentagem >= 80 -> B 
//     * Porcentagem >= 70 -> C 
//     * Porcentagem >= 60 -> D 
//     * Porcentagem >= 50 -> E 
//     * Porcentagem < 50 -> F 
//     * O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100. 



// const nota1 = 120

// if (nota1 >= 90 && nota1 <= 100) {
//     console.log('A')
// }
// else if (nota1 >= 80 && nota1 <= 89) {
//     console.log('B')
// }
// else if (nota1 >= 70 && nota1 <= 79) {
//     console.log('C')
// }
// else if (nota1 >= 60 && nota1 <= 69) {
//     console.log('D')
// }
// else if (nota1 >= 50 && nota1 <= 59) {
//     console.log('E')
// }
// else if (nota1 > 0 && nota1 < 50) {
//     console.log('F')
// }
// else {
//     console.log('error')
// }

// const a = 3
// const b = 422
// const c = 7
// let par = false;

// console.log(par)

// if ((a % 2 === 0 || b % 2 === 0 || c % 2 === 0)) {
//     par = true;
// }

// console.log(par)


// const a = 2;
// const b = 3;
// const c = 538;
// let par = false;

// if ((a % 2 === 0 && b % 2 === 0 && c % 2 === 0)) {
//     par = true;
// }

// console.log(par)


// let total = (a / 2)
// let total2 = (b / 2)
// let total3 = (c / 2)


// if (a % 2 === 0) {
//     console.log('par');
// }
// else if (b % 2 === 0) {
//     console.log('par');
// }
// else if (c % 2 === 0) {
//     console.log('par');
// }
// else {
//     console.log('impar')
// }


// let a = 20;
// let b = 32;



// console.log(`a soma entre ${a} e ${b} é igual a ${a + b}`);
// console.log(`a subtraçao entre ${a} e ${b} é igual a ${a - b}`);
// console.log(`a divisao entre ${a} e ${b} é igual a ${a / b}`);
// console.log(`a multiplicaçao entre ${a} e ${b} é igual a ${a * b}`);
// console.log(`o resto entre ${a} e ${b} é igual a ${a % b}`);
// console.log(`a potencia entre ${a} e ${b} é igual a ${a ** b}`);

// Utilize if/else para fazer um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

// const x = 50;
// const y = 50;

// if (x > y) {
//     console.log(`maior numero é ${x}`);
// }
// else if (x === y) {
//     console.log(`eles sao iguais`);
// }

// else {
//     console.log(`maior numero é ${y}`);
// }


// se o cara tem mais de 65 voto opcional;
// se o cara tem entre 65 e 18 anos, voto obrigatorio;
// entre 17 e 16 anos, voto opcional;
// abaixo dos 16, nao vota;

// let idade = 200;


// if(idade < 0 || idade > 140) {
//     console.log(`digite idade valida`);
// }
// else if (idade > 65) {
//     console.log(`voto opcional`);
// }
// else if (idade <= 65 && idade >= 18) {
//     console.log(`voto obrigatorio`);
// }
// else if (idade <= 17 && idade >= 16) {
//     console.log(`voto opcional`);
// }
//  else {
//     console.log(`nao vota`);
//  }

 //Utilize if/else para fazer um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

// const a = 10;
// const b = 25;
// const c = 12;

// if (a > b && a > c) {
//     console.log(`a é o maior`);
// }
// else if (b > a && b > c) {
//     console.log(`b é maior`);

// }
// else {
//     console.log(`c é maior`);
// }

//Utilize if/else para fazer um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

// let parametro = 110;

// if (parametro < 0) {
//     console.log(`Negative`);

// }
// else if (parametro > 0) {
//     console.log(`Postive`);
// }
// else {
//     console.log(`zero`);
// }

//Utilize if/else para fazer um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.
//Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.
//Um ângulo será considerado inválido se não tiver um valor positivo.

// const a = 60;
// const b = 30;
// const c = 60;

// if (a < 0 || b < 0 || c < 0)
//     console.log(`nao é um triangulo`);
// else if (a + b + c === 180) {
//     console.log(`true`);
// }
// else {
//     console.log(`false`);
// }


// Utilize switch/case para fazer um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)

// peao - só para frente;
// torre - para frente e para o lado;
// bispo - nas diagonais;
// cavalo - em ele; 
// rainha -  nas diagonais, para frente e para os lados;
// rei - nas diagonais, para frente e para os lados;

// let pecaEscolhida = "rei";

// switch (pecaEscolhida) {
//     case "peao":
//         console.log(`se move só para frente`);
//         break;
//     case "torre":
//         console.log(`se move para frente e para os lados`);
//         break
//     case "bispo":
//         console.log(`se move nas diagonais`);
//         break
//     case "cavalo":
//         console.log(`se move em ele`);
//         break
//     case "rainha":
//         console.log(`se move nas diagonais, para frente e para os lados`);
//         break
//     case "rei":
//         console.log(`se move nas diagonais, para frente e para os lados`);
//         break

// default:
//         console.log(`digite uma peça valida`);
//         break;
// }


// Utilize if/else para fazer um programa que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

// let nota = 76;

// if (nota < 0 || nota > 100) {
//     console.log(`error`);
//     }
//     else if (nota >= 90){
//     console.log(`A`)
//     }
//     else if (nota >= 80){
//         console.log(`B`)    
//     }
//     else if (nota >= 70){
//         console.log(`C`)    
//     }
//     else if (nota >= 60){
//         console.log(`D`)    
//     }
//     else if (nota >= 50){
//         console.log(`E`)    
//     }
    
//     else {
//         console.log(`F`)
//     }

// Utilize if/else para fazer um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele deve retornar false.
// Bonus: use somente um if.

// const a = 12;
// const b = 23;
// const c = 43;

// if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
//     console.log(`true`);
// }
// else {
//     console.log(`false`);
// }

// Utilize if/else para fazer um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele deve retornar false.
// Bonus: use somente um if.

// const a = 12;
//  const b = 23;
//  const c = 43;

//  if (a % 2 === 1 || b % 2 === 1|| c % 2 === 1) {
//      console.log(`true`);
//  }
//  else {
//      console.log(`false`);
//  }

// Utilize if/else para escrever um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda, descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
// valorCustoTotal = valorCusto + impostoSobreOCusto;
// lucro = valorVenda - valorCustoTotal (lucro de um produto);

// const custoProduto = 10;
// const custoVenda = 20;


// if (custoProduto < 0) {
//     console.log(`error`);

// }
// else {
//     console.log(`O lucro é igual a ${ (custoVenda * 1000) - ((custoProduto * 1000) - (custoProduto * 0.2 ) ) } `);

// }

//Utilize if/else para fazer um programa que, dado um salário bruto, calcule o líquido a ser recebido.

// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR.

// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
// INSS (Instituto Nacional do Seguro Social)
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
// IR (Imposto de Renda)
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
// Exemplo: Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:

// O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
// Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
// Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
// R$ 2.670,00: salário com INSS já deduzido;
// 7.5%: alíquota de imposto de renda;
// R$ 142,80 parcela a se deduzir do imposto.
// Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
// O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
// Resultado: R$ 2.612,55.

// De olho na dica 👀: que tal identificar as alíquotas com variáveis de nomes explicativos?

let salario = 2670.00;
let salarioPrimeiroDesconto = 0;
let salarioFinal = 0;

if (salario < 0 || salario > 1000000000){
    console.log(`digite seu salario corretamente`);
}
else if (salario <= 1556.94) {
    salarioPrimeiroDesconto = salario - (salario * 0.08);
}
else if (salario >= 1556.95 && salario <= 2594.92){
    salarioPrimeiroDesconto = salario - (salario * 0.09);
}
else if (salario >= 2594.94 && salario <= 5189.82){
    salarioPrimeiroDesconto = salario - (salario * 0.11);
}
else {
   salarioPrimeiroDesconto = salario - 570.88
}

console.log(salarioPrimeiroDesconto)

if (salarioPrimeiroDesconto <= 1903.98) {
    salarioFinal = salarioPrimeiroDesconto
    
} 
else if (salarioPrimeiroDesconto > 1903.99 && salarioPrimeiroDesconto <= 2826.65) {
    salarioFinal = salarioPrimeiroDesconto - ((salarioPrimeiroDesconto * 0.075) - 142.80);
    
}
else if (salarioPrimeiroDesconto > 2826.66 && salarioPrimeiroDesconto <= 3751.05) {
    salarioFinal = salarioPrimeiroDesconto - ((salarioPrimeiroDesconto * 0.15) - 354.80);
}
else if (salarioPrimeiroDesconto > 3751.06 && salarioPrimeiroDesconto <= 4664.68) {
    salarioFinal = salarioPrimeiroDesconto - ((salarioPrimeiroDesconto * 0.225 ) - 636.13);
}
else {
    salarioFinal = salarioPrimeiroDesconto - ((salarioPrimeiroDesconto * 0.275) - 869.36);
}
        
console.log(salarioFinal)
    
