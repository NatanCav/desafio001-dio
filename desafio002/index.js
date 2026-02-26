let resultado = calculadoraRank(120, 1)
let nivelRank = calcularNivel(resultado)

console.log(`O Herói tem de saldo ${resultado} e está no nível de ${nivelRank}`)

function calculadoraRank(quantidadeVitorias, quantidadeDerrotas){
    let saldoVitoria = (quantidadeVitorias - quantidadeDerrotas) 
    return saldoVitoria
}

function calcularNivel(saldoVitoria){
    if (saldoVitoria < 10) {
        return "Ferro"
    } else if (saldoVitoria > 11 && saldoVitoria < 20){
        return "Bronze"
    } else if (saldoVitoria > 21 && saldoVitoria < 50){
        return "Prata"
    } else if (saldoVitoria > 51 && saldoVitoria < 80){
        return "Ouro"
    } else if (saldoVitoria > 81 && saldoVitoria < 90){
        return "Diamante"
    } else if (saldoVitoria > 91 && saldoVitoria < 100){
        return "Lendário"
    } else {
        return "Imortal"
    }
}