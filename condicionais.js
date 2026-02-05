const idade = 19;

if(idade >= 18) {
    console.log('Você é maior de idade!')
}

else{
    console.log('Você é menor de idade!')
}

// operador ternário
idade >= 18 ? console.log('Maior de idade') : console.log('Menor de idade')


const notaAluno = 7;

if(notaAluno >= 9) {
    console.log('Excelente!')
}

else if(notaAluno >= 7){
    console.log('Bom!')
}

else if(notaAluno >= 4){
    console.log('Médio!')
}

else {
    console.log('Você não foi bem, vamos estudar!')
}

// operador ternário - menos indicado por envolver várias condições
notaAluno >= 9 ? console.log('excelente') :
    notaAluno >= 7 ? console.log('bom') :
        notaAluno >= 4 ? console.log('médio') : 
            console.log('ruim')