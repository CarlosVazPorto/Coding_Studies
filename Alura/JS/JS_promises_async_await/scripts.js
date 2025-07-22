// Acesso aos elementos da página para upload de imagens
const uploadBtn = document.getElementById("upload-btn");
const inputUpload = document.getElementById("image-upload");

// Ouvinte de eventos do botão 'Carregar imagem'
uploadBtn.addEventListener("click", () => {
    inputUpload.click();
})