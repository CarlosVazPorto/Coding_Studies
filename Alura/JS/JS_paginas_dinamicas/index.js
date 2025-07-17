// Importação da função criarItemDaLista
import { criarItemDaLista } from "./scripts/criarItemDaLista";

// Variáveis de acesso aos dados da página
const listaDeCompras = document.getElementById("lista-de-compras");
const botaoAdicionar = document.getElementById("adicionar-item");
let contador = 0;

// Lógica do botão "Salvar item"
botaoAdicionar.addEventListener("click", (evento) => {

    // Chamada da função de criação de itens na lista
    const itemDaLista = criarItemDaLista();

    // Inserindo cada item da lista (li) na lista (ul)
    listaDeCompras.appendChild(itemDaLista);

    // Verificando se a lista está vazia (após autalizações nos itens da lista)
    verificarListaVazia();
})

// Manipulação da mensagem de lista vazia
const mensagemListaVazia = document.querySelector(".mensagem-lista-vazia");

function verificarListaVazia() {
    const itensDaLista = listaDeCompras.querySelectorAll("li");
    if (itensDaLista.length === 0) {
        mensagemListaVazia.style.display = "block";
    } else {
        mensagemListaVazia.style.display = "none";
    }
}

// Verificando se a lista está vazia (ao inicializar o aplicativo)
verificarListaVazia();
