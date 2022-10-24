const botaoLimpar = document.getElementById('limpar')

function submitInfos() {
    const botaoSubmit = document.getElementById('enviar')
    botaoSubmit.addEventListener('click', submitAction)
} 
function submitAction(event) {  
    event.preventDefault()
    //event.target.submit();
}

submitInfos();