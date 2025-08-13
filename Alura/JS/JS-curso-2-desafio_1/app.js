let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function pressConsoleButton() {
    console.log('O botão Console foi clicado!');
}

function pressAlertButton() {
    alert('Eu amo JS');
}

function pressPromptButton() {
    let cidade = prompt('Escreva o nome de uma cidade do Brasil: ');
    alert(`Estive em ${cidade} e lembrei de você.`);
}

function pressAdditionButton() {
    let numero1 = Number(prompt("Digite o primeiro número: "));
    let numero2 = Number(prompt("Digite o segundo número: "));
    let soma = numero1 + numero2;
    alert(`A soma dos números é: ${soma}`);
}
