// Programa JavaScript para gerar datas de vencimentos de parcelas
// Para Node.js

// Pacote para entrada de dados
const prompt = require("prompt-sync")();

// Número de parcelas e data atual
const parcelas = Number(prompt("Quantas parcelas? "));
const data = new Date();

for (let i = 1; i <= parcelas; i++) {
    data.setMonth(data.getMonth() + 1);                 // Ajusta o mês da data
    
    const dia = data.getDate();
    const mes = data.getMonth() + 1;                    // 1ª parcela para 30 dias
    const ano = data.getFullYear();

    const diaComZero = dia < 10 ? "0" + dia : dia;      // Acrescenta um 0 no dia, se necessário
    const mesComZero = mes < 10 ? "0" + mes : mes;      // Acrescenta um 0 no mês, se necessário
    
    console.log(`${i}ª parcela: ${diaComZero}/${mesComZero}/${ano}`);
}
