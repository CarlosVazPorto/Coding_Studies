import { conectaApi } from "./conectaApi.js";

async function buscarVideo() {
  const busca = await conectaApi.buscaVideo();
}
