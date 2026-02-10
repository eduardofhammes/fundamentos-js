// carregando biblioteca 'readline' através do require e armazenando em uma constante
const readline = require("readline");

// variável leitor que armanezará as configurações de entrada de dados, a partir da função createInterface
const leitor = readline.createInterface({
  input: process.stdin, // definindo a entrada de dados pelo terminal
  output: process.stdout, // definindo a saída de dados pelo terminal
});

// executando função de question, que recebe a pergunta e uma arrow function com o parametro nome que será exibido no console
// nome é onde será armazenado a entrada do user
leitor.question("Qual é o seu nome? ", (nome) => {
  console.log("Olá", nome);
  console.log("Boas vindas ao nosso sistema");

  leitor.question("Qual é a sua idade? ", (idade) => {
    if (idade >= 18) {
      console.log("Você já pode tirar sua CNH");
    } else {
      console.log("Você ainda não pode tirar sua CNH");
    }

    leitor.close(); // fechando leitor
  });
});
