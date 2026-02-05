// contar quantos numeros pares e quantos numeros impares nós temos entre 0 e 100

let numero = 0;
let numerosPares = 0;
let numerosImpares = 0;

while (numero <= 100) {
  if (numero % 2 === 0) {
    numerosPares++;
  } else {
    numerosImpares++;
  }
  numero++;
}

console.log("Total de números pares ->", numerosPares);
console.log("Total de números ímpares ->", numerosImpares);