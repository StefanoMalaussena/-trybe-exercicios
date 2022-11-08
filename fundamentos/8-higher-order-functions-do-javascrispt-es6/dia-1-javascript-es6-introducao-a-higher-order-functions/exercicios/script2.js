
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const retornaPontuacao = (gabarito, respostas) => {
if (gabarito === respostas) {
    return 1;
} else if (gabarito === 'N.A') {
    return 0;
} else {
    return -0,5;
}
}; 

const corretorAutomatico = (gabarito, respostasAluno, func) => {
    let pontuacao = 0;
    for (let index = 0; index < respostasAluno.length; index += 1) {
    let avaliador = func(gabarito[index], respostasAluno[index])
        pontuacao += avaliador
    }
    return `Pontuação final = ${pontuacao}`
};
    


console.log(corretorAutomatico(RIGHT_ANSWERS, STUDENT_ANSWERS, retornaPontuacao));






