const prompt = require("prompt-sync")();

var i, j, lin, col;
var jogadas = 0;
var jogador = 'o';
var vencedor = ' ';
var fimJogo = false;
var tab = [3];

for (i = 0; i < 3; i++) {
    tab[i] = [];
    for (j = 0; j < 3; j++) {
        tab[i][j] = ' ';
    }
}

for (i = 0; i < 3; i++) {
    console.log(`[${tab[i][0]}] [${tab[i][1]}] [${tab[i][2]}]`);
}

while ((jogadas < 9) && (fimJogo == false)) {
    lin = parseInt(prompt(`${jogador} em [linha]: `));
    col = parseInt(prompt(`${jogador} em [coluna]: `));

    if (lin < 0 || lin > 2 || col < 0 || col > 2) {
        console.log("Coordenadas fora dos limites! Tente novamente.");
        continue;
    }

    if (tab[lin][col] !== ' ') {
        console.log("Essa posição já está ocupada! Tente outra.");
        continue;
    }

    tab[lin][col] = jogador;
    jogadas++;

    for (i = 0; i < 3; i++) {
        console.log(`[${tab[i][0]}] [${tab[i][1]}] [${tab[i][2]}]`);
    }

    for (i = 0; i < 3; i++) {
        if ((tab[i][0] === tab[i][1] && tab[i][1] === tab[i][2] && tab[i][0] !== ' ') || 
            (tab[0][i] === tab[1][i] && tab[1][i] === tab[2][i] && tab[0][i] !== ' ')) {
            vencedor = tab[i][i];
            fimJogo = true;
            break;
        }
    }

    if ((tab[0][0] === tab[1][1] && tab[1][1] === tab[2][2] && tab[0][0] !== ' ') || 
        (tab[0][2] === tab[1][1] && tab[1][1] === tab[2][0] && tab[0][2] !== ' ')) {
        vencedor = tab[1][1];
        fimJogo = true;
    }

    if (fimJogo) {
        break;
    }

    jogador = (jogador === 'o') ? 'x' : 'o';
}

if (vencedor === ' ') {
    console.log("Empate!\n");
} else {
    console.log(`${vencedor} venceu!\n`);
}
