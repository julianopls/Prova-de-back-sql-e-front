const db = require("../data/connection");

const totalPorOficina = async (req, res) => {
    const sql = `
        SELECT o.nome AS oficina, COUNT(i.id) AS total_inscricoes
        FROM oficinas o
        LEFT JOIN inscricoes i ON o.id = i.oficina_id
        GROUP BY o.id;
    `;

    try {
        const [result] = await db.query(sql);
        res.send(result);
    } catch (err) {
        res.status(500).send("Erro ao buscar total por oficina!");
    }
};

const totalPorCategoria = async (req, res) => {
    const sql = `
        SELECT o.categoria, COUNT(i.id) AS total_inscricoes
        FROM oficinas o
        LEFT JOIN inscricoes i ON o.id = i.oficina_id
        GROUP BY o.categoria;
    `;

    try {
        const [result] = await db.query(sql);
        res.send(result);
    } catch (err) {
        res.status(500).send("Erro ao buscar total por categoria!");
    }
};

module.exports = {
    totalPorOficina,
    totalPorCategoria
};
