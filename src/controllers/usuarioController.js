var usuarioModel = require("../models/usuarioModel");
// var aquarioModel = require("../models/aquarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);



                        res.json({
                            id: resultadoAutenticar[0].idUsuario,
                            email: resultadoAutenticar[0].email,
                            nome: resultadoAutenticar[0].username,
                            senha: resultadoAutenticar[0].senha
                            // aquarios: resultadoAquarios
                        });


                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var jogador = req.body.jogadorServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (jogador == undefined) {
        res.status(400).send("Sua jogador está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, email, senha, jogador)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function cadastrarEstatisticas(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html

    var apelido = req.body.apelidoServer;
    var gols = req.body.golsServer;
    var assistencias = req.body.assistenciasServer;
    var amarelos = req.body.amarelosServer;
    var vermelhos = req.body.vermelhoServer;
    var melhor = req.body.melhorServer;
    var id = req.body.idServer;

    // Faça as validações dos valores
    if (gols == undefined) {
        res.status(400).send("Seus gols está indefinido!");
    } else if (apelido == undefined) {
        res.status(400).send("Seus gols está indefinido!");
    } else if (assistencias == undefined) {
        res.status(400).send("Suas assistencias está indefinida!");
    } else if (amarelos == undefined) {
        res.status(400).send("Seus amarelos está indefinido!");
    } else if (vermelhos == undefined) {
        res.status(400).send("Seus vermelhos está indefinido!");
    } else if (melhor == undefined) {
        res.status(400).send("Seu melhor está indefinido!");
    } else if (id == undefined) {
        res.status(400).send("Seu id está indefinido!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrarEstatisticas(id, apelido, gols, assistencias, amarelos, vermelhos, melhor)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function cadastrarTitulos(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html

    var apelido = req.body.apelidoServer;
    var estaduais = req.body.estaduaisServer;
    var brasileirao = req.body.brasileiraoServer;
    var cdb = req.body.cdbServer;
    var libertadores = req.body.libertadoresServer;
    var mundial = req.body.mundialServer;
    var sula = req.body.sulaServer;
    var recopa = req.body.recopaServer;
    var supercopa = req.body.supercopaServer;
    var copa = req.body.copaServer;
    var id = req.body.idServer;
    // var titulos = req.body.titulosServer;

    // Faça as validações dos valores
    if (estaduais == undefined) {
        res.status(400).send("Seus gols está indefinido!");
    } else if (brasileirao == undefined) {
        res.status(400).send("Suas assistencias está indefinida!");
    } else if (apelido == undefined) {
        res.status(400).send("Suas assistencias está indefinida!");
    } else if (cdb == undefined) {
        res.status(400).send("Seus amarelos está indefinido!");
    } else if (libertadores == undefined) {
        res.status(400).send("Seus vermelhos está indefinido!");
    } else if (mundial == undefined) {
        res.status(400).send("Seu melhor está indefinido!");
    } else if (sula == undefined) {
        res.status(400).send("Seu melhor está indefinido!");
    } else if (recopa == undefined) {
        res.status(400).send("Seu melhor está indefinido!");
    } else if (supercopa == undefined) {
        res.status(400).send("Seu melhor está indefinido!");
    } else if (copa == undefined) {
        res.status(400).send("Seu melhor está indefinido!");
    } else if (id == undefined) {
        res.status(400).send("Seu id está indefinido!");
    } else {
    // } else if (titulos == undefined) {
    //     res.status(400).send("Seu id está indefinido!");
    // } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrarTitulos(id, apelido, estaduais, brasileirao, cdb, libertadores, mundial, sula, recopa,supercopa, copa)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    autenticar,
    cadastrar,
    cadastrarEstatisticas,
    cadastrarTitulos
}