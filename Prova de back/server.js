require("dotenv").config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

const alunosroutes = require('./src/routes/alunos.routes');
const inscricoesroutes = require('./src/routes/inscricoes.routes');
const oficinasroutes = require('./src/routes/oficinas.routes');
const relatorioroutes = require('./src/routes/relatorio.routes');

app.use(express.json());
app.use(cors());

app.use(alunosroutes);
app.use(relatorioroutes);
app.use(inscricoesroutes);
app.use(oficinasroutes);


app.listen(port, () => {
    console.log('Servidor online na ' + port);
})