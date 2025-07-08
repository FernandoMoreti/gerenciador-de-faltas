const ProfEscolaRepository = require("../Repository/ProfEscolaRepository")

class ProfEscolaController {
    
    async index(request, response) {
        const rows = await ProfEscolaRepository.index();
        
        response.send(rows);
    }

    async showEscolasByProf(request, response) {
        const { id } = request.params

        const rows = await ProfEscolaRepository.showEscola(id)

        response.send(rows)
    }

    async create(request, response) {
        const { id_professor, id_escola } = request.body;

        const row = await ProfEscolaRepository.create(id_professor, id_escola);

        response.json(row);
    }

    async delete(request, response) {
        const { id } = request.params;

        await ProfEscolaRepository.delete(id);

        response.send(200);
    }
}

module.exports = new ProfEscolaController();