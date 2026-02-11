//1. Função de saudação
//Crie uma função chamada saudacao que exibe a mensagem "Olá! Seja bem-vindo(a)!" ao ser chamada.

function saudacao() {
    console.log('1. Olá! Seja bem-vindo(a)!')
}

saudacao()

//2. Função com parâmetros
//Crie uma função apresentarPessoa(nome, idade) que exibe no console: "Olá, meu nome é [nome] e tenho [idade] anos."

function apresentarPessoa(nome, idade) {
    console.log('2. Olá, meu nome é', nome, 'e tenho', idade, 'anos.')
}

apresentarPessoa('Eduardo', 21)

//3. Cálculo de IMC
//Crie uma função chamada calcularIMC que receba dois parâmetros: peso e altura.
//A função deve calcular o IMC utilizando a fórmula:

//IMC = peso / (altura * altura)

//A função deve retornar o valor do IMC.
//Depois, utilize o retorno da função para exibir no console uma mensagem com o resultado.

function calcularIMC(peso, altura) {
    return peso / (altura * altura)
}

const resultado = calcularIMC(80, 1.70)
console.log('3. Seu IMC é de:', resultado)

//4. Verificar aprovação
//Crie uma função verificarAprovacao(nota) que retorna "Aprovado" se nota >= 7 ou "Reprovado" caso contrário.

function verificarAprovacao(nota) {
    if (nota >= 7) {
        return 'Aprovado'
    } else {
        return 'Reprovado'
    }
}

const avaliacaoAluno = verificarAprovacao(7)
console.log('4. Você foi:', avaliacaoAluno)

//5. Número par ou ímpar
//Crie uma função ehPar(numero) que retorna true se o número for par e false se for ímpar. Teste a função com diferentes valores.

function ehPar(numero) {
    if (numero % 2 == 0) {
        return true
    } else {
        return false
    }
}

const numero = ehPar(-2)
console.log('5.', numero)

//6. Função soma
//Crie uma função que recebe dois números e retorna a soma deles. Exiba o resultado no console com uma frase completa.

function soma(num1, num2) {
    return num1 + num2
}

const resultadoSoma = soma(3, 54)
console.log('6. A soma é:', resultadoSoma)

//7. Reutilizando código
//Reescreva o exercício da calculadora de troco utilizando uma função chamada calcularTroco.
//A função deve receber dois parâmetros: valorCompra e valorPago.

//A função deve:

//calcular o valor do troco
//retornar o valor calculado
//Depois, utilize o retorno da função para exibir o valor do troco no console.

function calcularTroco(valorCompra, valorPago) {
    if (valorPago > valorCompra) {
        return valorPago - valorCompra;
    }
    else {
        return 'Não há troco a ser devolvido'
    }
}

const troco = calcularTroco(25, 26)
console.log('7.', troco)

//8. Arrow function
//Transforme a função do exercício 6 em uma arrow function com sintaxe reduzida.

const troco2 = (valorCompra, valorPago) => valorPago > valorCompra ? valorPago - valorCompra : 'Não há valor a ser devolvido'

console.log('8.', troco2(30, 30))

//9. Callback simples
//Crie uma função executarAcao(acao) que recebe uma função como parâmetro e a executa. Teste passando uma função que imprime "Executando ação!".

function acao() {
    console.log('Executando ação!')
}

function executarAcao(minhaFuncao) {
    minhaFuncao();
}

executarAcao(acao)