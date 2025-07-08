const FaltaRepository = require("../Repository/FaltaRepository")

class FaltaController {
    
    async index(request, response) {
        const rows = await FaltaRepository.index();
        
        response.send(rows);
    }

    async showByAluno(request, response) {
        const { id } = request.params;

        const faltas = await FaltaRepository.showByAluno(id)

        response.send(faltas)
    }

    async create(request, response) {
        const { id_aluno, id_aula } = request.body;

        const row = await FaltaRepository.create(id_aluno, id_aula);

        response.json(row);
    }

    async delete(request, response) {
        const { id } = request.params;

        await FaltaRepository.delete(id);

        response.send(200);
    }
}

module.exports = new FaltaController();