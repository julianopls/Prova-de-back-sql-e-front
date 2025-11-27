const express = require("express");
const router = express.Router();
const controller = require("../controllers/alunos.controller");

router.get("/aluno", controller.listarAluno);
router.post("/alunos", controller.criarAluno);
router.put("/aluno/:id", controller.atualizarAluno);
router.delete("/alunos/:id", controller.excluirAluno);

module.exports = router;
