const arr = []

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})
 

function pergunta() {
  readline.question('Digite uma propriedade de CSS: ', (propriedade) => {
    if (propriedade.toUpperCase() === 'SAIR') { 
      readline.close()
      const result = arr.sort()
      console.log('Lista de Propriedades CSS:')
      for(let i in result) {
        console.log(`- ${result[i]}`)
      }
    }else if(propriedade === '') { 
      console.log('Valor inválido! Por favor') 
      pergunta()
    }else {  
      arr.push(propriedade)
      pergunta() 
    } 
  })
}

pergunta() 




