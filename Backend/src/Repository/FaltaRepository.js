const db = require("../database/index")

class FaltaRepository {

    async index() {
        return await db.query(`SELECT * FROM tb_falta`)
    }

    async showByAluno(id) {
        return await db.query(`
            SELECT * FROM tb_falta
            WHERE tb_falta.id_aluno = $1
            `, [id])
    }

    async create(id_aluno, id_aula) {
        const [ row ] = await db.query(`
            INSERT INTO tb_falta(id_aluno, id_aula)
            VALUES($1, $2)
            RETURNING *
            `, [id_aluno, id_aula]
        );
        return row
    }

    async delete(id) {
        return await db.query(`
            DELETE FROM tb_falta
            WHERE tb_falta.id = $1
            `, [id]
        )
    } 
}

module.exports = new FaltaRepository();