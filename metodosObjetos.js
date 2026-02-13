const pessoa = {
    nome: 'Eduardo',
    idade: 21,
    pets: ['Luke'],
    nacionalidade: 'Brasileiro'
}

// percorrer os atibutos do objeto
for(const propriedade in pessoa) {
    console.log('Atributo:', propriedade) // exibe o atributo
    console.log('Valor:', pessoa[propriedade]) // exibe o valor do atributo correesponde no loop
}

// pegar todos os atributos
const atributos = Object.keys(pessoa)

// pegar todos os valores dos atributos
const valores = Object.values(pessoa)

// mostra as entradas - chave/valores de cada atributo
const entradas = Object.entries(pessoa)


// exibindo todas as variáveis anteriores
console.log('Atributos:', atributos)
console.log('Valores:', valores)
console.log('Entradas (chave/valor):', entradas)