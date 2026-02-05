const idade = 17
const maiorDeIdade = idade >= 18
const possuiCNH = true

// AND
const podeDirigir = maiorDeIdade && possuiCNH
console.log('Pode dirigir?', podeDirigir)

// OR
const podeViajarSozinha = maiorDeIdade || possuiCNH
console.log('Pode viajar sozinha?', podeViajarSozinha)

// NOT
const precisaDeAcompanhante = !maiorDeIdade
console.log('Precisa de acompanhante?', precisaDeAcompanhante)