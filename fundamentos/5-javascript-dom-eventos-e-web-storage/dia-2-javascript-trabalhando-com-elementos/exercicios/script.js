const body = document.body
let main = document.createElement('main');
let sectionCenter = document.createElement('section');
let sectionLeft = document.createElement('section');
let sectionRight = document.createElement('section');
let imagem = document.createElement('img')


function createH1() {
    let titulo = document.createElement('h1');
   	titulo.innerHTML = 'Exercício - JavaScript DOM';
		titulo.className = 'title'
    body.appendChild(titulo);
}
createH1();

function createMain() {
	main.className = 'main-content';
	body.appendChild(main);
}
createMain();
	
function createSection() {
	sectionCenter.className = 'center-content'
	main.appendChild(sectionCenter)
}
createSection()

function createP() {
	let paragrafo = document.createElement('p')
	paragrafo.innerHTML = 'Xablau'
	sectionCenter.appendChild(paragrafo)
}
createP()

function createSectionLeft() {
	sectionLeft.className = 'left-content'
	main.appendChild(sectionLeft)
}
createSectionLeft()

function createSectionRight() {
	sectionRight.className = 'right-content'
	main.appendChild(sectionRight)
}
createSectionRight()

function addImage() {
	imagem.src = 'https://picsum.photos/200'
	imagem.className = 'small-image'
	sectionLeft.appendChild(imagem)
}
addImage()

function createList() {
let ul = document.createElement('ul')
ul.id = 'ihul'
sectionRight.appendChild(ul)
let numbers = ['um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez']
for (let index in numbers){
let li = document.createElement('li');
li.innerHTML = numbers[index]
ul.appendChild(li)
}
}
createList()

function createH3() {
	for (let index = 1; index <= 3; index += 1) {
		let h3 = document.createElement('h3')
		h3.innerHTML = [index]
		h3.className = 'description'
		main.appendChild(h3)

	}

}
createH3()

main.removeChild(sectionLeft)
sectionRight.style.marginRight = 'auto'
main.style.backgroundColor = 'green'
let listaNaoOrdenada = document.getElementById('ihul')
listaNaoOrdenada.lastChild.remove()
listaNaoOrdenada.lastChild.remove()





