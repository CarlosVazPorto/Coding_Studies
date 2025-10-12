const urlVideos = "http://localhost:3000/videos";

async function listaVideos() {
  const conexao = await fetch(urlVideos);
  console.log(conexao);
}

listaVideos();
