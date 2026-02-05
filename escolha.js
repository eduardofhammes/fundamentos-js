// switch case com exemplo de notas

const notaAluno = 4

switch(notaAluno){
    case 10:
    case 9:
        console.log('Excelente') // caso seja 9 ou 10
        break // parar de rodar se atender a condição
    case 8:
    case 7:
        console.log('Bom') // caso seja 7 ou 8  
        break
    case 6:
    case 5:
    case 4:
        console.log('Mediana') // caso seja 6, 5 ou 4 
        break
    case 3:
    case 2:
    case 1:
    case 0:
        console.log('Ruim') // caso seja 3, 2 ou 1
        break
    // valor padrão no default, caso não corresponda a nenhuma das condições anteriores
    default:
        console.log('Valor inválido')
        break
    }