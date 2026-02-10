// HOF -> Higher-Order Function === função que recebe outra função como parametro

function calcular(numero1, numero2, operacao) {
    return operacao(numero1, numero2)
}

function soma(num1, num2) {
    return num1 + num2
}

function divisao(num1, num2) {
    return num1 / num2
}

// executando a soma entre 8 e 3, passando a funcao soma como parametro operacao
const resultadoSoma = calcular(3, 8, soma) // soma é um callback 
console.log('Resultado da soma:', resultadoSoma)

// executando a divisao entre 4 e 2, passando a funcao divisao como parametro operacao
const resultadoDivisao = calcular(4, 2, divisao) // divisao é um callback 
console.log('Resultado da divisão:', resultadoDivisao)