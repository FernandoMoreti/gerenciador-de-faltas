const db = require("../database/index")

class AulaRepository {

    async index() {
        return await db.query(`SELECT * FROM tb_aula`)
    }

    async create(data, disciplina, id_professor, id_sala) {
        const [ row ] = await db.query(`
            INSERT INTO tb_aula(data, disciplina, id_professor, id_sala)
            VALUES($1, $2, $3, $4)
            RETURNING *
            `, [data, disciplina, id_professor, id_sala]
        );
        return row
    }

    async update(data, disciplina, id_professor, id_sala, id) {
        return await db.query(`
            UPDATE tb_aula
            SET data = $1, disciplina = $2, id_professor = $3, id_sala = $4
            WHERE tb_aula.id = $5
            RETURNING *
            `, [data, disciplina, id_professor, id_sala, id]
        )
    }

    async delete(id) {
        return await db.query(`
            DELETE FROM tb_aula
            WHERE tb_aula.id = $1
            `, [id]
        )
    } 
}

module.exports = new AulaRepository();