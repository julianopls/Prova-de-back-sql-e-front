const db = require("../data/connection");

const listarOFC = async (req, res) => {
    try {
        const [result] = await db.query("SELECT * FROM oficinas");
        res.send(result);
    } catch (err) {
        res.status(500).send("Erro ao listar oficinas!");
    }
};

const criarOFC = async (req, res) => {
    const { nome, vagas, categoria } = req.body;

    if (!nome || !vagas || !categoria) {
        return res.status(400).send("Preencha tudo!");
    }

    if (vagas < 1) {
        return res.status(400).send("A oficina deve ter no mínimo 1 vaga!");
    }

    try {
        const sql = "INSERT INTO oficinas (nome, vagas, categoria) VALUES (?, ?, ?)";
        await db.query(sql, [nome, vagas, categoria]);
        res.send("Oficina cadastrada!");
    } catch (err) {
        res.status(500).send("Erro ao cadastrar oficina!");
    }
};

const atualizarOFC = async (req, res) => {
    const { id } = req.params;
    const { nome, vagas, categoria } = req.body;

    if (!nome || !vagas || !categoria) {
        return res.status(400).send("Preencha tudo!");
    }

    if (vagas < 1) {
        return res.status(400).send("A oficina deve ter no mínimo 1 vaga!");
    }

    try {
        const sql = "UPDATE oficinas SET nome=?, vagas=?, categoria=? WHERE id=?";
        await db.query(sql, [nome, vagas, categoria, id]);
        res.send("Oficina atualizada!");
    } catch (err) {
        res.status(500).send("Erro ao atualizar oficina!");
    }
};

const excluirOFC = async (req, res) => {
    const { id } = req.params;

    try {
        await db.query("DELETE FROM oficinas WHERE id=?", [id]);
        res.send("Oficina excluída!");
    } catch (err) {
        res.status(500).send("Erro ao excluir oficina!");
    }
};

module.exports = {
    listarOFC,
    criarOFC,
    atualizarOFC,
    excluirOFC
};
