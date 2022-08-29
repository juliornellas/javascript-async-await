function makeRequest(info){
    return new Promise((resolve, reject) => {
        console.log(`Analisando o candidato: ${info}`)
        if(info === 'curriculo1'){
            resolve('Aprovado para vaga')
        }else{
            reject('Infelizmente voce nao foi o escolhido')
        }
    })
}

function processRequest(response){
    return new Promise((resolve, reject) => {
        console.log('A resposta está sendo processada...')
        resolve(`Ìnformacao: ${response}`)
    })
}

// makeRequest('curriculo2')
// .then( res => {
//     console.info('Resposta recebida')
//     return processRequest(res)
// })
// .then( processado => {
//     console.info('Parabéns a vaga é sua!')

//     console.log(processado)
// })
// .catch( erro => {
//     console.log(erro)
// })

async function candidatos(){
    try {
        const resposta1 = await makeRequest('curriculo2')
        console.log('Solicitação recebida')
    
        const resposta2 = await processRequest(resposta1)
        console.log('Resultado final:', resposta2)    
    } catch (error) {
        console.log(error)
    }
}

candidatos()