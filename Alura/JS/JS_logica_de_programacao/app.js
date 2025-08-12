alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto = 5;
// console.log('Número secreto: ' + numeroSecreto);
let chute;
// console.log('Valor do chute: ' + chute);
// console.log('Resultado da comparação: ', chute == numeroSecreto);

// Enquanto o chute não for igual ao número secreto
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 10');
    
    // Se o chute for igual ao número secreto
    if (chute == numeroSecreto) {
        alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto}`);
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor do que ${chute}`);
        } else {
            alert(`O número secreto é maior do que ${chute}`);
        }
    }
}
