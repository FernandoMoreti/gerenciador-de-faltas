CREATE DATABASE myclass;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS tb_sala(
    id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
    name VARCHAR NOT NULL,
    id_escola UUID,
    FOREIGN KEY (id_escola) REFERENCES tb_escola(id)
);

CREATE TABLE IF NOT EXISTS tb_alunos(
    id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
    codigoAluno INTEGER NOT NULL UNIQUE,
    name VARCHAR(60) NOT NULL,
    id_sala UUID,
    FOREIGN KEY (id_sala) REFERENCES tb_sala(id)
);

CREATE TABLE IF NOT EXISTS tb_professor(
    id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
    name VARCHAR NOT NULL,
    codigoProf INTEGER NOT NULL,
    disciplina VARCHAR NOT NULL,
    password VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS tb_escola(
    id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
    name VARCHAR NOT NULL,
    img VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS tb_professor_escola(
    id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
    id_professor UUID,
    id_escola UUID,
    FOREIGN KEY (id_professor) REFERENCES tb_professor(id),
    FOREIGN KEY (id_escola) REFERENCES tb_escola(id)
);

CREATE TABLE IF NOT EXISTS tb_aula(
    id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
    data DATE,
    descricao VARCHAR,
    disciplina VARCHAR,
    id_professor UUID,
    id_sala UUID,
    FOREIGN KEY (id_professor) REFERENCES tb_professor(id),
    FOREIGN KEY (id_sala) REFERENCES tb_sala(id)
);

CREATE TABLE IF NOT EXISTS tb_falta(
    id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
    id_aluno UUID,
    id_aula UUID,
    FOREIGN KEY (id_aluno) REFERENCES tb_alunos(id),
    FOREIGN KEY (id_aula) REFERENCES tb_aula(id)
);