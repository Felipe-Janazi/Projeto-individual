var dashboardModel = require("../models/dashboardModel");

function maxGols(req, res){
    dashboardModel.maxGols().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado da segunda pergunta!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as respostas: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function maxAssistencia(req, res){
    dashboardModel.maxAssistencia().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado nas assistencias!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as respostas: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function maxAmarelo(req, res){
    dashboardModel.maxAmarelo().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado nos cartões amarelos!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as respostas: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function maxVermelho(req, res){
    dashboardModel.maxVermelho().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado nos cartões vermelhos!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as respostas: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function melhorJogador(req, res){
    dashboardModel.melhorJogador().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado no melhor jogador!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as respostas: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function maisTitulos(req, res){
    dashboardModel.maisTitulos().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado na quantidade de titulos!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as respostas: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function graficoRogerio(req, res){
    dashboardModel.graficoRogerio().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado para grafico Rogerio!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as respostas: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function graficoLuis(req, res){
    dashboardModel.graficoLuis().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado para grafico Luis!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as respostas: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function graficoLugano(req, res){
    dashboardModel.graficoLugano().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado para grafico Lugano!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as respostas: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function graficoCalleri(req, res){
    dashboardModel.graficoCalleri().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado para grafico Calleri!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as respostas: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function graficoNestor(req, res){
    dashboardModel.graficoNestor().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado para grafico Nestor!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as respostas: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function graficoLuciano(req, res){
    dashboardModel.graficoLuciano().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado para grafico Luciano!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as respostas: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function graficoRai(req, res){
    dashboardModel.graficoRai().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado para grafico Rai!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as respostas: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function graficoChulapa(req, res){
    dashboardModel.graficoChulapa().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado para grafico Chulapa!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as respostas: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function graficoOutros(req, res){
    dashboardModel.graficoOutros().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado para grafico Outros!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as respostas: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    maxGols,
    maxAssistencia,
    maxAmarelo,
    maxVermelho,
    melhorJogador,
    maisTitulos,
    graficoRogerio,
    graficoLuis,
    graficoLugano,
    graficoCalleri,
    graficoNestor,
    graficoLuciano,
    graficoRai,
    graficoChulapa,
    graficoOutros
}
