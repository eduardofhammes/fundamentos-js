// 1. Lista de nomes
// Crie um array com 5 nomes. Use for para imprimir cada nome no console, um por linha.

const nomes = ['João', 'Maria', 'Alice', 'Sérgio', 'Juca']

for (let i = 0; i < nomes.length; i++) {
    console.log('1. ', nomes[i])
}

// 2. Adicionar e remover itens
// Comece com um array de frutas. Adicione uma nova fruta ao final com push() e remova a primeira com shift(). Mostre o array antes e depois.

const frutas = ['Maracujá', 'Uva', 'Laranja']
console.log('2. Array inicial:', frutas)

frutas.push('Maça')
console.log('2. Array atual:', frutas)

frutas.shift(1)
console.log('2. Array ao final', frutas)

// 3. Contar itens do array
// Crie um array com nomes de cidades e exiba no console a quantidade total de itens usando .length.

const cidades = ['Lajeado', 'Porto Alegre', 'Encantado', 'Venâncio Aires']
let totalCidades = 0

for (let i = 0; i < cidades.length; i++) {
    totalCidades++
}

console.log('3. O total de cidades é de:', totalCidades)

// 4. Somar todos os números
// Crie um array com 10 números. Use for para somar todos os valores e mostrar o total no final.

const somarNumeros = [1, 3, 5, 6, 7, 2, 6, 8, 9, 6]
let numerosSomados = 0

for (let i = 0; i < somarNumeros.length; i++) {
    numerosSomados += somarNumeros[i]
}

console.log('4. O total somando todos os valores do array é de:', numerosSomados)

// 5. Média de notas
// Crie um array com 4 notas. Some os valores e calcule a média, exibindo uma mensagem de "Aprovado" ou "Reprovado" com base na média >= 7.

const notas = [7, 7, 7, 8]
let somaNotas = 0

for (let i = 0; i < notas.length; i++) {
    somaNotas += notas[i]
}

const mediaFinal = somaNotas / notas.length

mediaFinal >= 7 ? console.log('5. Aprovado!') : console.log('5. Reprovado!')


// 6. Mensagens personalizadas com forEach
// Crie um array com nomes de usuários. Use forEach para imprimir "Olá, [nome]!" para cada um.

const usuarios = ['Bellinha224', 'Duduzin231', 'user3', 'MacacoDoido']

usuarios.forEach((valor) => {
    console.log('6. Olá,', valor, '!')
})


// 7. Descontos com map
// Crie um array com preços de produtos. Use map para aplicar 10% de desconto em cada um e mostre os preços com desconto.

const precoProdutos = [5.5, 76.9, 55, 52.99]

const precoProdutosDesconto = precoProdutos.map((precoProdutos) => {
    return precoProdutos - precoProdutos * 0.1
})

for (let i = 0; i < precoProdutosDesconto.length; i++) {
    console.log('7. Preço item', i, '-->', precoProdutosDesconto[i])
}

// 8. Filtrar valores altos
// Crie um array com idades. Use filter para retornar apenas as idades maiores ou iguais a 18 e exiba o resultado.

const idades = [77, 86, 43, 16, 18, 32, 21, 53, 56, 16]

const idadesMaioridade = idades.filter((idades) => {
    return idades >= 18
})

console.log('8. Idades com maioridade:', idadesMaioridade)

// 9. Simulando carrinho de compras
// Crie um array com os preços de produtos em um carrinho de compras.
// Utilize um laço for ou for...of para calcular o valor total da compra.
// 
// Em seguida, aplique um desconto de 20% sobre o total e exiba o valor final no console.


let precosProdutosCarrinho = [55, 32, 66, 54, 55, 12, 14.99]
let valorTotal = 0

for (const precoProdutosCarrinho of precosProdutosCarrinho) {
    valorTotal += precoProdutosCarrinho
}

console.log('9. O valor é de:', valorTotal)


let precoFinalComDesconto = valorTotal - valorTotal * 0.2
console.log('9. O valor final com 20% de desconto é de:', precoFinalComDesconto)

// 10. Lista de tarefas
// Crie dois arrays:
// 
// um array com nomes de tarefas
// outro array com valores booleanos indicando se a tarefa foi concluída (true ou false)
// Utilize o método filter para criar um novo array contendo apenas as tarefas que não foram concluídas.
// Exiba a lista de tarefas pendentes no console.

const tarefas = ['Arrumar a casa', 'Fazer a cama', 'Varrer a calçada']
const tarefasFeitas = [false, true, false]

const tarefasIncompletas = tarefas.filter((indice, index) => {
    return tarefasFeitas[index] === false
})

console.log('10. Tarefas incompletas:', tarefasIncompletas)