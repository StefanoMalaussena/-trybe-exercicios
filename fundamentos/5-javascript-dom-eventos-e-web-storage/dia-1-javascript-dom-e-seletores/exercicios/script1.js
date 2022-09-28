




function modificaParagrafo() {
    document.getElementsByTagName('p')[1].innerText = 'xablau'
}
modificaParagrafo();

function modificaCorQuadradoGrande() {
  document.getElementsByClassName('main-content')[0].style.backgroundColor = 'rgb(76,164,109)'
}
modificaCorQuadradoGrande();

function modificaCorQuadradoPequeno(){
    document.getElementsByClassName("center-content")[0].style.backgroundColor = 'white'
}
modificaCorQuadradoPequeno();

function corrigeTitulo() {
    document.getElementsByTagName('h1')[0].innerText = 'Exercício - JavaScript'
}
corrigeTitulo();

function capitalLetter() {
   let textoErrado = document.getElementsByTagName('p')[0]
   textoErrado.innerText = textoErrado.innerText.toUpperCase();
}
capitalLetter();

 
function retornaConteudoTagsP() {
    let tagsP = document.getElementsByTagName("p");
    for (let index = 0; index < tagsP.length; index += 1) {
        console.log(tagsP[index].innerText);
        
    }
}
retornaConteudoTagsP();