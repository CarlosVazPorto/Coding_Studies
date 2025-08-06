// Programa JavaScript para exibir uma árvore de estrelas
// Para Node.js

// Pacote para a entrada de dados
const prompt = require("prompt-sync")();

// Lê o número de linhas (altura)
const altura = Number(prompt("Altura da árvore: "));

// Deixa uma linha em branco
console.log();

// Inicia a repetição (loop)
for (let i = 1; i <= altura; i++) {
    const espacos = 30 + (altura - i);                      // Calcula espaços do início
    console.log(" ".repeat(espacos) + "*".repeat(i * 2));   // Exibe cada linha
}
