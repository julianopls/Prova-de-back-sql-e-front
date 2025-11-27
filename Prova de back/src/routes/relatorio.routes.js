const express = require("express");
const router = express.Router();
const controller = require("../controllers/relatorio.controller");

router.get("/oficinas", controller.totalPorOficina);
router.get("/categorias", controller.totalPorCategoria);

module.exports = router;
