function github() {
    window.open("https://github.com/Felipe-Janazi", "_blank")
}

function linkedin() {
    window.open("https://www.linkedin.com/in/felipe-janazi-6443002b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "_blank")
}

function email() {
    window.open("mailto:felipe.janazi@sptech.school", "_blank")
}

function qtdGol() {
    JSON.parse(sessionStorage.AQUARIOS).forEach(item => {
        document.getElementById("maiorQtdGol").innerHTML += `
              ${instrucaoSql}
                `
    });
}