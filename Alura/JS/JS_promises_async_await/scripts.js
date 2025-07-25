// Acesso aos elementos da página para upload de imagens
const uploadBtn = document.getElementById("upload-btn");
const inputUpload = document.getElementById("image-upload");

// Ouvinte de eventos do botão 'Carregar imagem'
uploadBtn.addEventListener("click", () => {
    inputUpload.click();
})

// Funcionalidade de leitura dos arquivos de upload
function lerConteudoDoArquivo(arquivo) {
    return new Promise((resolve, reject) => {
        const leitor = new FileReader();
        leitor.onload = () => {
            resolve({ url: leitor.result, nome: arquivo.name });
        }

        leitor.onerror = () => {
            reject(`Erro na leitura do arquivo ${arquivo.name}`);
        }

        leitor.readAsDataURL(arquivo);
    });
}

const imagemPrincipal = document.querySelector(".main-imagem");
const nomeDaImagem = document.querySelector(".container-imagem-nome p");

// Funcionalidade de exibição da imagem pré-upload
inputUpload.addEventListener("change", async (evento) => {
    const arquivo = evento.target.files[0]; 
    
    if (arquivo) {
        try {
            const conteudoDoArquivo = await lerConteudoDoArquivo(arquivo);
            imagemPrincipal.src = conteudoDoArquivo.url;
            nomeDaImagem.textContent = conteudoDoArquivo.nome;
        } catch (erro) {
            console.error("Erro na leitura do arquivo");
        }
    }
});

// Acesso ao conteúdo no input e output das tags
const inputTags = document.getElementById("input-tags");
const listaTags = document.getElementById("lista-tags");

// Funcionalidade de remoção de tags
listaTags.addEventListener("click", (evento) => {
    if (evento.target.classList.contains("remove-tag")) {
        const tagARemover = evento.target.parentElement;
        listaTags.removeChild(tagARemover);
    }
})

// Lista contendo as tags permitidas
const tagsDisponiveis = ["Front-end", "Programação", "Back-end", "Full-stack", "Ciência de Dados", "Mobile", "HTML", "CSS", "JavaScript", "TypeScript", "React", "Angular", "Node.js"];

// Funcionalidade de verificação das tags permitidas
async function verificarTagsDisponiveis(tagTexto) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(tagsDisponiveis.includes(tagTexto));
        }, 1000)
    })
}

// Funcionalidade de geração de tags
inputTags.addEventListener("keypress", async (evento) => {
    if (evento.key === "Enter") {
        evento.preventDefault();
        
        const tagTexto = inputTags.value.trim();
        if (tagTexto !== "") {
            try {
                const tagNaLista = await verificarTagsDisponiveis(tagTexto);
                if (tagNaLista) {
                    const tagNova = document.createElement("li");
                    tagNova.innerHTML = `<p>${tagTexto}</p> <img src="./img/close-black.svg" class="remove-tag">`;
                    listaTags.appendChild(tagNova);
                    inputTags.value = "";
                } else {
                    alert("A tag não foi encontrada na lista de tags permitidas.");
                }
            } catch (error) {
                console.error("Erro ao verificar a existência da tag.");
                alert("Erro ao verificar a existência da tag. Verifique o console.");
            }
        }
    }
})

// Funcionalidade de acesso aos inputs do formulário (botão 'Publicar')
const botaoPublicar = document.querySelector(".botao-publicar");

botaoPublicar.addEventListener("click", async (evento) => {
    evento.preventDefault();

    const nomeDoProjeto = document.getElementById("nome").value;
    const descricaoDoProjeto = document.getElementById("descricao").value;
    const tagsProjeto = Array.from(listaTags.querySelector("p")).map((tag) => tag.textContent);

    console.log(nomeDoProjeto);
    console.log(descricaoDoProjeto);
    console.log(tagsProjeto);
})

// Funcionalidade de simulação de envio de dados para um BD
async function publicarProjeto(nomeDoProjeto, descricaoDoProjeto, tagsProjeto) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const deuCerto = Math.random() > 0.5;

            if (deuCerto) {
                resolve("Projeto publicado com sucesso!");
            } else {
                reject("Erro ao publicar o projeto.");
            }
        }, 2000)
    })
}
