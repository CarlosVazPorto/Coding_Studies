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
            console.error("Erro na leitura do aruivo");
        }
    }
});
