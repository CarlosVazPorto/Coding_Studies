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

// Funcionalidade de exibição da imagem pré-upload
inputUpload.addEventListener('change', function(event) {
    const file = event.target.files[0]; // Pegando o arquivo selecionado pelo usuário
    if (file) {
        const reader = new FileReader(); // Criando uma instância do FileReader
        reader.onload = function(e) {
            const preview = document.getElementById('preview');
            preview.src = e.target.result; // Atribuindo o resultado da leitura como fonte da imagem de pré-visualização
            preview.style.display = 'block'; // Tornando a pré-visualização visível
        };
        reader.readAsDataURL(file); // Lendo o arquivo como um Data URL
    }
});