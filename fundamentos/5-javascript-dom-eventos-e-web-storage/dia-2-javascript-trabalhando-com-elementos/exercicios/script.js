const body = document.body

function createH1() {
    let titulo = document.createElement('h1');
   	titulo.innerHTML = 'Exercício - JavaScript DOM';
    body.appendChild(titulo);
}
createH1();