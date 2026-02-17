const frutas = ['Banana', 'Maçã', 'Goiaba']

const maisFrutas = ['Uva', 'Morango', 'Kiwi']

const clone = [...frutas] // clonando com spread o array de frutas, assim o array clone terá as mesmas propriedades

// juntando todas as frutas de dois arrays diferentes em um só array utilizando spread
const todasAsFrutas = [...frutas, ...maisFrutas]

frutas.push('Pitanga') // adicionando um item para o array


console.log(frutas)
console.log(maisFrutas)
console.log(clone)
console.log(todasAsFrutas)

// atribui o indice [0] de todasAsFrutas para a variavel primeira
// atribui o indice [1] de todasAsFrutas para a variavel segunda
// atribui o restante dos elementos do array de todasAsFrutas para o rest ...restante
const [primeira, segunda, ...restante] = todasAsFrutas

// exibindo as informações
console.log(primeira)
console.log(segunda)
console.log(restante)