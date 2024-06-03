// LISTAS UTILIZADAS
var lista_titulos = [];
var lista_estatisticas = [];

function simular() {

    // QUANTIDADE DE PARTIDAS E LESÕES QUE VOCÊ TEVE NA CARREIRA 

    var apelido = input_apelido.value;
    var anos = Number(input_anos.value);
    var area = select_area.value;

    var qtdEstaduais = 0;
    var qtdBrasileirao = 0;
    var qtdCdb = 0;
    var qtdLibertadores = 0;
    var qtdMundial = 0;
    var qtdSula = 0;
    var qtdRecopa = 0;
    var qtdSupercopa = 0;
    var qtdCopa = 0

    var passagemMundial = 0;
    var passagemRecopa = 0;
    var passagemSupercopa = 0;
    var passagemCopa = 0;


    // TODAS AS ESTASTISTICAS DOS GOLEIROS
    var premioTheBest = 0;
    var penaltis = 0;
    
    // ESTASTISTICAS DOS JOGADORES DE LINHA
    var bolaDeOuro = 0;
    
    // ESTASTATISTICAS DE TECNICO
    var theBestTecnico = 0;
    
    // ESTASTISTICAS GERAIS
    var cartaoA = 0;
    var cartaoV = 0;
    var qtdGol = 0;
    var qtdAssistencia = 0;

    if (anos == '' || apelido == '' || area == '') {

        alert("Informe todos os campos corretamente")
    } else {

        if (anos < 1 || anos > 25) {
            alert("Você não pode jogar menos que uma temporada ou mais do que 25")
        } else {

            for (var cont = 1; cont <= anos; cont++) {

                var estaduais = (Math.random() * 100).toFixed(0);
                if (estaduais > 60) {
                    qtdEstaduais++;
                }

                var brasileirao = (Math.random() * 100).toFixed(0)
                if (brasileirao > 75) {
                    qtdBrasileirao++
                    passagemSupercopa++
                }


                var cdb = (Math.random() * 100).toFixed(0)
                if (cdb > 80) {
                    qtdCdb++
                    passagemSupercopa++
                }

                var libertadores = (Math.random() * 100).toFixed(0)
                if (libertadores > 90) {
                    qtdLibertadores++
                    passagemMundial++
                    passagemRecopa++;
                }

                var mundial = (Math.random() * 100).toFixed(0)
                if (mundial > 50 && passagemMundial > 0) {
                    qtdMundial++
                    passagemMundial = 0;
                } else {
                    passagemMundial = 0;
                }


                var sula = (Math.random() * 100).toFixed(0)
                if (sula > 70 && passagemMundial == 0) {
                    qtdSula++
                    passagemRecopa++;
                }

                var recopa = (Math.random() * 100).toFixed(0)
                console.log(recopa)
                if (recopa > 50 && passagemRecopa > 0) {
                    qtdRecopa++
                    passagemRecopa = 0;
                } else {
                    passagemRecopa = 0;
                }
                var supercopa = (Math.random() * 100).toFixed(0)
                if (supercopa > 50 && passagemSupercopa > 0) {
                    qtdSupercopa++
                    passagemSupercopa = 0;
                } else {
                    passagemSupercopa = 0;
                }

                passagemCopa++
                var copa = (Math.random() * 100).toFixed(0)
                if (copa > 90 && passagemCopa == 4) {
                    qtdCopa++
                    passagemCopa = 0;
                }

                if (passagemCopa >= 4) {
                    passagemCopa = 0;
                }

                //  ESTASTISTICAS DOS GOLEIRO

                if (area == "goleiro") {

                    var Rpenalti = Number((Math.random() * 5).toFixed(0));
                    console.log(Rpenalti)
                    penaltis += Rpenalti

                    var theBest = (Math.random() * 100).toFixed(0);
                    if (theBest > 97) {
                        premioTheBest++;
                    }

                    var RcartaoA = Number((Math.random() * 2).toFixed(0));
                    cartaoA += RcartaoA

                    var RcartaoV = Number((Math.random() * 1).toFixed(0))
                    cartaoV += RcartaoV

                    var ceni = (Math.random() * 100).toFixed(0);
                    if (ceni == 100) {
                        qtdGol += 100;
                    }
                    var RqtdGol = Number((Math.random() * 1).toFixed(0));
                    qtdGol += RqtdGol

                    var RqtdAssistencia = Number((Math.random() * 1).toFixed(0));
                    qtdAssistencia += RqtdAssistencia



                } else if (area == 'zaga') {

                    var RbolaDeOuro = (Math.random() * 100).toFixed(0);
                    if (RbolaDeOuro > 98) {
                        bolaDeOuro++;
                    }

                    var RcartaoA = Number((Math.random() * 7).toFixed(0));
                    cartaoA += RcartaoA

                    var RcartaoV = Number((Math.random() * 3).toFixed(0))
                    cartaoV += RcartaoV

                    var RqtdGol = Number((Math.random() * 10).toFixed(0));
                    qtdGol += RqtdGol

                    var RqtdAssistencia = Number((Math.random() * 10).toFixed(0));
                    qtdAssistencia += RqtdAssistencia

                } else if (area == 'meio-campo') {

                    var RbolaDeOuro = (Math.random() * 100).toFixed(0);
                    if (RbolaDeOuro > 92) {
                        bolaDeOuro++;
                    }

                    var RcartaoA = Number((Math.random() * 5).toFixed(0));
                    cartaoA += RcartaoA

                    var RcartaoV = Number((Math.random() * 2).toFixed(0))
                    cartaoV += RcartaoV

                    var RqtdGol = Number((Math.random() * 20).toFixed(0));
                    qtdGol += RqtdGol

                    var RqtdAssistencia = Number((Math.random() * 30).toFixed(0));
                    qtdAssistencia += RqtdAssistencia

                } else if (area == 'ataque') {

                    var RbolaDeOuro = (Math.random() * 100).toFixed(0);
                    if (RbolaDeOuro > 90) {
                        bolaDeOuro++;
                    }

                    var RcartaoA = Number((Math.random() * 3).toFixed(0));
                    cartaoA += RcartaoA

                    var RcartaoV = Number((Math.random() * 2).toFixed(0))
                    cartaoV += RcartaoV

                    var RqtdGol = Number((Math.random() * 40).toFixed(0));
                    qtdGol += RqtdGol

                    var RqtdAssistencia = Number((Math.random() * 20).toFixed(0));
                    qtdAssistencia += RqtdAssistencia

                } else if (area == 'tecnico') {

                    var RtheBestTecnico = (Math.random() * 100).toFixed(0);
                    if (RtheBestTecnico > 95) {
                        theBestTecnico++;
                    }

                    var RcartaoA = Number((Math.random() * 6).toFixed(0));
                    cartaoA += RcartaoA

                    var RcartaoV = Number((Math.random() * 2).toFixed(0))
                    cartaoV += RcartaoV

                }

            }

            lista_estatisticas.push(premioTheBest);
            lista_estatisticas.push(penaltis);
            lista_estatisticas.push(bolaDeOuro);
            lista_estatisticas.push(theBestTecnico);
            lista_estatisticas.push(cartaoA);
            lista_estatisticas.push(cartaoV);
            lista_estatisticas.push(qtdGol);
            lista_estatisticas.push(qtdAssistencia);

            if (area == 'goleiro') {
                div_tudo.innerHTML = `<p class="titulo">Olá ${apelido}, vamos ver como foi sua carreira como goleiro</p>
                
                <div class="estastisticas">

                <div class="gols">
                Gols
                    <img src="assets/gols.webp" width="100px">
                    <p>${lista_estatisticas[6]}</p>
                </div>
                <div class="assistencias">
                Assistencias
                    <img src="assets/assistencia.png" width="90px">
                    <p> ${lista_estatisticas[7]}</p>
                </div>
                <div class="cartaoAmarelo">
                Cartões
                    <img src="assets/cartao amarelo.png" width="90px">
                    <p>${lista_estatisticas[4]}</p>
                </div>
                <div class="cartaoVermelho">
                Cartões
                    <img src="assets/cartao vermelho.webp" width="90px">
                    <p>${lista_estatisticas[5]}</p>
                </div>
                <div class="theBest">
                Melhor jogador
                    <img src="assets/bola de ouro.webp" width="90px">
                    <p>${lista_estatisticas[0]}</p>
                </div>
            </div>`;
            } else if (area == 'zaga') {
                div_tudo.innerHTML = `<p class="titulo">Olá ${apelido}, vamos ver como foi sua carreira como goleiro</p>
                
                <div class="estastisticas">

                <div class="gols">
                Gols
                    <img src="assets/gols.webp" width="100px">
                    <p>${lista_estatisticas[6]}</p>
                </div>
                <div class="assistencias">
                Assistencias
                    <img src="assets/assistencia.png" width="90px">
                    <p> ${lista_estatisticas[7]}</p>
                </div>
                <div class="cartaoAmarelo">
                Cartões
                    <img src="assets/cartao amarelo.png" width="90px">
                    <p>${lista_estatisticas[4]}</p>
                </div>
                <div class="cartaoVermelho">
                Cartões
                    <img src="assets/cartao vermelho.webp" width="90px">
                    <p>${lista_estatisticas[5]}</p>
                </div>
                <div class="theBest">
                Melhor jogador
                    <img src="assets/bola de ouro.webp" width="90px">
                    <p>${lista_estatisticas[0]}</p>
                </div>
            </div>`;
            } else if (area == 'meio-campo') {
                div_tudo.innerHTML = `<p class="titulo">Olá ${apelido}, vamos ver como foi sua carreira como goleiro</p>
                
                <div class="estastisticas">

                <div class="gols">
                Gols
                    <img src="assets/gols.webp" width="100px">
                    <p>${lista_estatisticas[6]}</p>
                </div>
                <div class="assistencias">
                Assistencias
                    <img src="assets/assistencia.png" width="90px">
                    <p> ${lista_estatisticas[7]}</p>
                </div>
                <div class="cartaoAmarelo">
                Cartões
                    <img src="assets/cartao amarelo.png" width="90px">
                    <p>${lista_estatisticas[4]}</p>
                </div>
                <div class="cartaoVermelho">
                Cartões
                    <img src="assets/cartao vermelho.webp" width="90px">
                    <p>${lista_estatisticas[5]}</p>
                </div>
                <div class="theBest">
                Melhor jogador
                    <img src="assets/bola de ouro.webp" width="90px">
                    <p>${lista_estatisticas[0]}</p>
                </div>
            </div>`;
            } else if (area == 'ataque') {
                div_tudo.innerHTML = `<p class="titulo">Olá ${apelido}, vamos ver como foi sua carreira como goleiro</p>
                
                <div class="estastisticas">

                <div class="gols">
                Gols
                    <img src="assets/gols.webp" width="100px">
                    <p>${lista_estatisticas[6]}</p>
                </div>
                <div class="assistencias">
                Assistencias
                    <img src="assets/assistencia.png" width="90px">
                    <p> ${lista_estatisticas[7]}</p>
                </div>
                <div class="cartaoAmarelo">
                Cartões
                    <img src="assets/cartao amarelo.png" width="90px">
                    <p>${lista_estatisticas[4]}</p>
                </div>
                <div class="cartaoVermelho">
                Cartões
                    <img src="assets/cartao vermelho.webp" width="90px">
                    <p>${lista_estatisticas[5]}</p>
                </div>
                <div class="theBest">
                Melhor jogador
                    <img src="assets/bola de ouro.webp" width="90px">
                    <p>${lista_estatisticas[0]}</p>
                </div>
            </div>`;
            } else if (area == 'tecnico') {
                div_tudo.innerHTML = `<p class="titulo">Olá ${apelido}, vamos ver como foi sua carreira como técnico</p>
                
                <div class="estastisticas">
                
                <div class="cartaoAmarelo">
                Cartões
                    <img src="assets/cartao amarelo.png" width="90px">
                    <p>${lista_estatisticas[4]}</p>
                </div>
                <div class="cartaoVermelho">
                Cartões
                    <img src="assets/cartao vermelho.webp" width="90px">
                    <p>${lista_estatisticas[5]}</p>
                </div>
                <div class="theBest">
                Melhor técnico
                    <img src="assets/bola de ouro.webp" width="90px">
                    <p>${lista_estatisticas[0]}</p>
                </div>
            </div>`;
            }


            
            lista_titulos.push(qtdEstaduais);
            lista_titulos.push(qtdBrasileirao);
            lista_titulos.push(qtdCdb);
            lista_titulos.push(qtdLibertadores);
            lista_titulos.push(qtdMundial);
            lista_titulos.push(qtdSula);
            lista_titulos.push(qtdRecopa);
            lista_titulos.push(qtdSupercopa);
            lista_titulos.push(qtdCopa);

            div_tudo.innerHTML += `            <div class="titulos">

            <div class="paulista">

                <p>${lista_titulos[0]}</p>
                <img src="assets/paulista.png" alt="" width="125px">
                <br>
                Paulistas

            </div>

            <div class="brasileirao">

                <p>${lista_titulos[1]}</p>

                <img src="assets/brasileirao.png" alt="" width="100px">
                <br>
                Brasileirões
            </div>

            <div class="cdb">

                <p>${lista_titulos[2]}</p>

                <img src="assets/copa do brasil.png" alt="" width="100px">
                <br>
                Copa do Brasil

            </div>

            <div class="libertadores">

                <p>${lista_titulos[3]}</p>

                <img src="assets/libertadores.png" alt="" width="120px">
                <br>
                Libertadores

            </div>

            <div class="mundial">

                <p>${lista_titulos[4]}</p>

                <img src="assets/mundial.png" alt="" width="110px">
                <br>
                Mundial

            </div>

            <div class="sula">

                <p>${lista_titulos[5]}</p>

                <img src="assets/sulamericana.png" alt="" width="120px">
                <br>
                Sul-Americana

            </div>

            <div class="recopa">

                <p>${lista_titulos[6]}</p>

                <img src="assets/recopa.png" alt="" width="80px">
                <br>
                Recopa

            </div>

            <div class="supercopa">

                <p>${lista_titulos[7]}</p>

                <img src="assets/supercopa.png" alt="" width="140px">

                <p>Supercopa</p>

            </div>

            <div class="copaDoMundo">

                <p>${lista_titulos[8]}</p>

                <img src="assets/copa do mundo.png" alt="" width="65px">
                <br>
                Copa do Mundo

            </div>
        </div>

        <div class="botoes">

            <button class="comic-button" onclick="voltar()">Simular novamente</button>

            <a href="dashboard.html">
            <button class="comic-button">Ranking</button>
            </a>

        </div>`;
        }
    }
}

function voltar() {

    div_tudo.innerHTML = ` <p class="apelido">Apelido do jogador: </p><br><input type="text" id="input_apelido">

    <p class="area">Posição de jogo: </p> <br><select id="select_area">
        <option value="#">Selecione sua posição</option>
        <option value="goleiro">Goleiro</option>
        <option value="zaga">Zaga</option>
        <option value="meio-campo">Meio-campo</option>
        <option value="ataque">Ataque</option>
        <option value="tecnico">Técnico</option>
    </select>

    <p class="anos">Anos de atuação:</p> <br><input type="text" id="input_anos">

    <button class="comic-button" onclick="simular()">Simular carreira</button>

`;
}

function validarSessao() {

    var nome = sessionStorage.NOME_USUARIO; 

    if (nome != undefined) {

        document.getElementById("botaoLogin").style.display="none";
        document.getElementById("botaoCadastro").style.display="none";
        document.getElementById("textoUl").style.marginRight = "230px";
    } else {


        div_tudo.innerHTML = `<div class="bloqueio">

        <img src="assets/bloqueio.jpg" alt="">

        <p>Necessário realizar o login para jogar</p>
    </div>`;
    }
    
}