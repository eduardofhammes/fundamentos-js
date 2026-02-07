// 1. Contador de 1 a 10
// Use um for para mostrar no console os números de 1 até 10, um por linha.

for(let i = 1; i <= 10; i++){
    console.log('1. Número atual ->', i)
}

// 2. Soma de 1 a 100
// Some todos os números de 1 a 100. Mostre o resultado no final com uma mensagem explicativa.

let numero = 1
let totalUmAteCem = 0

while(numero <= 100){
    totalUmAteCem = totalUmAteCem + numero
    numero++
}

console.log('2. A soma de todos os números de 1 a 100 é ->', totalUmAteCem)

// 3. Tabuada personalizada
// Peça um número e mostre a tabuada desse número (de 1 a 10) usando um for.

let numeroTabuada = 7

for(let i = 1; i <= 10; i++) {
    let tabuada = numeroTabuada * i
    console.log('3.', numeroTabuada, '*', i, '=', tabuada)
}

// 4. Contagem regressiva
// Use while para contar de 10 até 0 no console. Mostre uma mensagem no fim: "Contagem finalizada!".

let contagemDezAteZero = 10;

while(contagemDezAteZero >= 0){
    console.log('4. Número atual ->', contagemDezAteZero)
    contagemDezAteZero--
}

console.log('Contagem finalizada!')

// 5. Receber números até digitar 0
// Simule a digitação de números usando uma variável numeroDigitado.
// Use um do...while para repetir a execução até que o valor seja 0.
// Conte quantos números diferentes de zero foram digitados e mostre o total no console ao final.
// 
// 📌 Observação:
// Considere que o valor de numeroDigitado é alterado manualmente a cada repetição.

let numeroCorreto = 0
let numeroDigitado = 1

do{

    console.log('5. Seu número digitado foi:', numeroDigitado)
    numeroDigitado = 0

} while(numeroDigitado != numeroCorreto)

console.log('5. Parabéns! Foi digitado o número correto -> ', numeroCorreto)

// 6. Jogo do número secreto
// Crie uma variável numeroSecreto com valor fixo.
// Simule até 3 tentativas usando um for.
// Em cada tentativa, compare o valor tentado com o número secreto e mostre no console:
// 
// "Acertou!" se for igual
// "Tente novamente" se for diferente
// 📌 Observação:
// As tentativas devem ser simuladas por variáveis dentro do laço.

const numeroSecreto = 15

for(let i = 1; i <= 3; i++) {
    let tentativa = 12

    if(tentativa === numeroSecreto) {
        console.log('6. Acertou!')
    } else {
        console.log('6. Tente novamente')
    }
}

// 7. Idade ao longo dos anos
// Crie uma variável anoNascimento e anoAtual. Use um for para listar a idade da pessoa ano a ano até o ano atual.

const anoNascimento = 2004;
const anoAtual = 2026

for(let i = 1; i <= (anoAtual - anoNascimento); i++) {
    console.log('7. Idade atual ->', i)
}

// 8. Listando números pares
// Mostre todos os números pares entre 1 e 50 usando for.

for (let i = 1; i <= 50; i++) {
    if(i % 2 == 0){
        console.log('8. Número par ->', i)
    }
}

// 9. Contar múltiplos de 3 entre 1 e 100
// Mostre no console quantos números entre 1 e 100 são divisíveis por 3.

let multiplosDeTres = 0

for(let i = 1; i <= 100; i++){
    if(i % 3 === 0){
        console.log('9. Esse número é divisível por três ->', i)
    }
}

// 10. Menu com repetição
// Crie uma variável opcao.
// Use um do...while para exibir repetidamente as opções:
// 
// 1 - Ver saldo
// 2 - Fazer depósito
// 3 - Sair
// O menu deve continuar sendo exibido até que a opção seja 3.
// Mostre no console a ação correspondente a cada opção.
// 
// 📌 Observação:
// A escolha da opção deve ser simulada por valores atribuídos à variável opcao.

let opcao = 3;
let opcaoDigitada = 2;

do{
    console.log('Você está no menu principal!')
    console.log('')
    console.log('1 - Ver saldo')
    console.log('2 - Fazer depósito')
    console.log('3 - Sair')

    opcaoDigitada = 3
} while(opcao != opcaoDigitada) 