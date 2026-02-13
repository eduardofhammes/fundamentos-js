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
    paginas: 310
}

livro.publicado = true
livro.idiomas = ['Inglês', 'Português', 'Espanhol']

// adicionando itens ao array idiomas do objeto livro
livro.idiomas.push('Mandarim')
livro.idiomas.push('Francês')

console.log('Livro antes:', livro)

// deletar propriedade de um objeto
delete livro.paginas
console.log('Livro agora:', livro)

// acessando uma propridade do objeto - autor
console.log('Autor do livro:', livro['autor'])
console.log('Editora do livro:', livro['editora'])

// cria objeto de autor
const autor = {
    nome: 'J R R Tolien',
    nacionalidade: 'Britânico',
    idade: 98,
    livros: [livro]
}

console.log('Autor', autor)

// atributo o objeto autor para a propriedade autor do livro
livro.autor = autor

console.log(livro)

// acessando o nome do autor, que agora é um objeto e possui as propriedades nome, nacionalidade e idade
livro.autor.nome
livro.autor.nacionalidade