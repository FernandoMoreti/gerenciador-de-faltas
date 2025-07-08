const AlunoRepository = require("../Repository/AlunoRepository");

class AlunoControllers {
    async index(request, response) {
        const result = await AlunoRepository.index();
        response.json(result)
    }

    async show(request, response) {
        const { id } = request.params;

        const aluno = await AlunoRepository.findById(id);

        response.json(aluno)
    }

    async update(request, response) {
        const { id } = request.params;
        const { name, codigoAluno } = request.body;

        const newAluno = await AlunoRepository.update(id, name, codigoAluno);

        response.json(newAluno)
    }

    async create(request, response) {
        const { name, codigoAluno, salaAluno } = request.body;

        const aluno = await AlunoRepository.create(name, codigoAluno, salaAluno)

        response.json(aluno);
    }

    async delete(request, response) {
        const { id } = request.params;

        await AlunoRepository.delete(id)

        response.sendStatus(200)
    }

}

module.exports = new AlunoControllers();