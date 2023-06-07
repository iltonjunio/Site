function calcularAdmissao() {
    let idade = document.getElementById('aInput').value;
    let renda = parseFloat(document.getElementById('bInput').value);
    let pessoas = parseInt(document.getElementById('cInput').value);
    const hoje = new Date();
    const nasc = new Date(idade);
    let idadeconver = hoje.getFullYear() - nasc.getFullYear();
    const mes = hoje.getMonth() - nasc.getMonth()
    if (mes < 0 || (mes === 0 && hoje.getDate() < nasc.getDate())) {
        idadeconver--
    }
    let rendapercapita = renda / pessoas;
    console.log(rendapercapita)
    let resultadoDiv = document.getElementById('resultado');

    if (idadeconver >= 16 && rendapercapita <= 1980) {
        resultadoDiv.innerHTML = `Bem Vindo ao PSG. (0800-777-3622) Sua idade é ${idadeconver} anos.`;
        resultadoDiv.classList.remove('desfavoravel');
        resultadoDiv.classList.add('favoravel');

    } else if (idadeconver < 16) {
        resultadoDiv.innerHTML = "Você Não Tem Idade Suficiente.";
        resultadoDiv.classList.remove('favoravel', 'desfavoravel');

    } else if (rendapercapita > 1980) {
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
    let pr1 = parseInt(document.querySelector('input[name="presenca1"]:checked').value)
    let pr2 = parseInt(document.querySelector('input[name="presenca2"]:checked').value)
    let pr3 = parseInt(document.querySelector('input[name="presenca3"]:checked').value)
    let pr4 = parseInt(document.querySelector('input[name="presenca4"]:checked').value)
    let pr5 = parseInt(document.querySelector('input[name="presenca5"]:checked').value)
    let pr6 = parseInt(document.querySelector('input[name="presenca6"]:checked').value)
    let pr7 = parseInt(document.querySelector('input[name="presenca7"]:checked').value)
    let pr8 = parseInt(document.querySelector('input[name="presenca8"]:checked').value)
    let pr9 = parseInt(document.querySelector('input[name="presenca9"]:checked').value)
    let pr10 = parseInt(document.querySelector('input[name="presenca10"]:checked').value)
    let pr11 = parseInt(document.querySelector('input[name="presenca11"]:checked').value)
    let pr12 = parseInt(document.querySelector('input[name="presenca12"]:checked').value)
    let pre = (pr1 + pr2 + pr3 + pr4 + pr5 + pr6 + pr7 + pr8 + pr9 + pr10 + pr11 + pr12)
    console.log("PRE: " + pre)
    let prm = ((pre / 12) * 100)
    return prm
}

function avaliarAluno() {
    let media = parseFloat(calcularMedia());
    let presencas = parseFloat(calcularPresencas());

    console.log("Presenças: " + media)
    console.log("Presenças: " + presencas)

    resultado = document.getElementById("resultado");

    if (media >= 6.0 && presencas >= 75) {
        resultado.textContent = "Aluno Aprovado!";

    }
    else if (media >= 5 && media < 6 && presencas >= 75) {
        resultado.textContent = "Aluno de Recuperação!";
    }
    else {
        resultado.textContent = "Aluno Reprovado!";
    }
}
//-------------------------------------------
function idade() {
    let idade = parseInt(document.querySelector('input[name="presenca1"]:checked').value)

    if (idade >= 6 && idade <= 10) {
        console.log("Infantil!")
        document.getElementById("resultado").textContent = "infatil: " + idade.toFixed(2);
        return idade
    }
    else if (idade >= 11 && idade <= 15) {
        console.log("Infantil juvenil!")
        document.getElementById("resultado").textContent = "Infantil juvenil!:" + idade.toFixed(2);
        return idade
    }
    else if (idade >= 16 && idade <= 21) {
        console.log("Juvenil!")
        document.getElementById("resultado").textContent = "Juvenil!: " + idade.toFixed(2);
        return idade
    }
    else if (idade >= 22 && idade <= 35) {
        console.log("Adulto!")
        document.getElementById("resultado").textContent = "Adulto: " + idade.toFixed(2);
        return idade
    }
    else {
        console.log("Atleta não apto a competir!")
        document.getElementById("resultado").textContent = "Atleta não apto a competir: " + idade.toFixed(2);
        return idade
    }
}

function idade1() {
    const idade = ("Digite sua idade")
    if (idade >= 6 && idade <= 10) {
        console.log("Infantil!")
        document.getElementById("resultado").textContent = "infatil: " + idade.toFixed(2);
        return idade
    }
    if (idade >= 11 && idade <= 15) {
        console.log("Infantil juvenil!")
        document.getElementById("resultado").textContent = "Infantil juvenil!:" + idade.toFixed(2);
        return idade
    }
    if (idade >= 16 && idade <= 21) {
        console.log("Juvenil!")
        document.getElementById("resultado").textContent = "Juvenil!: " + idade.toFixed(2);
        return idade
    }
    if (idade >= 22 && idade <= 35) {
        console.log("Adulto!")
        document.getElementById("resultado").textContent = "Adulto: " + idade.toFixed(2);
        return idade
    }
    if (idade < 6 || idade > 35) {
        console.log("Atleta não apto a competir!")
        document.getElementById("resultado").textContent = "Atleta não apto a competir: " + idade.toFixed(1);
        return idade
    }
}
//----------------------------------------------------------------------
function uf() {
    let uf = ("uf:").toUpperCase()
    console.log(uf)

    switch (uf) {

        case "DF":
            console.log("Distrito Federal*")
            document.getElementById("resultado-").textContent = "Distrito Federal* " + uf.toFixed(1);
            return uf
            console.log("Brasília")
            document.getElementById("resultado-").textContent = "Brasília " + uf.toFixed(1);
            return uf
            console.log("centro-oeste*")
            document.getElementById("resultado-").textContent = "centro-oeste" + uf.toFixed(1);
            return uf
            break

        case "AC":
            console.log("Acre")
            console.log("Rio Branco")
            console.log("norte")
            break

        case "AL":
            console.log("Alagoas")
            console.log("Maceió")
            console.log("nordeste")
            break

        case "AP":
            console.log("Amapá")
            console.log("Macapá")
            console.log("norte")
            break

        case "AM":
            console.log("Amazonas")
            console.log("Manaus")
            console.log("norte")
            break

        case "BA":
            console.log("Bahia")
            console.log("Salvador")
            console.log("nordeste")
            break

        case "CE":
            console.log("Ceará")
            console.log("Fortaleza")
            console.log("nordeste")
            break

        case "ES":
            console.log("Espírito Santo")
            console.log("Vitória")
            console.log("sul")
            break

        case "GO":
            console.log("Goiás")
            console.log("Goiânia")
            console.log("centro-oeste")
            break

        case "MA":
            console.log("Maranhão")
            console.log("São Luís")
            console.log("nordeste")
            break

        case "MT":
            console.log("Mato Grosso")
            console.log("Cuiabá")
            console.log("centro-oeste")
            break

        case "MS":
            console.log("Mato Grosso Do Sul")
            console.log("Campo Grande")
            console.log("centro-oeste")
            break

        case "MG":
            console.log("Minas Gerais")
            console.log("Belo Horizonte")
            console.log("sudeste")
            break

        case "PA":
            console.log("Pará")
            console.log("Belém")
            console.log("norte")
            break

        case "PB":
            console.log("Paraíba")
            console.log("João Pessoa")
            console.log("nordeste")
            break

        case "PR":
            console.log("Paraná")
            console.log("Curitiba")
            console.log("sul")
            break

        case "PE":
            console.log("Pernambuco")
            console.log("Recife")
            console.log("nordeste")
            break

        case "PI":
            console.log("Piauí")
            console.log("Teresina")
            console.log("nordeste")
            break

        case "RJ":
            console.log("Rio De Janeiro")
            console.log("Rio de Janeiro")
            console.log("sudeste")
            break

        case "RN":
            console.log("Rio Grande Do Norte")
            console.log("Natal")
            console.log("nordeste")
            break

        case "RS":
            console.log("Rio Grande Do Sul")
            console.log("Porto Alegre")
            console.log("sul")
            break

        case "RO":
            console.log("Rondônia")
            console.log("Porto Velho")
            console.log("norte")
            break

        case "RR":
            console.log("Roraima")
            console.log("Boa Vista")
            console.log("norte")
            break

        case "SC":
            console.log("Santa Catarina")
            console.log("Florianópolis")
            console.log("sul")
            break

        case "SP":
            console.log("São Paulo")
            console.log("São Paulo")
            console.log("sudeste")
            break

        case "SE":
            console.log("Sergipe")
            console.log("Aracaju")
            console.log("nordeste")
            break

        case "TO":
            console.log("Tocantins")
            console.log("Palmas")
            console.log("norte")
            break

        default:
            console.log("Uf não encontratada")

    }
}
//--------------------------------------
//chat


function casa() {
    let name = document.getElementById('Personagem').value
    
    switch(name) {
        case ('Sibila Trelawney'):
        case ('Siblia'):
            document.getElementById('resultado1').innerHTML = ('Boas Vindas A Corvinal')
            break
        case ('Cho Chang'):
        case ('Cho'):
            document.getElementById('resultado1').innerHTML = ('Boas Vindas A Corvinal')
            break
        case ('Peter Pettigrew'):
        case ('Peter'):
            document.getElementById('resultado1').innerHTML = ('Boas Vindas A Grifinória')
            break
        case ('Ninfadora Tonks'):
        case ('Ninfadora'):
            document.getElementById('resultado1').innerHTML = ('Boas Vindas A Lufa-Lufa')
            break
        case ('Narcisa Malfoy'):
        case ('Narcisa'):
            document.getElementById('resultado1').innerHTML = ('Boas Vindas A Sonserina')
            break
        default:
            document.getElementById('resultado1').innerHTML = ('Personagem Não Encontrado!!!')
    }
}

//-----------------------------------------------------