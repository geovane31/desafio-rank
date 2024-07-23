let vitoria = 100
let derrota = 10
let nivel
function calcRank(vitoria , derrota){
    let qntWin = vitoria - derrota
    return qntWin
}
let resultWin = calcRank(vitoria,derrota)

if (resultWin <= 10){
    nivelRank = "Ferro"
}
else if (resultWin >= 11 && resultWin <=20){
    nivelRank = "Bronze"
}
else if (resultWin >= 21 && resultWin <=50){
    nivelRank = "Prata"
}
else if (resultWin >= 51 && resultWin <=80){
    nivelRank = "Ouro"
}
else if (resultWin >= 81 && resultWin <=90){
    nivelRank = "Diamante"
}
else if (resultWin >= 91 && resultWin <=100){
    nivelRank = "Lendário"
}
else if (resultWin >= 101){
    nivelRank = "Imortal"
}

    console.log(`O Herói tem de saldo de ${resultWin} está no nível ${nivelRank}`)