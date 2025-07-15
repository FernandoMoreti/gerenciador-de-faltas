const EscolaRepository = require("../Repository/EscolaRepository")

class EscolaController {
    
    async index(request, response) {
        const escolas = await EscolaRepository.index();
        response.send(escolas)
    }

    async showEscolaBySala(request, response) {
        const { id } = request.params;

        const [ escola ] = await EscolaRepository.showBySala(id);

        response.send(escola)
    }

    async create(request, response) {
        const { name, img } = request.body;

        const escola = await EscolaRepository.create(name, img);

        response.json(escola);
    }

    async update(request, response) {
        const { name, img } = request.body;
        const { id } = request.params;

        const row = await EscolaRepository.update(name, img, id)

        response.send(row)
    }

    async delete(request, response) {
        const { id } = request.params

        await EscolaRepository.delete(id)

        response.send(200)
    }
}

module.exports = new EscolaController();