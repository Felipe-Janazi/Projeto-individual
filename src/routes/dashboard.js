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

router.get("/ultimas/grafico", function (req, res) {
    dashboardController.grafico(req, res);
});

module.exports = router;