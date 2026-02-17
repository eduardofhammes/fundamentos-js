let eduardo1 = {
    nome: 'Eduardo',
    idade: 21,
    profissao: 'Desenvolvedor'
}

const eduardo2 = { ...eduardo1 } // spread de eduardo1, ou seja, eduardo2 será um objeto igual a eduardo1, com as mesmas propriedades

eduardo2.idade = 30 // alterando apenas a idade do objeto eduardo2

// exibindo os dois objetos
console.log(eduardo1)
console.log(eduardo2)

// atribuindo novos valores com spread de eduardo2 para eduardo1
eduardo1 = {
    // terá as mesmas propriedades, com alteração da propriedade profissao 
    ...eduardo2,
    profissao: 'Desenvolvedor Senior',
    possuiCNH: true
}

// exibindo os dois objetos
console.log(eduardo1)
console.log(eduardo2)


const { nome, ...restante } = eduardo1 // atribui a propriedade nome do objeto para uma variavel 'nome' e o restante das propriedades ficarão na propriedade restante

console.log(nome)
console.log(restante)