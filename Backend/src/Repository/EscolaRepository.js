const db = require("../database/index")

class EscolaRepository {

    async index() {
        return await db.query(`SELECT * FROM tb_escola`)
    }

    async showBySala(id) {
        return await db.query(`
            SELECT * FROM tb_sala
            WHERE tb_sala.id = $1
            `, [id]
        )
    }

    async create(name, img) {
        const [row] = await db.query(`
            INSERT INTO tb_escola(name, img)
            VALUES($1, $2)
            RETURNING *
            `, [name, img]
        );
        return row
    }

    async update(name, img, id) {
        return await db.query(`
            UPDATE tb_escola
            SET name = $1, img = $2
            WHERE tb_escola.id = $3
            RETURNING *
            `, [name, img, id]
        )
    }

    async delete(id) {
        return await db.query(`
            DELETE FROM tb_escola
            WHERE tb_escola.id = $1
            `, [id]
        )
    } 
}

module.exports = new EscolaRepository();