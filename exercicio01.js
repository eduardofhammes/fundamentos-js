// 1. Crie uma variável chamada nome e atribua seu nome completo. Depois, use console.log() para exibir a mensagem: "Olá, [nome]! Seja bem-vindo(a) ao curso de JavaScript!"

let nome = 'Eduardo Felipe Hammes'

console.log('1. Olá,', nome, '! Seja bem vindo(a) ao curso de JavaScript!')

// 2. Cálculo de idade
// Crie duas variáveis: anoAtual e anoNascimento. Calcule a idade da pessoa subtraindo os valores e exiba no console: "Você tem [idade] anos."

let anoAtual = 2026
const anoNascimento = 2004

let idadeUsuario = anoAtual - anoNascimento;
console.log('2. Você tem', idadeUsuario, 'anos')

// 3. Mensagem de localização
// Crie três variáveis com os dados da sua localização: cidade, estado e pais. Em seguida, mostre no console: "Você está em Cidade - Estado, País."

let cidade = 'Lajeado'
let estado = 'Rio Grande do Sul'
let pais = 'Brasil'

console.log('3. Você está em', cidade, '-', estado, '-', pais)

// 4. Tipo da variável:
//Crie uma variável chamada temCarteira com valor true ou false. Use console.log(typeof temCarteira) para mostrar o tipo dessa variável.

let temCarteira = true;
console.log('4.', typeof temCarteira)

// 5. Simulação bancária simples:
// Crie uma variável saldo iniciando com 0. Depois, simule um depósito de 200 e um saque de 50. Mostre o saldo final no console com uma frase explicando.

let saldo = 0
let deposito = 200;
let saque = 50;

let saldoAtual = saldo + deposito - saque;
console.log('5. Saldo atual:', saldoAtual)

// 6. Média de notas:
// Crie variáveis para três disciplinas: matematica, portugues e ciencias, contendo suas respectivas notas. Calcule e mostre a média final com uma mensagem.

let notaMatematica = 70;
let notaPortugues = 60;
let notaCiencias = 50;

let mediaNotas = (notaMatematica + notaPortugues + notaCiencias) / 3
console.log('6. Sua média final é de:', mediaNotas)

// 7. Reajuste de salário:
// Crie uma variável chamada salario com valor 3000. Calcule um aumento de 10% e mostre o novo salário com uma frase explicando o motivo.

let salario = 3000;
const reajustePercentual = 0.1

let salarioAtual = (salario * reajustePercentual) + salario

console.log('7. Seu salário após o reajuste é de:', salarioAtual)

// 8. Contador de cliques:
// Simule um contador de cliques em um botão. Crie uma variável cliques = 0 e incremente 1 a cada "simulação de clique". Mostre o total após 3 simulações.

let clique = 0
console.log('8. Valor após primeiro clique', clique + 1)
console.log('8. Valor após seundo clique', clique + 2)
console.log('8. Valor após terceiro clique', clique + 3)

// 9. Constantes não podem ser alteradas
// Crie uma constante chamada PI com o valor 3.14. Tente alterar seu valor e observe o erro gerado. Depois, explique por que isso acontece.

const PI = 3.14;
// PI = 3.15

console.log('9. Não é possível alterar o valor de PI, em função dela estar definida como const', PI)


//10. Concatenando tipos diferentes
// Crie uma variável mensagem contendo uma string e outra numero contendo um número. Junte as duas em uma terceira variável e exiba o resultado e o tipo final no console usando typeof.

let mensagem = 'Finalizando exercícios'
let numero = 10;

concatenacao = typeof mensagem, typeof numero

console.log('10.', concatenacao)