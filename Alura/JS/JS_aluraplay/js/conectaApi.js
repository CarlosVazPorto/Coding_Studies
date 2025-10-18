const URL_VIDEOS = "http://localhost:3000/videos";

async function listaVideos() {
  const conexao = await fetch(URL_VIDEOS);
  const conexaoConvertida = await conexao.json();

  return conexaoConvertida;
}

async function postaVideo(titulo, descricao, url, imagem) {
  const conexao = await fetch(URL_VIDEOS, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      titulo: titulo,
      descricao: `${descricao} mil visualizações`,
      url: url,
      imagem: imagem,
    }),
  });

  if (!conexao.ok) {
    throw new Error("Não foi possível enviar o vídeo");
  }

  const conexaoConvertida = await conexao.json();
  return conexaoConvertida;
}

async function buscaVideo(termodeBusca) {
  const conexao = await fetch(`${URL_VIDEOS}?q=${termodeBusca}`);
  const conexaoConvertida = await conexao.json();

  return conexaoConvertida;
}

export const conectaApi = {
  listaVideos,
  postaVideo,
  buscaVideo,
};
