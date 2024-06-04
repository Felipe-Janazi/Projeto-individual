function entrar() {
    // aguardar();

    var emailVar = input_email.value;
    var senhaVar = input_senha.value;

    if (emailVar == "" || senhaVar == "") {
        div_erro.style.display = "block"
        div_erro.innerHTML = "(Mensagem de erro para todos os campos em branco)";
        finalizarAguardar();
        return false;
    }

    console.log("FORM LOGIN: ", emailVar);
    console.log("FORM SENHA: ", senhaVar);

    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: emailVar,
            senhaServer: senhaVar
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            alert("Login efetuado com sucesso! Redirecionando para tela inicial.")

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));
                sessionStorage.ID_USUARIO = json.id;
                sessionStorage.NOME_USUARIO = json.nome;
                sessionStorage.EMAIL_USUARIO = json.email;

                setTimeout(function () {
                    window.location = "./index.html";
                }, 1000); // apenas para exibir o loading

            });

        } else {

            console.log("Houve um erro ao tentar realizar o login!");

            resposta.text().then(texto => {
                console.error(texto);
                finalizarAguardar(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}

