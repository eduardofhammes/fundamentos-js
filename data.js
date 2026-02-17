const agora = new Date() 

console.log(agora)

console.log('Ano:', agora.getFullYear()) // exibindo o ano
console.log('Mês 0-11:', agora.getMonth()) // exibindo o mês
console.log('Dia do mês:', agora.getDate())  // exibindo o dia do mês
console.log('Hora:', agora.getHours())  // exibindo o dia do mês
console.log('Minutos:', agora.getMinutes())  // exibindo o dia do mês

// definindo nascimento de uma pessoa e imprimindo no console
const nascimento = new Date('2004-11-03:09:30.000Z')
console.log('Nacimento:', nascimento)

console.log('Data formatada (BR):', nascimento.toLocaleDateString('pt-BR')) // imprimindo a data em pt-br
console.log('Data formatada (US):', nascimento.toLocaleDateString('en-US')) // imprimindo a data em inglês 