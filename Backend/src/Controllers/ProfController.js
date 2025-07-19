const ProfRepository = require("../Repository/ProfRepository")

class ProfController {

    async index(request, response) {
        const profs = await ProfRepository.index()

        response.send(profs)
    }

    async findByCod(request, response) {
        const { login, password } = request.body;

        try {
            const [prof] = await ProfRepository.findByCod(login);

            if (!prof) {
                return response.status(404).json({ error: "Usuário não encontrado" });
            }

            const result = prof.password == password
            
            if (!result) {
                return response.status(401).json({ error: "Senha incorreta" });
            }

            return response.json({ "authenticated": true, prof: {id: prof.id ,name: prof.name, disciplina: prof.disciplina} });
        } catch (error) {
            console.error("Erro na autenticação:", error);
            return response.status(500).json({ error: "Erro interno no servidor" });
        }  
    
    }

    async create(request, response) {
        const { name, codigoProf, password } = request.body;

        const prof = await ProfRepository.create(name, codigoProf, password);

        response.send(prof);
    }

    async update(request, response) {
        const { name, codigoProf, disciplina, password } = request.body;
        const { id } = request.params

        const prof = await ProfRepository.update(name, codigoProf, disciplina, password, id)

        response.send(prof)
    }

    async delete(request, response) {
        const { id } = request.params;

        await ProfRepository.delete(id);

        response.send(200);
    }
}

module.exports = new ProfController()