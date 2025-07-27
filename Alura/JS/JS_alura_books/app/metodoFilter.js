// Funcionalidade para exibir livros segundo a sua categoria

const btnFiltrarLivrosDeFront = document.getElementById("btnFiltrarLivrosFront");

btnFiltrarLivrosDeFront.addEventListener("click", filtrarLivros)

function filtrarLivros() {
    let livrosFiltrados = livros.filter(livro => livro.categoria == "front-end");
    console.table(livrosFiltrados);
}
