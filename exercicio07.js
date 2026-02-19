// 1. Destructuring em objetos
// Crie um objeto com nome, idade e email. Use destructuring para extrair essas informações em variáveis separadas.

const pessoa = {
    nome: 'Eduardo',
    idade: 21,
    email: 'eduardo@email.com'
}

const { nome, idade, email } = pessoa

console.log('1. Nome:', nome)
console.log('1. Idade:', idade)
console.log('1. E-mail:', email)

// 2. Destructuring em arrays
// Crie um array com 3 linguagens de programação. Use destructuring para criar variáveis ling1, ling2 e ling3.

const linguagensDeProgramacao = ['Javascript', 'Python', 'Go']

const [ling1, ling2, ling3] = linguagensDeProgramacao

console.log('2. Linguagem 1:', ling1)
console.log('2. Linguagem 2:', ling2)
console.log('2. Linguagem 3:', ling3)

// 3. Rest operator em função
// Crie uma função que receba vários números como parâmetros usando o operador rest (...).
// Utilize um laço for para somar todos os valores recebidos e retorne o total.

function somarTudo(...numeros) {
    let soma = 0

    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i]
    }

    return soma
}

const resultado = somarTudo(2, 4, 6, 2)
console.log('3. ', resultado)

// 4. Spread operator com arrays
// Crie dois arrays de frutas e combine-os usando o operador spread.

const frutas1 = ['Uva', 'Banana']
const frutas2 = ['Kiwi', 'Maçã', 'Tomate']

const frutasTotais = [...frutas1, ...frutas2]

console.log('4. Todas as frutas:', frutasTotais)

// 5. Spread operator com objetos
// Crie dois objetos: um com nome e outro com idade. Combine-os em um terceiro objeto usando spread.

const pessoa1 = {
    nome: 'Lucas'
}

const pessoa2 = {
    idade: 32
}

const pessoa3 = { ...pessoa1, ...pessoa2 }

console.log('5.', pessoa3)


// 6. Função com parâmetro default
// Crie uma função que recebe um nome e imprime "Olá, [nome]". Se o nome não for passado, use "visitante" como valor padrão.

function saudacao(nome = "visitante") {

    console.log(`6. Olá, ${nome}!`);

}

saudacao(); // Olá, visitante! 

saudacao("Marcos"); // Olá, Marcos! 


// 7. Trabalhando com datas
// Crie uma variável com a data atual e exiba o dia, mês e ano formatados.

const data = new Date()

console.log('7. Data formatada em pt-br:', data.toLocaleString('pt-BR'))

// 9. Objeto com função construtora
// Crie uma função construtora chamada Livro que receba titulo e autor como parâmetros e os armazene em propriedades do objeto.
// Em seguida, crie dois objetos Livro usando essa função.

function Livro(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
}

const livro1 = new Livro("Dom Casmurro", "Machado de Assis");
const livro2 = new Livro("1984", "George Orwell");

console.log('9.', livro1);
console.log('9.', livro2);


// 10. Método no objeto
// Adicione à função construtora Livro uma função chamada descrever, que retorna uma frase com o título e o autor do livro, usando concatenação de strings.

function Livro(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
    this.descrever = function () {
        return "O livro " + this.titulo + " foi escrito por " + this.autor + ".";
    };
}

const livro = new Livro("O Hobbit", "J. R. R. Tolkien");
console.log('10.', livro.descrever());