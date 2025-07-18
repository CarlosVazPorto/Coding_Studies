// Importação de módulos
import { criarItemDaLista } from "./scripts/criarItemDaLista.js";
import verificarListaVazia from "./scripts/verificarListaVazia.js";

// Variáveis de acesso aos dados da página HTML
const listaDeCompras = document.getElementById("lista-de-compras");
const botaoAdicionar = document.getElementById("adicionar-item");

// Lógica do botão "Salvar item"
botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault();

    // Chamada da função de criação de itens na lista
    const itemDaLista = criarItemDaLista();

    // Inserindo cada item da lista (li) na lista (ul)
    listaDeCompras.appendChild(itemDaLista);

    // Verificando se a lista está vazia (após autalizações nos itens da lista)
    verificarListaVazia(listaDeCompras);
})

// Verificando se a lista está vazia (ao inicializar o aplicativo)
verificarListaVazia(listaDeCompras);
