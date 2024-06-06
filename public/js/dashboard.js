function github() {
  window.open("https://github.com/Felipe-Janazi", "_blank")
}

function linkedin() {
  window.open("https://www.linkedin.com/in/felipe-janazi-6443002b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "_blank")
}

function email() {
  window.open("mailto:felipe.janazi@sptech.school", "_blank")
}
// PEGANDO A MAIOR QUANTIDADE DE GOLS 

function maxGols() {

  // Enviando o valor da nova input
  fetch("/dashboard/ultimas/maxgols", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  })
    .then(function (resposta) {
      console.log("resposta: ", resposta);

      if (resposta.ok) {
        resposta.json().then((resposta) => {
          console.log(resposta[0])
          nomeArtilheiro.innerHTML = resposta[0].apelido;
          maiorQtdGol.innerHTML = resposta[0].gols;
        })

      } else {
        // alert ("Já existe este email cadastrado em nosso sistema!");
        throw "Houve um erro ao tentar realizar pegar a quantidade de gols!";
      }
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });


  return false;


}

// PEGANDO A MAIOR QUANTIDADE DE ASSISTENCIAS

function maxAssistencia() {

  // Enviando o valor da nova input
  fetch("/dashboard/ultimas/maxassistencias", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  })
    .then(function (resposta) {
      console.log("resposta: ", resposta);

      if (resposta.ok) {
        resposta.json().then((resposta) => {
          console.log(resposta[0])
          nomeGarcom.innerHTML = resposta[0].apelido;
          maiorQtdAssistencia.innerHTML = resposta[0].assistencias;
        })

      } else {
        // alert ("Já existe este email cadastrado em nosso sistema!");
        throw "Houve um erro ao tentar pegar a maior quantidade de assistencias";
      }
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });


  return false;


}

function maxAmarelo() {

  // Enviando o valor da nova input
  fetch("/dashboard/ultimas/maxamarelo", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  })
    .then(function (resposta) {
      console.log("resposta: ", resposta);

      if (resposta.ok) {
        resposta.json().then((resposta) => {
          console.log(resposta[0])
          nomeAgressivo.innerHTML = resposta[0].apelido;
          maiorQtdAmarelo.innerHTML = resposta[0].cartoesAmarelos;
        })

      } else {
        // alert ("Já existe este email cadastrado em nosso sistema!");
        throw "Houve um erro ao tentar pegar a maior quantidade de cartões amarelos";
      }
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });


  return false;


}

function maxVermelho() {

  // Enviando o valor da nova input
  fetch("/dashboard/ultimas/maxvermelho", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  })
    .then(function (resposta) {
      console.log("resposta: ", resposta);

      if (resposta.ok) {
        resposta.json().then((resposta) => {
          console.log(resposta[0])
          nomeBrigao.innerHTML = resposta[0].apelido;
          maiorQtdVermelho.innerHTML = resposta[0].cartoesVermelhos;
        })

      } else {
        // alert ("Já existe este email cadastrado em nosso sistema!");
        throw "Houve um erro ao tentar pegar a maior quantidade de cartões vermelhos";
      }
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });


  return false;


}

function melhorJogador() {

  // Enviando o valor da nova input
  fetch("/dashboard/ultimas/melhorjogador", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  })
    .then(function (resposta) {
      console.log("resposta: ", resposta);

      if (resposta.ok) {
        resposta.json().then((resposta) => {
          console.log(resposta[0])
          nomeMelhor.innerHTML = resposta[0].apelido;
          maiorQtdMelhor.innerHTML = resposta[0].melhorDoMundo;
        })

      } else {
        // alert ("Já existe este email cadastrado em nosso sistema!");
        throw "Houve um erro ao tentar pegar a maior quantidade de the best ";
      }
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });


  return false;


}

function maisTitulos() {

  // Enviando o valor da nova input
  fetch("/dashboard/ultimas/maistitulos", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  })
    .then(function (resposta) {
      console.log("resposta: ", resposta);

      if (resposta.ok) {
        resposta.json().then((resposta) => {
          console.log(resposta[0])
          nomePeQuente.innerHTML = resposta[0].apelido;
          maiorQtdTitulo.innerHTML = resposta[0].SomaDosTitulos;
        })

      } else {
        // alert ("Já existe este email cadastrado em nosso sistema!");
        throw "Houve um erro ao tentar pegar a maior quantidade de the best ";
      }
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });


  return false;


}



