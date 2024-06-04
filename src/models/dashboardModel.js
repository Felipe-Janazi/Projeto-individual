
var database = require("../database/config");

function maxGols() {

    var instrucaoSql = `select max(gols),
    username 
    from estatisticas join cadastroUsuario
    on idUsuario = fkUsuario
    group by username;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {

    maxGols,
}