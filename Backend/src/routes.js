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
// Get Alunos
router.get("/Aluno", AlunoController.index)
router.get("/Aluno/:id", AlunoController.show)
// Get Professor
router.get("/professor", ProfController.index)
// Get Escola 
router.get("/escola", EscolaController.index)
router.get("/escola/sala/:id", EscolaController.showEscolaBySala)
// Get ProfEscola
router.get("/ProfEscola", ProfEscolaController.index)
router.get("/profEscola/:id", ProfEscolaController.showEscolasByProf)
// Get Falta
router.get("/Falta", FaltaController.index)
// Get Falta Aluno
router.get("/Falta/:id", FaltaController.showByAluno)
// Get Aula
router.get("/Aula", AulaController.index)
router.get("/Aula/:id", AulaController.show)


// Post Salas
router.post("/salas/create", SalasController.create)
// Post Aluno
router.post("/Aluno/create", AlunoController.create)
// Get Professor Login
router.post("/professor/login", ProfController.findByCod)
// Post Professor
router.post("/professor/create", ProfController.create)
// Post Escola
router.post("/escola/create", EscolaController.create)
// Post Aula
router.post("/Aula/create", AulaController.create)
// Post ProfEscola
router.post("/ProfEscola/create", ProfEscolaController.create)
// Post Falta
router.post("/Falta/create", FaltaController.create)


// Put Salas
router.put("/salas/update/:id", SalasController.update)
// Put Aluno
router.put("/Aluno/update/:id", AlunoController.update)
// Put Professor
router.put("/professor/update/:id", ProfController.update)
// Put Escola
router.put("/Escola/update/:id", EscolaController.update)
// Put Aula
router.put("/Aula/update/:id", AulaController.update)


// Delete salas
router.delete("/salas/:id", SalasController.delete)
// Delete Aluno
router.delete("/Aluno/:id", AlunoController.delete)
// Delete Professor
router.delete("/professor/:id", ProfController.delete)
// Delete Escola
router.delete("/escola/:id", EscolaController.delete)
// Delete Aula
router.delete("/Aula/:id", AulaController.delete)
// Delete ProfEscola
router.delete("/ProfEscola/:id", ProfEscolaController.delete)
// Delete Falta
router.delete("/Falta/:id", FaltaController.delete)


module.exports = router;
