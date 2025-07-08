const db = require("../database/index.js")

class AlunoRepository {
    async index() {
        return await db.query(`SELECT * FROM tb_alunos`)
    }

    async findById(id) {
        return await db.query(`
            SELECT * FROM tb_alunos
            WHERE tb_alunos.id = $1
            `, [id]
        )
    }

    async update(id, name, codigoAluno, sala) {
        return db.query(`
            UPDATE tb_alunos
            SET name = $1, codigoAluno = $2, id_sala = $3
            WHERE tb_alunos.id = $4
            RETURNING *
            `, [name, codigoAluno, sala ,id]
        )
    }


    async create(name, codigoAluno, id) {
        const [row] = await db.query(`
            INSERT INTO tb_alunos(name, codigoAluno, id_sala)
            VALUES($1, $2, $3)
            RETURNING *
            `, [name, codigoAluno, id]
        );
        return row
    }

    async delete(id) {
        await db.query(`
            DELETE FROM tb_alunos
            WHERE tb_alunos.id = $1
            `, [id])
    }
}

module.exports = new AlunoRepository();