//variáveis da bolinha
let xBolinha = 250;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;
let velocidadeXBolinha = 5;
let velocidadeYBolinha = 5;

let colidiu = false;

function moverBolinha() {
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
}

function colisao() {
    if ((xBolinha > width - raio) || (xBolinha == raio)) {
        velocidadeXBolinha *= -1;
    }
    if ((yBolinha > height - raio) ||(yBolinha == raio)) {
        velocidadeYBolinha *= -1;
    }
}

function colidiuRaqueteBolinha() {
    for (let i = 0; i < 2; i++) {
        colidiu = collideRectCircle(xRaquetes[i], yRaquetes[i], larguraRaquetes[i], alturaRaquetes[i], xBolinha, yBolinha, diametro);
        if (colidiu) {
            velocidadeXBolinha *= -1;
            somDaColisao.play();
        }
    }
}
