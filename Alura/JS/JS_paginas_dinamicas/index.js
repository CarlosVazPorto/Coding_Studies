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

    // Elementos da lista no DOM
    const itemDaLista = document.createElement("li");
    const containerItemdaLista = document.createElement("div");
    containerItemdaLista.classList.add("lista-item-container");
    
    // Input do tipo checkbox com id dinâmico
    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = "checkbox-" + contador++;
    
    // Valor do texto dos itens da lista
    const nomeItem = document.createElement("p");
    nomeItem.innerText = inputItem.value;

    // Inserção dos dados de cada item dentro do container (div)
    containerItemdaLista.appendChild(inputCheckbox);
    containerItemdaLista.appendChild(nomeItem);

    // Criação de cada container para cada item da lista (li)
    itemDaLista.appendChild(containerItemdaLista);

    // Inserindo cada item da lista (li) na lista (ul)
    listaDeCompras.appendChild(itemDaLista);

})
