nomeHeroi = "Napeida";
nivelXP = 10300;

switch(true){
    case (nivelXP <= 1000):
        console.log("O Herói de nome " + nomeHeroi + " está no nível de Ferro")
    break

    case (nivelXP > 1001 && nivelXP < 2000):
        console.log("O Herói de nome " + nomeHeroi + " está no nível de Bronze")
    break

    case (nivelXP > 2001 && nivelXP < 5000):
        console.log("O Herói de nome " + nomeHeroi + " está no nível de Prata")
    break

    case (nivelXP > 5001 && nivelXP < 7000):
        console.log("O Herói de nome " + nomeHeroi + " está no nível de Ouro")
    break

    case (nivelXP > 7001 && nivelXP < 8000):
        console.log("O Herói de nome " + nomeHeroi + " está no nível de Platina")
    break

    case (nivelXP > 8001 && nivelXP < 9000):
        console.log("O Herói de nome " + nomeHeroi + " está no nível de Ascendente")
    break

    case (nivelXP > 9001 && nivelXP < 10000):
        console.log("O Herói de nome " + nomeHeroi + " está no nível de Imortal")
    break

    case (nivelXP > 10001):
        console.log("O Herói de nome " + nomeHeroi + " está no nível de Radiante")
    break
}   