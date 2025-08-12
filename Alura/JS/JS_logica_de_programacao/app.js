alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto = 8;
// console.log('Número secreto: ' + numeroSecreto);
let chute = prompt('Escolha um número entre 1 e 10');
// console.log('Valor do chute: ' + chute);

// console.log('Resultado da comparação: ', chute == numeroSecreto);

// Se o chute for igual ao número secreto
if (chute == numeroSecreto) {
    alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto}`);
} else {
    alert('Você errou :(');
}
