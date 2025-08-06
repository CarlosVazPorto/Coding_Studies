// Programa JavaScript para analisar os paênteses de uma fórmula matemática
// Para rodar no Node.js

// Pacote para entrada de dados
const prompt = require("prompt-sync")();

// Lê a fórmula
const formula = prompt("Fórmula: ");

// Contadores
let abre = 0;
let fecha = 0;

// Percorre os caracteres da fórmula
for (const simbolo of formula) {
    if (simbolo == "(") {
        abre++;
    } else if (simbolo = ")") {
        fecha++;
    }

    // Se em algum momento o número de fecha for maior do que o de abre
    if (fecha > abre) {
        break; // sai da repetição
    }

    if (abre == fecha) {
        console.log("Ok! Fórmula correta (em relação aos parênteses)");
    } else {
        console.log("Erro... Fórmula incorreta!")
    }
}
