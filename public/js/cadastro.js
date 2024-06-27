
  function cadastrar() {

    var nomeVar = input_username.value;
    var emailVar = input_email.value;
    var senhaVar = input_senha.value;
    var jogadorVar = select_jogador.value;

    if (
      nomeVar == "" ||
      emailVar == "" ||
      senhaVar == "" ||
      jogadorVar == ""
    ) {
        alert("Preencha todos os campos para realizar o cadastro");

      return false;
    } else {
      if (emailVar.indexOf('@') <= 0) {
        alert("Seu email precisa possui um @")
      } else if(nomeVar.length < 2) {
        alert("Informe um nome com ao menos 2 caracteres")
      } else if (senhaVar.length < 6){
        alert("Sua senha deve possuir ao menos 6 letras")
      } else {

    // Enviando o valor da nova input
      fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // crie um atributo que recebe o valor recuperado aqui
          // Agora vá para o arquivo routes/usuario.js
          nomeServer: nomeVar,
          emailServer: emailVar,
          senhaServer: senhaVar,
          jogadorServer: jogadorVar
        }),
      })
        .then(function (resposta) {
          console.log("resposta: ", resposta);

          if (resposta.ok) {

              alert("Cadastro realizado com sucesso! Redirecionando para tela de Login...");

            setTimeout(() => {
              window.location = "../Login.html";
            }, "1000");

          } else {
            alert ("Já existe este email cadastrado em nosso sistema!");
            throw "Houve um erro ao tentar realizar o cadastro!";
          }
        })
        .catch(function (resposta) {
          console.log(`#ERRO: ${resposta}`);
        });


      return false;
  }
}
  }