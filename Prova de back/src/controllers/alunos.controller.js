const db = require("../data/connection");

const listarAluno = async (req, res) => {
    try {
        const [result] = await db.query("SELECT * FROM alunos");
        res.send(result);
    } catch (err) {
        res.status(500).send("Erro ao listar alunos!");
    }
};

const criarAluno = async (req, res) => {
    const { nome, turma } = req.body;

    if (!nome || !turma) {
        return res.status(400).send("Preencha todos os campos!");
    }

    try {
        const sql = "INSERT INTO alunos (nome, turma) VALUES (?, ?)";
        await db.query(sql, [nome, turma]);
        res.send("Aluno cadastrado!");
    } catch (err) {
        res.status(500).send("Erro ao cadastrar aluno!");
    }
};

const atualizarAluno = async (req, res) => {
    const { id } = req.params;
    const { nome, turma } = req.body;

    if (!nome || !turma) {
        return res.status(400).send("Preencha todos os campos!");
    }

    try {
        const sql = "UPDATE alunos SET nome=?, turma=? WHERE id=?";
        await db.query(sql, [nome, turma, id]);
        res.send("Aluno atualizado!");
    } catch (err) {
        res.status(500).send("Erro ao atualizar aluno!");
    }
};

const excluirAluno = async (req, res) => {
    const { id } = req.params;

    try {
        await db.query("DELETE FROM alunos WHERE id=?", [id]);
        res.send("Aluno excluído!");
    } catch (err) {
        res.status(500).send("Erro ao excluir aluno!");
    }
};

module.exports = {
    listarAluno,
    criarAluno,
    atualizarAluno,
    excluirAluno
};
