CREATE DATABASE oficinas22;
USE oficinas22;

CREATE TABLE alunos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    turma VARCHAR(50) NOT NULL
);

CREATE TABLE oficinas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    vagas INT NOT NULL
);
CREATE TABLE inscricoes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    aluno_id INT NOT NULL,
    oficina_id INT NOT NULL,
    data_inscricao DATE DEFAULT CURRENT_DATE,

    FOREIGN KEY (aluno_id) REFERENCES alunos(id),
    FOREIGN KEY (oficina_id) REFERENCES oficinas(id)
);

SELECT o.id, o.nome, COUNT(i.id) AS total
FROM oficinas o
LEFT JOIN inscricoes i ON i.oficina_id = o.id
GROUP BY o.id, o.nome;

SELECT a.id, a.nome, COUNT(i.id) AS total
FROM alunos a
LEFT JOIN inscricoes i ON i.aluno_id = a.id
GROUP BY a.id, a.nome;

SELECT i.id, a.nome AS aluno, o.nome AS oficina, i.data_inscricao
FROM inscricoes i
JOIN alunos a ON a.id = i.aluno_id
JOIN oficinas o ON o.id = i.oficina_id;

ALTER TABLE inscricoes
ADD data_inscricao DATE NOT NULL DEFAULT (CURRENT_DATE);


INSERT INTO alunos (nome, turma) VALUES ('Anibal', '8A');
INSERT INTO alunos (nome, turma) VALUES ('Abel ferreira', '9B');
INSERT INTO alunos (nome, turma) VALUES ('Julianopls', '2C');

INSERT INTO oficinas (nome, vagas, categoria) VALUES ('Robótica', 10, 'Tecnologia');
INSERT INTO oficinas (nome, vagas, categoria) VALUES ('Teatro', 15, 'Artes');
INSERT INTO oficinas (nome, vagas, categoria) VALUES ('Xadrez', 8, 'Lógica');

INSERT INTO inscricoes (data_inscricao, aluno_id, oficina_id) 
VALUES ('2025-03-10', 1, 1);

INSERT INTO inscricoes (data_inscricao, aluno_id, oficina_id) 
VALUES ('2025-05-09', 2, 1);

INSERT INTO inscricoes (data_inscricao, aluno_id, oficina_id) 
VALUES ('2025-01-11', 3, 2);

INSERT INTO inscricoes (data_inscricao, aluno_id, oficina_id) 
VALUES ('2025-27-12', 1, 3);

