const express = require("express");
const router = express.Router();
const controller = require("../controllers/inscricoes.controller");

router.get("/inscricao", controller.listarInscri);
router.post("/inscricoes", controller.criarInscri);
router.put("/inscri/:id", controller.atualizarInscri);
router.delete("/inscri/:id", controller.excluirInscri);

module.exports = router;
