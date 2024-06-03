var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 3000)

function proximaImg() {
    cont++

    if (cont > 3) {
        cont = 1
    }

    document.getElementById('radio' + cont).checked = true
}

function validarSessao() {

    var nome = sessionStorage.NOME_USUARIO; 

    if (nome != undefined) {

        document.getElementById("botaoLogin").style.display="none";
        document.getElementById("botaoCadastro").style.display="none";
        document.getElementById("textoUl").style.marginRight = "230px";
    }
}

function github() {
    window.open("https://github.com/Felipe-Janazi", "_blank")
}

function linkedin() {
    window.open("https://www.linkedin.com/in/felipe-janazi-6443002b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "_blank")
}

function email() {
    window.open("mailto:felipe.janazi@sptech.school", "_blank")
}