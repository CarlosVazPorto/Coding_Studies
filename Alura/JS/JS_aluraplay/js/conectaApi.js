const URL_VIDEOS = "http://localhost:3000/videos";

async function listaVideos() {
  const conexao = await fetch(URL_VIDEOS);
  const conexaoConvertida = await conexao.json();

  return conexaoConvertida;
}

export const conectaApi = {
  listaVideos,
};
