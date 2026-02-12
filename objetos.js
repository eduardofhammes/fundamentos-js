// criando objetos e interagindo com eles

const pessoa = {
    nome: 'Ana',
    idade: 26,
    temCNH: true
}

// adicionando sobrenome
pessoa.sobrenome = 'Paula'

console.log('Nome:', pessoa.nome)
console.log('Sobrenome:', pessoa.sobrenome)

const livro = {
    titulo: 'O Hobbit',
    autor: 'J. R. R. Tolkien',
    paginas: 310
}

livro.publicado = true
livro.idiomas = ['Inglês', 'Português', 'Espanhol']