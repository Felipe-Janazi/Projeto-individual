
var database = require("../database/config");

function maxGols() {

    var instrucaoSql = `select max(gols) as gols,
    apelido 
    from estatisticas
    group by apelido, gols
    order by gols desc
    limit 1;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function maxAssistencia() {

    var instrucaoSql = `select max(assistencias) as assistencias,
    apelido 
    from estatisticas 
    group by apelido, assistencias
    order by assistencias desc
    limit 1;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function maxAmarelo() {

    var instrucaoSql = `select max(cartoesAmarelos) as cartoesAmarelos,
    apelido 
    from estatisticas 
    group by apelido, cartoesAmarelos
    order by cartoesAmarelos desc
    limit 1;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function maxVermelho() {

    var instrucaoSql = `select max(cartoesVermelhos) as cartoesVermelhos,
    apelido 
    from estatisticas
    group by apelido, gols
    order by cartoesVermelhos desc
    limit 1;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function melhorJogador() {

    var instrucaoSql = `  select max(melhorDoMundo) as melhorDoMundo,
    apelido 
    from estatisticas 
    group by apelido, melhorDoMundo
    order by melhorDoMundo desc
    limit 1;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function maisTitulos() {

    var instrucaoSql = `select sum(estaduais + brasileiroes + copaDoBrasil + libertadores + mundial + sulAmericana + recopa + supercopa + copaDoMundo) 
    as SomaDosTitulos, 
    idTitulos, 
    apelido
    from Titulos join cadastroUsuario
    on idUsuario = fkUsuario
    group by idTitulos, apelido
    order by sum(estaduais + brasileiroes + copaDoBrasil + libertadores + mundial + sulAmericana + recopa + supercopa + copaDoMundo) desc
    limit 1;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function graficoRogerio() {

    var instrucaoSql = `select count(jogadorPreferido) as rogerio from cadastroUsuario
    where jogadorPreferido = 'rogerio';`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function graficoLuis() {

    var instrucaoSql = `select count(jogadorPreferido) as luis from cadastroUsuario
    where jogadorPreferido = 'luis';`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function graficoLugano() {

    var instrucaoSql = `select count(jogadorPreferido) as lugano from cadastroUsuario
    where jogadorPreferido = 'lugano';`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function graficoCalleri() {

    var instrucaoSql = `select count(jogadorPreferido) as calleri from cadastroUsuario
    where jogadorPreferido = 'calleri';`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function graficoNestor() {

    var instrucaoSql = `select count(jogadorPreferido) as nestor from cadastroUsuario
    where jogadorPreferido = 'nestor';`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function graficoLuciano() {

    var instrucaoSql = `select count(jogadorPreferido) as luciano from cadastroUsuario
    where jogadorPreferido = 'luciano';`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function graficoRai() {

    var instrucaoSql = `select count(jogadorPreferido) as rai from cadastroUsuario
    where jogadorPreferido = 'rai';`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function graficoChulapa() {

    var instrucaoSql = `select count(jogadorPreferido) as chulapa from cadastroUsuario
    where jogadorPreferido = 'chulapa';`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function graficoOutros() {

    var instrucaoSql = `select count(jogadorPreferido) as outros from cadastroUsuario
    where jogadorPreferido = 'outro';`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
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