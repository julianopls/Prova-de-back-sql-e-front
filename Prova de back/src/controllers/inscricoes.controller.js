const db = require("../data/connection");

const listarInscri = async (req, res) => {
    const sql = `
        SELECT i.id, a.nome AS aluno, o.nome AS oficina, i.data_inscricao
        FROM inscricoes i
        JOIN alunos a ON a.id = i.aluno_id
        JOIN oficinas o ON o.id = i.oficina_id
    `;

    try {
        const [result] = await db.query(sql);
        res.send(result);
    } catch (err) {
        res.status(500).send("Erro ao listar inscrições!");
    }
};

const criarInscri = async (req, res) => {
    const { aluno_id, oficina_id, data_inscricao } = req.body;

    if (!aluno_id || !oficina_id || !data_inscricao) {
        return res.status(400).send("Preencha todos os campos!");
    }

    try {
        const sql = "INSERT INTO inscricoes (aluno_id, oficina_id, data_inscricao) VALUES (?, ?, ?)";
        await db.query(sql, [aluno_id, oficina_id, data_inscricao]);
        res.send("Inscrição cadastrada!");
    } catch (err) {
        res.status(500).send("Erro ao cadastrar inscrição!");
    }
};

const atualizarInscri = async (req, res) => {
    const { id } = req.params;
    const { aluno_id, oficina_id } = req.body;

    if (!aluno_id || !oficina_id) {
        return res.status(400).send("Preencha todos os campos!");
    }

    try {
        const sql = "UPDATE inscricoes SET aluno_id=?, oficina_id=? WHERE id=?";
        await db.query(sql, [aluno_id, oficina_id, id]);
        res.send("Inscrição atualizada!");
    } catch (err) {
        res.status(500).send("Erro ao atualizar inscrição!");
    }
};

const excluirInscri = async (req, res) => {
    const { id } = req.params;

    try {
        await db.query("DELETE FROM inscricoes WHERE id=?", [id]);
        res.send("Inscrição excluída!");
    } catch (err) {
        res.status(500).send("Erro ao excluir inscrição!");
    }
};

module.exports = {
    listarInscri,
    criarInscri,
    atualizarInscri,
    excluirInscri
};
