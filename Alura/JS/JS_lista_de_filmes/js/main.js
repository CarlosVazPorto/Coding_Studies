import ui from "./ui.js"
import api from "./api.js"

const filmesSet = new Set();

const regexNome = /^[\p{L}0-9\s\p{P}]*$/u;
const regexGenero = /^\p{L}+(?:\s+|\-\p{L}+)]*$/u;

function validarNome(nome) {
  return regexNome.test(nome);
}

function validarGenero(genero) {
  return regexGenero.test(genero);
}

function removerEspacos(string) {
  return string.replaceAll(/\s+/g, "");
}

document.addEventListener("DOMContentLoaded", () => {
  ui.renderizarFilmes();

  const formularioFilme = document.getElementById("filme-form");
  const botaoCancelar = document.getElementById("botao-cancelar");
  const inputBusca = document.getElementById("campo-busca");

  formularioFilme.addEventListener("submit", manipularSubmissaoFormulario);
  botaoCancelar.addEventListener("click", manipularCancelamento);
  inputBusca.addEventListener("input", manipularBusca);

})

async function manipularSubmissaoFormulario(event) {
  event.preventDefault();
  const id = document.getElementById("filme-id").value;
  const nome = document.getElementById("filme-nome").value;
  const genero = document.getElementById("filme-genero").value;
  const data = document.getElementById("data-lancamento").value;

  const nomeSemEspacos = removerEspacos(nome);
  const generoSemEspacos = removerEspacos(genero);

  if (!validarNome(nomeSemEspacos)) {
    alert("Nome inválido. Use letras, números, espaços e/ou pontuação somente.");
    return;
  };

  if (!validarGenero(generoSemEspacos)) {
    alert("Gênero inválido. Use letras, números, espaços e/ou hífen somente.");
    return;
  };

  if (!validarData(data)) {
    alert("Filme ainda não lançado!");
    return;
  };

  try {
    if (id) {
      await api.editarFilme({ id, nome, genero, data });
    } else {
      await api.salvarFilme({ nome, genero, data });
    }
    ui.renderizarFilmes();
  } catch {
    alert("Erro ao salvar filme");
  };
}

function manipularCancelamento() {
  ui.limparFormulario();
}

async function manipularBusca() {
  const termoBusca = document.getElementById("campo-busca").value;

  try {
    const filmesFiltrados = await api.buscarFilmesPorTermo(termoBusca);
    ui.renderizarFilmes(filmesFiltrados);
  } catch (error) {
    alert("Erro ao realizar busca.");
    throw error;
  }
}

function validarData(data) {
  const dataAtual = new Date();
  const dataInserida = new Date(data);
  return dataInserida <= dataAtual;
}
