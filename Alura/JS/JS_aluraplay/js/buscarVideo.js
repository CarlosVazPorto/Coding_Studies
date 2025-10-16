import { conectaApi } from "./conectaApi.js";

async function buscarVideo() {
  const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
  const busca = await conectaApi.buscaVideo(dadosDePesquisa);
}
