const inputName = document.getElementById('txt-name')
const btnName = document.getElementById('btn-name')
const resultaName = document.querySelector('.result-name ul')

btnName.addEventListener('click', nameClick)

function nameClick(event){
    event.preventDefault()
    const nome = inputName.value
    buscaName(nome)
}

function buscaName(nome) {
    fetch(`https://servicodados.ibge.gov.br/api/v2/censos/nomes/${nome}`)
    .then(response => response.json())
    .then(body => {
        body.map((item) => {
         item.res.map((res)=>{
            console.log(res)
            const periodo = res.periodo.replace(/\[/g,'')
            const frequencia = res.frequencia

            const pf = `${periodo} - ${frequencia}`
            const crt = document.createElement('li') // cria elemento li
            const textnode= document.createTextNode(pf) // cria texto para colocar no li
            crt.appendChild(textnode)  // insere o texto no li
            resultaName.appendChild(crt)


           

            
         })

        })
    })

    }
    
    

     


  


