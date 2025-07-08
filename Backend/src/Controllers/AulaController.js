const AulaRepository = require("../Repository/AulaRepository")

class AulaController {
    async index(request, response) {
        const [ rows ] = await AulaRepository.index()
        response.send(rows)
    }

    async create(request, response) {
        const { data, disciplina, id_professor, id_sala } = request.body

        const row = await AulaRepository.create(data, disciplina, id_professor, id_sala)

        response.send(row)
    }

    async update(request, response) {
        const { data, disciplina, id_professor, id_sala } = request.body;
        const { id } = request.params

        const row = await AulaRepository.update(data, disciplina, id_professor, id_sala, id)

        response.send(row)
    }

    async delete(request, response) {
        const { id } = request.params
        
        await AulaRepository.delete(id)

        response.send(200)
    }
}

module.exports = new AulaController();