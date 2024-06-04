var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/ultimas", function (req, res) {
    dashboardController.maxGols(req, res);
});

module.exports = router;