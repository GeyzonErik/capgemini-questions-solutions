
/*

    stairStep será o simbolo a ser desenhado na escada.
    Na entrada serão quantos degraus a escada terá.

*/

let stairStep = '*';
const entrada = 6; // [ Digite a quantidade de degraus aqui];

// Laço de repetição que fará a escada.

for(n = 1; n <= entrada; n++) {
    // Usando repeat() para dar os espaço, e reduzindo a medida que o laço vai se repetindo;
    // Mesma coisa com o simbolo da escada, a diferença é que ao invés de diminuir
    stairStep = ' '.repeat(entrada-n) +'*'.repeat(n);
    console.log(stairStep);
}
