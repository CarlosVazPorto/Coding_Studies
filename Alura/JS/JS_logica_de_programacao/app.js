alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto = 5;
// console.log('Número secreto: ' + numeroSecreto);
let chute;
// console.log('Valor do chute: ' + chute);
// console.log('Resultado da comparação: ', chute == numeroSecreto);
let tentativas = 1;

// Enquanto o chute não for igual ao número secreto
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 10');
    
    // Se o chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor do que ${chute}`);
        } else {
            alert(`O número secreto é maior do que ${chute}`);
        }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}!`);
