// criação de arrays em js

// criando array de frutas
const frutas = ['Uva', 'Banana', 'Kiwi', 'Maça', 'Morango']
// uva = 0
// morango = 4


console.log(frutas) // exibindo todas as frutas
console.log('Primeira fruta:', frutas[0]) // exibe a primeira fruta, no indice 0
console.log('Última fruta:', frutas[4]) // exibe a primeira fruta, no indice 0

console.log('Total de frutas:', frutas.length) // tamanho do array

frutas.push('Melão') // adicionando um item ao final
console.log('Total de frutas:', frutas.length) // tamanho do array após adicionar um item

console.log('Última fruta:', frutas[frutas.length - 1]) // acessando o último item, pegando o tamanho total e diminuindo 1 para chegar no último indice existente

frutas.splice(2, 1) // remove o item no indice 2, deletando apenas 1 item (o do indice 2)
console.log('Depois de remover', frutas)

// percorrendo o array e exibindo na posição i
for (let i = 0; i < frutas.length; i++) {
    console.log('Índice:', i, '-', frutas[i])
}

console.log('Usando forEach:')

// forEach - percorre cada fruta
// precisa receber um callback - arrowFunction utilizada, com parametros de indice e valor
frutas.forEach((indice, valor) => {
    console.log('Índice', indice, '-', valor)
})


console.log('Usando for of')
// for of - cada fruta dentro do array frutas
for (const fruta of frutas) {
    console.log('Fruta da vez:', fruta)
}