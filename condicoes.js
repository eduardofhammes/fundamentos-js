// TRUTHY E FALSY

const nome = "";

if (nome) {
    console.log("Olá,", nome);
} else {
    console.log("Ainda não sei o seu nome");
}

const idade = 18;

// if (idade != null && idade >= 18) {
//     console.log("Você é maior de idade");
// } else if (idade != null && idade >= 0 && idade < 18) {
//     console.log("Menor de idade");
// } else {
//     console.log("Não foi informado idade");
// }

if (idade != null) {
    if (idade >= 18) {
        console.log("Maior de idade");
    } else {
        console.log("Menor de idade");
    }
} else {
    console.log("Null");
}
