function calcularAdmissao() {
    let idade = document.getElementById('aInput').value;
    let renda = parseFloat(document.getElementById('bInput').value);
    let pessoas = parseInt(document.getElementById('cInput').value);

    const hoje = new Date();
    const nasc = new Date(idade);
    let idadeconver = hoje.getFullYear() - nasc.getFullYear();

    let rendapercapita = renda / pessoas;

    let resultadoDiv = document.getElementById('resultado');

    if (idadeconver >= 16 && rendapercapita <= 1.5) {
        resultadoDiv.innerHTML = `Bem Vindo ao PSG. (0800-777-3622) Sua idade é ${idadeconver} anos.`;
        resultadoDiv.classList.remove('desfavoravel');
        resultadoDiv.classList.add('favoravel');
    } else if (idadeconver < 16) {
        resultadoDiv.innerHTML = "Você Não Tem Idade Suficiente.";
        resultadoDiv.classList.remove('favoravel', 'desfavoravel');
    } else if (rendapercapita > 1.5) {
        resultadoDiv.innerHTML = `Você Ultrapassou O Limite Da Renda Per Capita. Sua idade é ${idadeconver} anos.`;
        resultadoDiv.classList.remove('favoravel');
        resultadoDiv.classList.add('desfavoravel');
    } else {
        resultadoDiv.innerHTML = "Preencha Algum Campo.";
        resultadoDiv.classList.remove('favoravel', 'desfavoravel');
    }
}