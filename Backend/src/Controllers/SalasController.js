const SalasRepository = require("../Repository/SalasRepository");

class SalasControllers {
    async index(request, response) {
        const result = await SalasRepository.index();
        response.json(result);
    }

    async showSalas(request, response) {
        const { id } = request.params;

        const rows = await SalasRepository.showSalas(id);
        response.json(rows);
    }

    async showAlunos(request, response) {
        const { id } = request.params;

        const rows = await SalasRepository.showAlunos(id);
        response.json(rows);
    }

    async show(request, response) {
        const { id } = request.params;

        const sala = await SalasRepository.findById(id);

        response.json(sala);
    }

    async update(request, response) {
        const { id } = request.params;
        const { name } = request.body;

        const newSala = await SalasRepository.update(id, name);

        response.json(newSala);
    }

    async create(request, response) {
        const { name, id } = request.body;

        const sala = await SalasRepository.create(name, id);

        response.json(sala);
    }

    async delete(request, response) {
        const { id } = request.params;

        await SalasRepository.delete(id);

        response.sendStatus(200);
    }

}

module.exports = new SalasControllers();