//variáveis das raquetes
let xRaquetes = [10, 480];
let yRaquetes = [160, 160];
let larguraRaquetes = [10, 10];
let alturaRaquetes = [80, 80];
let chanceDeErrar = 0;
let velocidadeRaqueteOponente;

function criarRaquetes() {
    for (let i = 0; i < 2; i++) {
        rect(xRaquetes[i], yRaquetes[i], larguraRaquetes[i], alturaRaquetes[i])
    }
}

function moverRaquete() {
    if ((keyIsDown(UP_ARROW)) && (yRaquetes[0] > 0)) {
        yRaquetes[0] -= 3;
    }
    if ((keyIsDown(DOWN_ARROW)) && (yRaquetes[0] < 320)) {
        yRaquetes[0] += 3;
    }
}

function moverRaqueteOponente() {
    velocidadeRaqueteOponente = yBolinha - yRaquetes[1] - larguraRaquetes[0] / 2 - 50;
    yRaquetes[1] += velocidadeRaqueteOponente + chanceDeErrar;
    calculaChanceErrar();
}
