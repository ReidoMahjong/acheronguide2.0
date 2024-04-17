const perguntas = [
    {
        pergunta: "Qual caminho ela segue?",
        opcoes: ["Inexistência", "Destruição", "Erudição", "Caça"],
        resposta: "Inexistência"
    },
    {
        pergunta: "Durante o jogo, a qual facção outros personagens dizem que a Acheron pertence?",
        opcoes: ["Caçadores de Stellaron", "Tolos Mascarados", "Vigias da Galáxia", "Cavaleiros da Beleza"],
        resposta: "Vigias da Galáxia"
    },
    {
        pergunta: "Quem ela derrota ao final da história do update 2.1?",
        opcoes: ["Black Swan", "Aventurine", "Topaz", "Sam"],
        resposta: "Aventurine"
    }
];

let perguntaAtual = 0;

function carregarPergunta() {
    const perguntaElemento = document.getElementById("pergunta");
    const opcoesElemento = document.getElementById("opcoes");

    perguntaElemento.textContent = perguntas[perguntaAtual].pergunta;
    opcoesElemento.innerHTML = "";

    perguntas[perguntaAtual].opcoes.forEach(opcao => {
        const opcaoElemento = document.createElement("input");
        opcaoElemento.type = "radio";
        opcaoElemento.name = "opcao";
        opcaoElemento.value = opcao;
        opcaoElemento.classList.add("opcao");
        opcaoElemento.required = true;

        const labelElemento = document.createElement("label");
        labelElemento.textContent = opcao;

        opcoesElemento.appendChild(opcaoElemento);
        opcoesElemento.appendChild(labelElemento);
    });
}

function verificarResposta() {
    const opcoesSelecionadas = document.querySelectorAll('input[name="opcao"]:checked');
    if (opcoesSelecionadas.length === 0) {
        alert("Por favor, selecione uma opção.");
        return;
    }

    const respostaUsuario = opcoesSelecionadas[0].value;
    const respostaCorreta = perguntas[perguntaAtual].resposta;

    const resultadoElemento = document.getElementById("resultado");
    if (respostaUsuario === respostaCorreta) {
        resultadoElemento.textContent = "Resposta correta!";
    } else {
        resultadoElemento.textContent = `Resposta incorreta. A resposta correta é: ${respostaCorreta}`;
    }

    perguntaAtual++;

    if (perguntaAtual < perguntas.length) {
        carregarPergunta();
    } else {
        resultadoElemento.textContent += " Fim do Jogo!";
    }
}

carregarPergunta();
