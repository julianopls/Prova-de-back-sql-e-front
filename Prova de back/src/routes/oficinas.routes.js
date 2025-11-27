const express = require("express");
const router = express.Router();
const controller = require("../controllers/oficinas.controller");

router.get("/oficina", controller.listarOFC);
router.put("/oficinas/:id", controller.atualizarOFC);
router.post("/ofc", controller.criarOFC);
router.delete("/ofcdel/:id", controller.excluirOFC);


module.exports = router;
