// estrutura do for
for(let contador = 1; contador <= 10; contador++) {
    console.log('Número atual:', contador)
}

// números pares de 0 a 15
for(let i = 0; i <= 15; i++){
    if(i % 2 === 0){
        console.log('Esse número é par ->', i)
    }
}

// números ímpares de 0 a 15
for(let i = 0; i <= 15; i++){
    if(i % 2 === 1){
        console.log('Esse número é ímpar ->', i)
    }
}


// imprimir as letras de uma palavra
const palavra = 'Eduardo'

// palavra.length indica quantos caracteres uma string possui
// palavra[1] - pega a letra na posição indicada
for(let contador = 0; contador < palavra.length; contador++) {
  console.log(palavra[contador])  
}