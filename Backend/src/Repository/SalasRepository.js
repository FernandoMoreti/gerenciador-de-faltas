const db = require("../database/index.js")

class SalasRepository {
    async index() {
        return await db.query(`SELECT * FROM tb_sala`)
    }

    async showSalas(id) {
        return await db.query(`
            SELECT name, id FROM tb_sala
            WHERE tb_sala.id_escola = $1
            `, [id])
    }

    async showAlunos(id) {
        return await db.query(`
            SELECT  tb_alunos.codigoAluno, tb_alunos.name FROM tb_alunos
            JOIN tb_sala ON tb_alunos.sala_id = tb_sala.id
            WHERE tb_sala.id = $1
            `, [id])
    }

    async findById(id) {
        return await db.query(`
            SELECT * FROM tb_sala
            WHERE tb_sala.id = $1
            `, [id]
        )
    }

    async findByName(name) {
        return await db.query(`
            SELECT * FROM tb_sala
            WHERE tb_sala.name = $1
            `, [name]
        )
    }

    async update(id, name) {
        return db.query(`
            UPDATE tb_sala
            SET name = $1
            WHERE tb_sala.id = $2
            RETURNING *
            `, [name, id]
        )
    }


    async create(name, escola) {
        const [row] = await db.query(`
            INSERT INTO tb_sala(name, id_escola)
            VALUES($1, $2)
            RETURNING *
            `, [name, escola]
        );
        return row
    }

    async delete(id) {
        await db.query(`
            DELETE FROM tb_sala
            WHERE tb_sala.id = $1
            `, [id])
    }
}

module.exports = new SalasRepository();