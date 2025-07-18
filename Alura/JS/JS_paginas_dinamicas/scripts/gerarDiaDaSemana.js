// Geração da data
function gerarDiaDaSemana() {
    
    // Gerando a data atual
    const weekDay = new Date().toLocaleDateString("pt-BR", {
        weekday: "long"
    });
    const diaDaSemana = weekDay.charAt(0).toUpperCase() + weekDay.substring(1);
    const data = new Date().toLocaleDateString("pt-BR");
    
    // Gerando a hora atual local
    const hora = new Date().toLocaleTimeString("pt-BR", {
        hour: "numeric",
        minute: "numeric"
    })
    
    // String da data completa
    const dataCompleta = `${diaDaSemana} (${data}) às ${hora}`;

    return dataCompleta;
}

export default gerarDiaDaSemana;
