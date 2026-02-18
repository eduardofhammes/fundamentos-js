const pessoa = {
    nome: 'Nathália',
    idade: 18,
    profissao: 'Estudante'
}

//console.log(pessoa.nome)
// console.log(pessoa.idade)

const { nome, idade } = pessoa
console.log(nome)
console.log(idade)

// criando função de saudacao, que recebe apenas a propriedade nome de um objeto, como podemos identificar por { nome }
function saudacao({ nome, idade }) {
    console.log('Olá,', nome)
    if (idade > 17) {
        console.log('Você já pode tirar sua CNH!')
    }
}

saudacao(pessoa)

const frutas = ['Uva', 'Banana']

const [primeira, segunda] = frutas
//const primeira = frutas0] --- mesma coisa da linha acima
//const segunda = frutas[1] --- mesma coisa da linha acima