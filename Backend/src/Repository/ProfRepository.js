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

    async create(name, codigoProf, password) {
        const prof = await db.query(`
            INSERT INTO tb_professor(name, codigoProf, password)
            VALUES($1, $2, $3)
            RETURNING *
            `, [name, codigoProf, password]
        );
        return prof
    };

    async delete(id) {
        await db.query(`
            DELETE FROM tb_professor
            WHERE tb_professor.id = $1
            `, [id]
        )
    };
};

module.exports = new ProfRepository();