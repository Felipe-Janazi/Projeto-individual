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
          nomeArtilheiro.innerHTML = resposta[0].username;
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
          nomeGarcom.innerHTML = resposta[0].username;
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
          nomeAgressivo.innerHTML = resposta[0].username;
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
          nomeBrigao.innerHTML = resposta[0].username;
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
          nomeMelhor.innerHTML = resposta[0].username;
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
          nomePeQuente.innerHTML = resposta[0].username;
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

var countRogerio = 0;
function graficoRogerio() {
  
  // Enviando o valor da nova input
  fetch("/dashboard/ultimas/graficoRogerio", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  })
    .then(function (resposta) {
      console.log("resposta: ", resposta);
      
      if (resposta.ok) {
        resposta.json().then((resposta) => {
          console.log(resposta)
          countRogerio += resposta[0].rogerio;
          graficoLuis()
        })
        
      } else {
        // alert ("Já existe este email cadastrado em nosso sistema!");
        throw "Houve um erro ao tentar pegar os dados do grafico Rogerio";
      }
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });
    
    
    return false;
    
    
  }

var countLuis = 0;
function graficoLuis() {

  // Enviando o valor da nova input
  fetch("/dashboard/ultimas/graficoLuis", {
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
          countLuis = resposta[0].luis;
          graficoLugano()
        })

      } else {
        // alert ("Já existe este email cadastrado em nosso sistema!");
        throw "Houve um erro ao tentar pegar os dados do grafico Luis";
      }
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });


  return false;


}

var countLugano = 0;

function graficoLugano() {

  // Enviando o valor da nova input
  fetch("/dashboard/ultimas/graficoLugano", {
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
          countLugano = resposta[0].lugano;
          graficoCalleri()
        })

      } else {
        // alert ("Já existe este email cadastrado em nosso sistema!");
        throw "Houve um erro ao tentar pegar os dados do grafico Lugano";
      }
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });


  return false;


}

var countCalleri = 0;
function graficoCalleri() {

  // Enviando o valor da nova input
  fetch("/dashboard/ultimas/graficoCalleri", {
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
          countCalleri = resposta[0].calleri;
          graficoNestor()
        })

      } else {
        // alert ("Já existe este email cadastrado em nosso sistema!");
        throw "Houve um erro ao tentar pegar os dados do grafico Calleri";
      }
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });


  return false;


}
var countNestor = 0 

function graficoNestor() {

  // Enviando o valor da nova input
  fetch("/dashboard/ultimas/graficoNestor", {
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
          countNestor = resposta[0].nestor;
          graficoLuciano()
        })

      } else {
        // alert ("Já existe este email cadastrado em nosso sistema!");
        throw "Houve um erro ao tentar pegar os dados do grafico Nestor";
      }
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });


  return false;


}

var countLuciano = 0;
function graficoLuciano() {

  // Enviando o valor da nova input
  fetch("/dashboard/ultimas/graficoLuciano", {
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
          var valor = resposta[0];
          countLuciano = resposta[0].luciano;
          graficoRai()
        })

      } else {
        // alert ("Já existe este email cadastrado em nosso sistema!");
        throw "Houve um erro ao tentar pegar os dados do grafico Luciano";
      }
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });


  return false;


}

var countRai = 0;
function graficoRai() {

  // Enviando o valor da nova input
  fetch("/dashboard/ultimas/graficoRai", {
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
          countRai = resposta[0].rai;
          graficoChulapa()
        })

      } else {
        // alert ("Já existe este email cadastrado em nosso sistema!");
        throw "Houve um erro ao tentar pegar os dados do grafico Rai";
      }
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });


  return false;


}

var countChulapa = 0;

function graficoChulapa() {

  // Enviando o valor da nova input
  fetch("/dashboard/ultimas/graficoChulapa", {
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
          countChulapa = resposta[0].chulapa;
          graficoOutros()
        })

      } else {
        // alert ("Já existe este email cadastrado em nosso sistema!");
        throw "Houve um erro ao tentar pegar os dados do grafico Chulapa";
      }
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });


  return false;


}

var countOutros = 0;

function graficoOutros() {

  // Enviando o valor da nova input
  fetch("/dashboard/ultimas/graficoOutros", {
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
          countOutros = resposta[0].outros;
          puxarGrafico()
        })

      } else {
        // alert ("Já existe este email cadastrado em nosso sistema!");
        throw "Houve um erro ao tentar pegar os dados do grafico Outros";
      }
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });


  return false;


}

