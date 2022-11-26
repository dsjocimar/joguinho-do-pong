let pontos = 0;
let pontosOponente = 0;

function setup() {
    createCanvas(500, 400);
    somDaTrilha.loop();
}
function draw() {
    background (0);
    circle(xBolinha, yBolinha, diametro);
    moverBolinha();
    colisao();
    criarRaquetes();
    moverRaquete();
    moverRaqueteOponente();
    colidiuRaqueteBolinha();
    mostrarPontuacao();
    pontuou();
    calculaChanceErrar();
}

function mostrarPontuacao() {
    fill (255);
    textSize(20);
    //textAlign(LEFT);
    text(pontos, 100, 25);
    text(pontosOponente, 400, 25);
}

function pontuou() {
    if (xBolinha - raio == 0) {
        pontosOponente += 1;
        somDosPontos.play();
    }
    if (xBolinha + raio > 500) {
        pontos += 1;
        somDosPontos.play();
    }
}

function calculaChanceErrar() {
    if (pontosOponente > pontos) {
        chanceDeErrar += 2;
        if (chanceDeErrar >= 39){
            chanceDeErrar = 40;
        }
    } else {
        chanceDeErrar -= 2;
        if (chanceDeErrar <= 35) {
            chanceDeErrar = 35;
        }
    }
}