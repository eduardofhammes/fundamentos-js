// 1. Criando um objeto pessoal
// Crie um objeto com seu nome, idade e profissão.
// 

const pessoa = {
    nome: 'Eduardo',
    idade: 21,
    profisssao: 'Dev'
}

// 2. Acessando propriedades
// Acesse e exiba o valor da propriedade "nome" no console.

console.log(pessoa.nome)

// 3. Atualizando valores
// Modifique a propriedade "idade" com um novo valor.

pessoa.idade = 23

// 4. Adicionando uma nova propriedade
// Adicione ao objeto uma nova propriedade chamada "cidade".

pessoa.cidade = 'Lajeado'

// 5. Função com objeto
// Crie uma função que receba um objeto pessoa contendo as propriedades nome, idade e profissao.
// A função deve retornar uma frase montada com concatenação de strings, exibindo os dados da pessoa.

function recebeObjeto(objeto) {
    return console.log('5.', objeto)
}

recebeObjeto(pessoa)

// 6. Lista de pessoas
// Crie um array com 3 objetos, cada um representando uma pessoa com nome e idade.

const pessoas = [

    { nome: "Ana", idade: 17 },

    { nome: "Carlos", idade: 22 },

    { nome: "Mariana", idade: 15 }

];

// 7. Filtrando maiores de idade
// Percorra o array e exiba apenas os nomes das pessoas com 18 anos ou mais.

for (let p of pessoas) {

    if (p.idade >= 18) {

        console.log(`${p.nome} é maior de idade.`);

    }

}

// 8. Objeto com método
// Crie um objeto chamado usuario com as propriedades nome e saudacao.
// A propriedade saudacao deve ser uma função que imprime no console uma mensagem fixa, utilizando o nome armazenado no objeto por acesso direto à propriedade.

const usuario = {
    nome: "Beatriz",
    saudacao: function () {
        console.log("Olá, eu sou " + usuario.nome);
    }
};

usuario.saudacao();
// 9. Listando propriedades com for...in
// Use um laço for...in para listar todas as propriedades e seus valores do objeto pessoal criado no exercício

// 9. Listando propriedades com for...in 

for (let chave in pessoa) {

    console.log(`${chave}: ${pessoa[chave]}`);

}

// 10. Cálculo de compra
// Crie um objeto produto com preco e quantidade, e calcule o valor total da compra(preco * quantidade).

const produto = {

    preco: 25,

    quantidade: 4

};

const valorTotal = produto.preco * produto.quantidade;

console.log(`Valor total da compra: R$${valorTotal}`); 
