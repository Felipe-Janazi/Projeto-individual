var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/ultimas/maxgols", function (req, res) {
    dashboardController.maxGols(req, res);
});

router.get("/ultimas/maxassistencias", function (req, res) {
    dashboardController.maxAssistencia(req, res);
});

router.get("/ultimas/maxamarelo", function (req, res) {
    dashboardController.maxAmarelo(req, res);
});

router.get("/ultimas/maxvermelho", function (req, res) {
    dashboardController.maxVermelho(req, res);
});

router.get("/ultimas/melhorjogador", function (req, res) {
    dashboardController.melhorJogador(req, res);
});

router.get("/ultimas/maistitulos", function (req, res) {
    dashboardController.maisTitulos(req, res);
});

router.get("/ultimas/graficoRogerio", function (req, res) {
    dashboardController.graficoRogerio(req, res);
});

router.get("/ultimas/graficoLuis", function (req, res) {
    dashboardController.graficoLuis(req, res);
});



router.get("/ultimas/graficoLugano", function (req, res) {
    dashboardController.graficoLugano(req, res);
});

router.get("/ultimas/graficoCalleri", function (req, res) {
    dashboardController.graficoCalleri(req, res);
});

router.get("/ultimas/graficoNestor", function (req, res) {
    dashboardController.graficoNestor(req, res);
});

router.get("/ultimas/graficoLuciano", function (req, res) {
    dashboardController.graficoLuciano(req, res);
});

router.get("/ultimas/graficoRai", function (req, res) {
    dashboardController.graficoRai(req, res);
});

router.get("/ultimas/graficoChulapa", function (req, res) {
    dashboardController.graficoChulapa(req, res);
});

router.get("/ultimas/graficoOutros", function (req, res) {
    dashboardController.graficoOutros(req, res);
});

module.exports = router;