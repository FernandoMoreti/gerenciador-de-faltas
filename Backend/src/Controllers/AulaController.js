const AulaRepository = require("../Repository/AulaRepository")

class AulaController {
    async index(request, response) {
        const [ rows ] = await AulaRepository.index()
        response.send(rows)
    }

    async show(request, response) {
        const { id } = request.params;
        
        console.log("entrei")

        const aula = await AulaRepository.findById(id);

        response.json(aula)
    }

    async create(request, response) {
        const { date, disciplina, descricao, sala, id } = request.body

        const row = await AulaRepository.create(date, disciplina, descricao, sala, id)

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