// 1. Verificação de idade para compra de bebida
// Peça a idade da pessoa em uma variável. Se for 18 ou mais, mostre "Pode comprar bebida alcoólica". Caso contrário, mostre "Venda proibida para menores de 18 anos".

const idade = 19

if(idade >= 18){
    console.log('Pode comprar bebida alcoólica')
} else {
    console.log('Venda proibida para menores de 18 anos')
}

// 2. Saudação de acordo com a hora
// Crie uma variável horaAtual. Se estiver entre 6 e 12, mostre "Bom dia"; entre 12 e 18, "Boa tarde"; caso contrário, "Boa noite".

const horaAtual = 18

if(horaAtual >= 6 && horaAtual < 12) {
    console.log('Bom dia')
} else if(horaAtual >= 13 && horaAtual < 18) {
    console.log('Boa tarde')
} else {
    console.log('Boa noite')
}

// 3. Verificação de número positivo ou negativo
// Crie uma variável com um número qualquer. Mostre se ele é positivo, negativo ou igual a zero.

const numero = 1

if(numero != 0){
    if(numero < 0) {
        console.log('Negativo')
    } 
    else {
        console.log('Positivo')
    }
} else {
    console.log('Zero')
}

// 4. Conversão de nota em conceito
// Crie uma variável nota entre 0 e 10. Use if/else if/else para retornar: A (9-10), B (8-9), C (6-7.9), D (4-5.9), E (0-3.9).

const notaConceito = 7

if(notaConceito <= 10 && notaConceito >= 9) {
    console.log('A')
} else if(notaConceito <= 8.9 && notaConceito >= 8) {
    console.log('B')
} else if(notaConceito <= 7.9 && notaConceito >= 6) {
    console.log('C')
} else if(notaConceito <= 5.9 && notaConceito >= 4) {
    console.log('D')
}  else if(notaConceito <= 3.9 && notaConceito >= 0){
    console.log('E')
}  else {
    console.log('Valor inválido!')
}


// 5. Número par ou ímpar com ternário
// Crie uma variável numero. Use o operador ternário para mostrar se ele é par ou ímpar.

const numeroParImpar = -666

numeroParImpar % 2 === 0 ? console.log('Número Ímpar') : console.log('Número par') 

// 6. Menu com switch-case
// Crie uma variável opcao com valores de 1 a 3. Use switch para mostrar: 1 - "Cadastrar", 2 - "Listar", 3 - "Sair".

const opcao = 2

switch(opcao){
    case 1:
        console.log('1 - Cadastrar')
        break
    case 2:
        console.log('2 - Listar')
        break
    case 3:
        console.log('3 - Sair')
        break
    default:
        console.log('Opção inválida')
        break    
}

// 7. Validação de campo obrigatório
// Crie uma variável email. Se estiver vazia (""), mostre "Preencha o campo de e-mail". Caso contrário, mostre "E-mail válido".

const email = ""

if(email) {
    console.log('E-mail válido')
} else {
    console.log('Preencha o campo de e-mail')
}

// 8. Validação de senha segura
// Crie duas variáveis:
// 
// senha
// 
// senhaValida (valor true ou false, definido manualmente)
// 
// Se senhaValida for verdadeira, mostre "Senha válida".
// Caso contrário, mostre "Senha muito curta".
// 
// 📌 Observação:
// Considere que a validação do tamanho da senha já foi feita previamente e o resultado está armazenado na variável senhaValida.

const senha = 'bananinha8'

senhaValida = false

if(senhaValida) {
    console.log('Senha válida')
} else{
    console.log('Senha muito curta')
}


 // 9. Compra com saldo
// Crie duas variáveis: saldoDisponivel e valorCompra. Se o saldo for suficiente, mostre "Compra aprovada". Caso contrário, "Saldo insuficiente".

const saldoDisponivel = 22
const valorCompra = 15

if(saldoDisponivel >= valorCompra) {
    console.log('Compra aprovada')
} else {
    console.log('Saldo insuficiente')
}

// 10. Validação de formulário completo
// Crie três variáveis:
// 
// nome
// email
// idade
// Crie também uma variável booleana chamada formularioValido que indique se o formulário está válido (true ou false).
// 
// Se formularioValido for verdadeiro, mostre "Formulário enviado com sucesso".
// Caso contrário, mostre "Por favor, preencha todos os campos corretamente".
// 
// 📌 Observação:
// Considere que a verificação dos campos já foi realizada anteriormente e o resultado está armazenado na variável formularioValido.

const nomeUser = 'Eduardo'
const emailUser = 'eduardo@email.com'
const idadeUser = 12
const formularioValido = false

if(formularioValido){
    console.log('Formulário enviado com sucesso!')
} else{
    console.log('Por favor preencha todos os campos corretamente!')
}

console.log('Início');

setTimeout(() => {
  console.log('Tarefa assíncrona concluída');
}, 5000);

console.log('Fim');