function verificacao() {
    const salarioMinimo = 1320;
    const idadeMinima = 16;

    const dataNascimento = new Date(document.getElementById("dataNascimento").value);
    const rendaFamiliar = parseFloat(document.getElementById("rendaFamiliar").value);
    const quantidadeMoradores = parseInt(document.getElementById("quantidadeMoradores").value);

    const hoje = new Date();
    const anosCompletos = hoje.getFullYear() - dataNascimento.getFullYear();
    const mes = hoje.getMonth() - dataNascimento.getMonth();
    if (mes < 0 || (mes === 0 && hoje.getDate() < dataNascimento.getDate())) {
        anosCompletos--;
    }
    const rendaPerCapita = rendaFamiliar / quantidadeMoradores;


    if (anosCompletos >= idadeMinima && rendaPerCapita <= 1.5 * salarioMinimo) {
        const telefoneContato = "123456789";
        const mensagem = "Parabéns! Você está autorizado a realizar a matrícula no PSG. Entre em contato pelo telefone " + telefoneContato + " para mais informações."
        alert(mensagem);
    } else {
        const mensagem = "Desculpe, você não se adequa às condições de elegibilidade do programa PSG.";
        alert(mensagem);
    }
}