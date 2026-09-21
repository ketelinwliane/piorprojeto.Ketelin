let frustracao = 0;
let tentativas = 0;
let segredoDescoberto = false;
let cliquesAvancar = 0;
let ultimoBotao = null;


// ===============================
// CONTADOR DE FRUSTRAÇÃO
// ===============================

function aumentarFrustracao(valor = 7) {

    frustracao += valor;

    if (frustracao > 99) {
        frustracao = 99;
    }

    document.getElementById("nivel").textContent = frustracao;
}


// ===============================
// TROCA DE TELAS
// ===============================

function proximaTela(id) {

    document.querySelectorAll(".tela").forEach(tela => {
        tela.classList.remove("ativa");
    });

    document.getElementById(id).classList.add("ativa");

    window.scrollTo(0, 0);
}


// ===============================
// INÍCIO
// ===============================

function iniciarCadastro() {

    tentativas++;

    aumentarFrustracao(5);

    proximaTela("telaDados");

    setTimeout(() => {

        alert(
            "ATENÇÃO!\n\n" +
            "Você iniciou o cadastro.\n\n" +
            "Isso talvez tenha sido um erro."
        );

    }, 500);
}


// ===============================
// BOTÕES INICIAIS
// ===============================

function botaoMentiroso() {

    tentativas++;

    aumentarFrustracao(8);

    const mensagens = [

        "Quase.",
        "Não.",
        "Você realmente clicou nisso?",
        "Esse botão não faz isso.",
        "Tente outro.",
        "Essa opção está temporariamente indisponível.",
        "Parabéns! Você não avançou."
    ];

    alert(
        mensagens[
            Math.floor(Math.random() * mensagens.length)
        ]
    );
}


// ===============================
// FORMULÁRIO
// ===============================

function validarDados() {

    tentativas++;
    cliquesAvancar++;

    const nome = document.getElementById("nome");
    const email = document.getElementById("email");

    const erro = document.getElementById("erroDados");


    // Primeira tentativa sempre falha
    if (cliquesAvancar === 1) {

        aumentarFrustracao(10);

        erro.textContent =
            "❌ Erro desconhecido: tente novamente.";

        return;
    }


    // Campo vazio
    if (nome.value.trim() === "") {

        aumentarFrustracao(8);

        erro.textContent =
            "❌ Seu nome está vazio. Isso parece suspeito.";

        return;
    }


    // E-mail
    if (!email.value.includes("@")) {

        aumentarFrustracao(8);

        erro.textContent =
            "❌ E-mail inválido. Talvez seja válido, mas o sistema discorda.";

        return;
    }


    // 30% de chance de rejeitar
    if (Math.random() < 0.30 && !segredoDescoberto) {

        aumentarFrustracao(12);

        erro.textContent =
            "❌ Erro 742: informações aparentemente corretas.";

        return;
    }


    erro.textContent =
        "✔ Tudo errado! Continuando mesmo assim...";


    document.getElementById("resumoNome").textContent =
        nome.value;

    document.getElementById("resumoEmail").textContent =
        email.value;


    setTimeout(() => {

        proximaTela("telaSenha");

    }, 1500);
}


// ===============================
// SENHA
// ===============================

function validarSenha() {

    tentativas++;

    const senha =
        document.getElementById("senha").value;

    const erro =
        document.getElementById("erroSenha");


    if (senha.length === 0) {

        aumentarFrustracao(10);

        erro.textContent =
            "❌ Você não digitou nada. Excelente estratégia.";

        return;
    }


    // Senha secreta
    if (senha === "UX2025!" || segredoDescoberto) {

        segredoDescoberto = true;

        erro.textContent =
            "⚠️ A senha foi aceita. Mas não comemore ainda.";

        setTimeout(() => {

            proximaTela("telaConfirmacao");

        }, 1200);

        return;
    }


    // Regras contraditórias
    if (senha.length < 8) {

        aumentarFrustracao(8);

        erro.textContent =
            "❌ Senha muito curta. Ela precisa ter exatamente 8 caracteres.";

        return;
    }


    if (senha.length >= 8) {

        aumentarFrustracao(10);

        erro.textContent =
            "❌ Senha muito longa. Ela deveria ter menos de 8 caracteres.";

        return;
    }
}


// ===============================
// MOSTRAR SENHA
// ===============================

function mostrarSenha() {

    const campo =
        document.getElementById("senha");

    aumentarFrustracao(5);


    if (campo.type === "password") {

        campo.type = "text";

        alert(
            "👁️ Você revelou sua senha.\n\n" +
            "Agora você sabe que alguém pode estar olhando."
        );

    } else {

        campo.type = "password";
    }
}


// ===============================
// CONFIRMAÇÃO
// ===============================

function confirmarNao() {

    aumentarFrustracao(15);

    alert(
        "Você clicou em NÃO.\n\n" +
        "Mesmo assim, vamos continuar."
    );

    proximaTela("telaFinal");
}


function confirmarSim() {

    aumentarFrustracao(10);

    alert(
        "Você clicou em SIM.\n\n" +
        "Mas o sistema interpretou como NÃO."
    );

    proximaTela("telaDados");
}


function finalizar() {

    tentativas++;

    aumentarFrustracao(5);

    if (!segredoDescoberto) {

        alert(
            "❌ Não foi possível finalizar.\n\n" +
            "O sistema exige que você tenha descoberto " +
            "algo que você ainda não sabe."
        );

        return;
    }


    document.getElementById(
        "frustracaoFinal"
    ).textContent = frustracao;


    document.getElementById(
        "tentativasFinal"
    ).textContent = tentativas;


    proximaTela("telaFinal");
}


// ===============================
// CAMPO QUE APAGA SOZINHO
// ===============================

setInterval(() => {

    const tela =
        document.getElementById("telaDados");

    const nome =
        document.getElementById("nome");


    if (
        tela &&
        tela.classList.contains("ativa") &&
        nome &&
        nome.value.length > 3 &&
        !segredoDescoberto
    ) {

        if (Math.random() < 0.15) {

            nome.value = "";

            aumentarFrustracao(12);

            document.getElementById(
                "erroDados"
            ).textContent =
                "😈 O campo nome decidiu começar uma nova vida.";
        }
    }

}, 5000);


// ===============================
// BOTÃO QUE FOGE
// ===============================

function fugir(botao) {

    aumentarFrustracao(5);

    botao.style.position = "relative";

    botao.style.left =
        Math.floor(Math.random() * 150 - 75) + "px";

    botao.style.top =
        Math.floor(Math.random() * 100 - 50) + "px";

    botao.textContent =
        "NÃO CLIQUE AQUI";

    setTimeout(() => {

        botao.textContent =
            "CONTINUAR";

    }, 700);
}


// ===============================
// ALERTAS ALEATÓRIOS
// ===============================

setInterval(() => {

    const mensagens = [

        "Você ainda está aí?",
        "Esse cadastro está demorando.",
        "Talvez você devesse desistir.",
        "Erro: usuário detectado.",
        "Estamos analisando suas escolhas.",
        "Não faça isso.",
        "Por que você continua?",
        "Quase... provavelmente.",
        "Sistema confuso carregando..."
    ];


    // Só aparece depois de um tempo
    if (frustracao > 20) {

        const mensagem =
            mensagens[
                Math.floor(Math.random() * mensagens.length)
            ];

        console.log("Sistema:", mensagem);
    }

}, 7000);