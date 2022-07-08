const inputName = document.getElementById('txt-name')
const btnName = document.getElementById('btn-name')
const resultaName = document.querySelector('.result-name')

btnName.addEventListener('click', nameClick)

function nameClick(event){
    event.preventDefault()
    const nome = inputName.value
    buscaName(nome)
}

function buscaName(nome) {
    fetch(`https://servicodados.ibge.gov.br/api/v2/censos/nomes/${nome}`)
    .then(response => response.text())
    .then(body => {
      resultaName.innerText = body;
    })
  }


  var intervaloAnosNome = [
    {'30': null},
    {'30-40': null},
    {'40-50': null},
    {'50-60': null},
    {'60-70': null},
    {'70-80': null},
    {'80-90': null},
    {'90-200': null},
    {'200-210': null},
  ]