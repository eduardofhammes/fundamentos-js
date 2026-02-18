// const readline = require('readline');

// como estamos em type: module, utilizamos import {x} from xx para importar libs e outros arquivos
import { createInterface } from 'readline' 
import { soma, subtracao } from './operacoesMatematicas.js' // importando as funções soma e subtracao definidas no arquivo
// ./operacoesMatematicas.js

// variável leitor que armanezará as configurações de entrada de dados, a partir da função createInterface
const leitor = createInterface({
    input: process.stdin, // definindo a entrada de dados pelo terminal
    output: process.stdout, // definindo a saída de dados pelo terminal
});

// executando função de question, que recebe a pergunta e uma arrow function com o parametro nome que será exibido no console
leitor.question("Digite o primeiro número \n> ", (numero1) => {
    leitor.question("Digite a operação \n+: soma \n-: subtracao \n>", (operacao) => {
        leitor.question('Digite o segundo numero: \n>', (numero2) => {

            // transformando string em numero
            const num1 = Number(numero1)
            const num2 = Number(numero2)

            let resultado = null

            // verificando operação 
            if (operacao == '+') {
                resultado = soma(num1, num2) // executa função do arquivo operacoesMatematicas.js
            } else if (operacao == '-') {
                resultado = subtracao(num1, num2) // executa função do arquivo operacoesMatematicas.js
            } else {
                console.log('Operação inválida!')
            }

            // verificar se é nulo o resultado - se for null deu problema
            if (resultado != null) {
                console.log('O resultado da operação é:', resultado)
            }

            leitor.close(); // fechando leitor

        })
    });
});
