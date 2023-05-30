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
//-----------------------exercicio 2----------------------
function calcularMedia() {
    nota1 = parseFloat(document.getElementById("nota1").value);
    nota2 = parseFloat(document.getElementById("nota2").value);
    nota3 = parseFloat(document.getElementById("nota3").value);

    let media = (nota1 + nota2 + nota3) / 3;

    document.getElementById("resultado").textContent = "Média: " + media.toFixed(2);
    return media
}

function calcularPresencas() {
        let pr1 = document.querySelector('input[name="presenca1]:checked').value
        let pr2 = document.querySelector('input[name="presenca2]:checked').value
        let pr3 = document.querySelector('input[name="presenca3]:checked').value
        let pr4 = document.querySelector('input[name="presenca4]:checked').value
        let pr5 = document.querySelector('input[name="presenca5]:checked').value
        let pr6 = document.querySelector('input[name="presenca6]:checked').value
        let pr7 = document.querySelector('input[name="presenca7]:checked').value
        let pr8 = document.querySelector('input[name="presenca8]:checked').value
        let pr9 = document.querySelector('input[name="presenca9]:checked').value
        let pr10 = document.querySelector('input[name="presenca10]:checked').value
        let pr11 = document.querySelector('input[name="presenca11]:checked').value
        let pr12 = document.querySelector('input[name="presenca12]:checked').value
        let pre = (pr1 + pr2 + pr3 + pr4 + pr5 + pr6 + pr7 + pr8 + pr9 + pr10 + pr11 + pr12)
        let prm = ((pre / 12) * 100)
        return prm
    }

    function avaliarAluno() {
        let media = parseFloat(calcularMedia());
        presencas = parseFloat(calcularPresencas());

        resultado = document.getElementById("resultado");

        if (media >= 6.0 && presencas >= 75) {
            resultado.textContent = "Aluno Aprovado!";
        } else {
            resultado.textContent = "Aluno Reprovado!";
        }
}

//-----------------------------------------------------------------------------
function media_alunos() {
    let nota1 = document.getElementById('nota1').value;
    let nota2 = document.getElementById('nota2').value;
    let nota3 = document.getElementById('nota3').value;
    media_ponderada = ((nota1 + nota2 + nota3) / 3).toFixed(2);
    
    return media_ponderada;
}

function situacao_aluno() {
    let veio = document.getElementsByClassName('vieram');
    let vieram = 0.0;

    for (let index = 0; index < veio.length; index++) {
        if (veio[index].checked == true) {
            vieram += parseFloat(veio[index].value);
        }
    }
    percentual = (vieram / 12).toFixed(2);

    return percentual;
}

function calcular() {
    if (media_alunos() < 0) {
        document.getElementById('calculofeito').innerHTML = ('Insira Um Valor Valido Nas Notas!')
        return;
    }
    if (media_alunos() == 0.0 || situacao_aluno() == 0.0) {
        document.getElementById('calculofeito').innerHTML = ('Insira Mais De Uma Opção Acima')
        return;
    }
    if (media_alunos() >= 6.0 && situacao_aluno() >= 75.0) {
        document.getElementById('calculofeito').innerHTML = ('Parabéns!!! Este Aluno Esta Aprovado')
    } else {
        document.getElementById('calculofeito').innerHTML = ('Não Foi Desta Vez!!! Este Aluno Esta Reprovado')
    }
}