// Variáveis de acesso aos dados da página
const inputItem = document.getElementById("input-item");
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

    // Elementos da lista
    const itemDaLista = document.createElement("li");
    const containerItemdaLista = document.createElement("div");
    containerItemdaLista.classList.add("lista-item-container");
    
    // Input do tipo checkbox com id dinâmico
    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = "checkbox-" + contador++;
    
})
