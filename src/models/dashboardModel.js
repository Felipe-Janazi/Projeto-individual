
var database = require("../database/config");

function maxGols() {

    var instrucaoSql = `select max(gols) as gols,
    username 
    from estatisticas join cadastroUsuario
    on idUsuario = fkUsuario
    group by username
    order by gols desc
    limit 1;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function maxAssistencia() {

    var instrucaoSql = `select max(assistencias) as assistencias,
    username 
    from estatisticas join cadastroUsuario
    on idUsuario = fkUsuario
    group by username
    order by assistencias desc
    limit 1;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function maxAmarelo() {

    var instrucaoSql = `select max(cartoesAmarelos) as cartoesAmarelos,
    username 
    from estatisticas join cadastroUsuario
    on idUsuario = fkUsuario
    group by username
    order by cartoesAmarelos desc
    limit 1;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function maxVermelho() {

    var instrucaoSql = `select max(cartoesVermelhos) as cartoesVermelhos,
    username 
    from estatisticas join cadastroUsuario
    on idUsuario = fkUsuario
    group by username
    order by cartoesVermelhos desc
    limit 1;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function melhorJogador() {

    var instrucaoSql = `select max(melhorDoMundo) as melhorDoMundo,
    username 
    from estatisticas join cadastroUsuario
    on idUsuario = fkUsuario
    group by username
    order by melhorDoMundo desc
    limit 1;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function maisTitulos() {

    var instrucaoSql = `select max(totalTitulos) as totalTitulos,
    username
    from Titulos join cadastroUsuario
        on idUsuario = fkUsuario
        group by username
        order by totalTitulos desc
        limit 1;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {

    maxGols,
    maxAssistencia, 
    maxAmarelo, 
    maxVermelho,
    melhorJogador,
    maisTitulos
}