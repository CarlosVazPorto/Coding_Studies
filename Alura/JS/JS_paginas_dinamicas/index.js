// Variáveis de acesso aos dados da página
const inputItem = document.getElementById("input-item");
const listaDeCompras = document.getElementById("lista-de-compras");
const botaoAdicionar = document.getElementById("adicionar-item");
let contador = 0;

// Lógica do botão "Salvar item"
botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault();
    
    // Prevenção da inserção de itens vazios na lista
    if (inputItem.value === "") {
        alert("Por favor, insira um item!");
        return;
    }

    // Criando elementos da lista
    const itemDaLista = document.createElement("li");
    const containerItemdaLista = document.createElement("div");
    containerItemdaLista.classList.add("lista-item-container");
    
    // Criando elemento do input do tipo checkbox com id dinâmico
    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = "checkbox-" + contador++;
    
    // Criando elemento de texto dos itens da lista
    const nomeItem = document.createElement("p");
    nomeItem.innerText = inputItem.value;

    // Gerando a data atual
    const weekDay = new Date().toLocaleDateString("pt-BR", {
        weekday: "long"
    });
    const diaDaSemana = weekDay.charAt(0).toUpperCase() + weekDay.substring(1);
    const data = new Date().toLocaleDateString("pt-BR");
    
    // Gerando a hora atual local
    const hora = new Date().toLocaleTimeString("pt-BR", {
        hour: "numeric",
        minute: "numeric"
    })
    
    // String da data completa
    const dataCompleta = `${diaDaSemana} (${data}) às ${hora}`;

    // Criando elemento da data
    const itemData = document.createElement("p");
    itemData.innerText = dataCompleta;
    itemData.classList.add("texto-data");

    // Ouvinte de eventos do input checkbox para mudança de textDecoration
    inputCheckbox.addEventListener("click", function() {
        if (inputCheckbox.checked) {
            nomeItem.style.textDecoration = "line-through";
        } else {
            nomeItem.style.textDecoration = "none";
        }
    });

    // Inserção dos dados de cada item dentro do container (div)
    containerItemdaLista.appendChild(inputCheckbox);
    containerItemdaLista.appendChild(nomeItem);

    // Criação de cada container para cada item da lista (li)
    itemDaLista.appendChild(containerItemdaLista);
    itemDaLista.appendChild(itemData);

    // Inserindo cada item da lista (li) na lista (ul)
    listaDeCompras.appendChild(itemDaLista);

    // Verificando se a lista está vazia
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

// Verificando se a lista está vazia
verificarListaVazia();
