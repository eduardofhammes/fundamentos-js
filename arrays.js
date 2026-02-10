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