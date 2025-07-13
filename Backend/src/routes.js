const express = require("express");
const SalasController = require("./Controllers/SalasController");
const AlunoController = require("./Controllers/AlunoController");
const ProfController = require("./Controllers/ProfController");
const EscolaController = require("./Controllers/EscolaController");
const AulaController = require("./Controllers/AulaController");
const ProfEscolaController = require("./Controllers/ProfEscolaController");
const FaltaController = require("./Controllers/FaltaController");

const router = express.Router();

// Get Salas
router.get("/salas", SalasController.index)
router.get("/salas/:id", SalasController.showSalas)
router.get("/salasAlunos/:id", SalasController.showAlunos)

// Post Salas
router.post("/salas/create", SalasController.create)

// Put Salas
router.put("/salas/update/:id", SalasController.update)

// Delete salas
router.delete("/salas/:id", SalasController.delete)

//###########################################################//

// Get Alunos
router.get("/Aluno", AlunoController.index)
router.get("/Aluno/:id", AlunoController.show)

// Post Aluno
router.post("/Aluno/create", AlunoController.create)

// Put Aluno
router.put("/Aluno/update/:id", AlunoController.update)

// Delete Aluno
router.delete("/Aluno/:id", AlunoController.delete)

//###########################################################//

// Get Professor
router.get("/professor", ProfController.index)

// Post Professor
router.post("/professor/create", ProfController.create)

// Get Professor Login
router.post("/professor/login", ProfController.findByCod)

// Delete Professor
router.delete("/professor/:id", ProfController.delete)

//###########################################################//

// Get Escola 
router.get("/escola", EscolaController.index)

// Post Escola
router.post("/escola/create", EscolaController.create)

// Put Escola
router.put("/Escola/update/:id", EscolaController.update)

// Delete Escola
router.delete("/escola/:id", EscolaController.delete)

//###########################################################//

// Get Aula
router.get("/Aula", AulaController.index)
router.get("/Aula/:id", AulaController.show)

// Post Aula
router.post("/Aula/create", AulaController.create)

// Put Aula
router.put("/Aula/update/:id", AulaController.update)

// Delete Aula
router.delete("/Aula/:id", AulaController.delete)

//###########################################################//

// Get ProfEscola
router.get("/ProfEscola", ProfEscolaController.index)
router.get("/profEscola/:id", ProfEscolaController.showEscolasByProf)

// Post ProfEscola
router.post("/ProfEscola/create", ProfEscolaController.create)

// Delete ProfEscola
router.delete("/ProfEscola/:id", ProfEscolaController.delete)

//###########################################################//

// Get Falta
router.get("/Falta", FaltaController.index)

// Get Falta Aluno
router.get("/Falta/:id", FaltaController.showByAluno)

// Post Falta
router.post("/Falta/create/:id", FaltaController.create)

// Delete Falta
router.delete("/Falta/:id", FaltaController.delete)

module.exports = router;