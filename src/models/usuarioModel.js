var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT idUsuario, username, email, jogadorPreferido senha FROM cadastroUsuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, email, senha, jogador) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO cadastroUsuario (username, email, senha, jogadorPreferido) VALUES ('${nome}', '${email}', '${senha}', '${jogador}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrarEstatisticas(id, apelido, gols, assistencias, amarelos, vermelhos, melhor) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarEstatisticas():", id, apelido, gols, assistencias, amarelos, vermelhos, melhor);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO estatisticas (fkUsuario, apelido, gols, assistencias, cartoesAmarelos, cartoesVermelhos, melhorDoMundo) VALUES ('${id}', '${apelido}', '${gols}', '${assistencias}', '${amarelos}', '${vermelhos}', '${melhor}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function cadastrarTitulos(id, apelido, estaduais, brasileirao, cdb, libertadores, mundial, sula, recopa,supercopa, copa) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarTitulos():", id, apelido, estaduais, brasileirao, cdb, libertadores, mundial, sula, recopa,supercopa, copa);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO Titulos (fkUsuario, apelido, estaduais, brasileiroes, copaDoBrasil, libertadores, mundial, sulAmericana, recopa, supercopa, copaDoMundo) VALUES ('${id}', '${apelido}','${estaduais}', '${brasileirao}', '${cdb}', '${libertadores}', '${mundial}', '${sula}', '${recopa}', '${supercopa}', '${copa}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar,
    cadastrarEstatisticas,
    cadastrarTitulos
};