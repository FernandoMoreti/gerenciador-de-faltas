const db = require("../database/index")

class ProfEscolaRepository {

    async index() {
        return await db.query(`SELECT * FROM tb_professor_escola`)
    }

    async showEscola(id) {
        return await db.query(`
            SELECT * FROM tb_escola
            JOIN tb_professor_escola ON tb_escola.id = tb_professor_escola.id_escola
            WHERE tb_professor_escola.id_professor = $1            
            `, [id])
    }

    async create(id_professor, id_escola) {
        const [ row ] = await db.query(`
            INSERT INTO tb_professor_escola(id_professor, id_escola)
            VALUES($1, $2)
            RETURNING *
            `, [id_professor, id_escola]
        );
        return row
    }

    async delete(id) {
        return await db.query(`
            DELETE FROM tb_professor_escola
            WHERE tb_professor_escola.id = $1
            `, [id]
        )
    } 
}

module.exports = new ProfEscolaRepository();