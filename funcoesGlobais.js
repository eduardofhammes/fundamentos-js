// funcoes nativas que podem ser usadas no node e navegador

function saudacao() {
  console.log("E aí, beleza?");
}

// setTimeout - executa um bloco depois de certo período de tempo, nesse caso, 2seg
setTimeout(saudacao, 2000); // ms

// parte 2 - setInterval: calcula um intervalo de tempo
let contador = 0;

// recebe uma função, nesse caso vazia e o parametro de delay em ms
const id = setInterval(() => {
  contador++;
  console.log("Tempo decorrido (em segundos)", contador);
  if (contador == 10) { // finaliza o contador e a função quando chegar em 10s, de acordo com a funcao clearInterval, passando esse id dessa função como argumento
    clearInterval(id);
  }
}, 1000)
