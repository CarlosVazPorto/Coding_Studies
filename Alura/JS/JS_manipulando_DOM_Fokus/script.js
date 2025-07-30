// Variáveis de manipulação do DOM
const html = document.querySelector("html");
const focoBt = document.querySelector(".app__card-button--foco");
const curtoBt = document.querySelector(".app__card-button--curto");
const longoBt = document.querySelector(".app__card-button--longo");
const banner = document.querySelector(".app__image");

// Trocas de cor de fundo e imagem secundárias a evento nos botões
focoBt.addEventListener("click", () => {
    html.setAttribute("data-contexto", "foco");
    banner.setAttribute("src", "/imagens/foco.png");
    banner.setAttribute("alt", "Foco");
})

curtoBt.addEventListener("click", () => {
    html.setAttribute("data-contexto", "descanso-curto");
    banner.setAttribute("src", "/imagens/descanso-curto.png");
    banner.setAttribute("alt", "Descanso curto");    
})

longoBt.addEventListener("click", () => {
    html.setAttribute("data-contexto", "descanso-longo");
    banner.setAttribute("src", "/imagens/descanso-longo.png");
    banner.setAttribute("alt", "Descanso longo");
})
