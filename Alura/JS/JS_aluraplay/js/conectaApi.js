const urlVideos = "http://localhost:3000/videos";

async function listaVideos() {
  const conexao = await fetch(urlVideos);
  const conexaoConvertida = await conexao.json();

  return conexaoConvertida;
}

export const conectaApi = {
  listaVideos,
};
