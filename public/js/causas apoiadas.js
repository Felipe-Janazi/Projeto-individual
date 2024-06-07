function validarSessao() {

    var nome = sessionStorage.NOME_USUARIO; 

    if (nome != undefined) {

        document.getElementById("botaoLogin").style.display="none";
        document.getElementById("botaoCadastro").style.display="none";
        document.getElementById("textoUl").style.marginRight = "230px";

    }
}