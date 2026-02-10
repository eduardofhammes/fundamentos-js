// testando funções

// function saudacao(nome) {
//    console.log('Olá,', nome)
// }

// arrow function
// const saudacao = (nome) => {
//     console.log('Vida longa e próspera,', nome)
// }

// arrow function v2 - usar apenas quando tiver só um parametro
const saudacao = nome => console.log('Olá,', nome)

saudacao('Eduardo')
saudacao('Jéssica')
saudacao('Nathália')

// function calcularDobroDeUm(numero){
//     return numero * 2
// }

// const calcularDobroDeUm = (numero) => {
//     return numero * 2
// }

// arrow function - não precisa do return em arrow function, será retornado por padrão
const calcularDobroDeUm = numero => numero * 2

const numeroDobrado = calcularDobroDeUm(5)
console.log('O dobro de 5 é', numeroDobrado)