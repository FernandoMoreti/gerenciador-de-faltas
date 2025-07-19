const db = require("../database/index")

class ProfRepository {

    async index() {
        return await db.query(`SELECT * FROM tb_professor`)
    }

    async findByCod(codigoProf) {
        const prof = await db.query(`
            SELECT * FROM tb_professor
            WHERE tb_professor.codigoProf = $1
            `, [codigoProf])
        return prof
    };

    async create(name, codigoProf, disciplina, password) {
        const prof = await db.query(`
            INSERT INTO tb_professor(name, codigoProf, disciplina,  password)
            VALUES($1, $2, $3, $4)
            RETURNING *
            `, [name, codigoProf, disciplina, password]
        );
        return prof
    };

    async update(name, codigoProf, disciplina, password, id) {
        return db.query(`
            UPDATE tb_professor
            SET name = $1, codigoProf = $2, password = $3, disciplina = $4
            WHERE tb_professor.id = $5
            RETURNING *
            `, [name, codigoProf, password, disciplina, id]
        )
    }

    async delete(id) {
        await db.query(`
            DELETE FROM tb_professor
            WHERE tb_professor.id = $1
            `, [id]
        )
    };
};

module.exports = new ProfRepository();