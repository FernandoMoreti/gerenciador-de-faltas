import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import ApiAlunos from "../../api/ApiAlunos.jsx";
import ApiAulaById from "../../api/ApiAula.jsx";
import ApiEscolaByClass from "../../api/ApiEscolaByClass.jsx";

import { Container, ListCardsAlunos, CheckboxContainer, HiddenCheckbox, StyledCheckbox } from "./style.jsx"
import Aluno from "../SalaAluno/Alunos/ListAlunos/Aluno.jsx";
import Button from "../../components/component/Button.jsx"

export default function CreateFalta() {

    const navigate = useNavigate()

    const { id } = useParams();
    const [ aula, setAula ] = useState(null);
    const [ escola, setEscola ] = useState();
    const [ alunos, setAlunos ] = useState([]);
    const [ sala, setSala ] = useState();
    const [ faltas, setFaltas ] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const aula = await ApiAulaById(id);
                setAula(aula);
                setSala(aula[0].id_sala)
                
                const escola = await ApiEscolaByClass(aula[0].id_sala);
                setEscola(escola.id_escola);

                const alunos = await ApiAlunos();
                setAlunos(alunos);
            } catch (err) {
                console.error("Erro ao carregar aula ou alunos:", err);
            }
        }

        fetchData();
    }, [id]);

    if (!aula || alunos.length === 0) {
        return <p>Carregando...</p>;
    }

    function handleCheckboxChange(event) {
        const id_aluno = event.target.value;

        setFaltas((prevFaltas) => {
            const atualizadas = event.target.checked
            ? [...prevFaltas, id_aluno]
            : prevFaltas.filter((id) => id !== id_aluno);

            return atualizadas;
        });
    }

    async function sendFaltas () {

        const id_aula = id;

        for (let i = 0; i < faltas.length; i++) {

            let id_aluno = faltas[i]
            
            const newFalta = { id_aluno, id_aula };

            try {
                const response = await fetch("http://localhost:8000/falta/create", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(newFalta)
                });
    
                if (!response.ok) {
                    throw new Error("Erro ao criar a Falta");
                }
                navigate(`/salas/${escola}`)
            } catch (error) {
                console.error("Erro:", error.message);
            }
        }  
    }

    return (
        <Container>
            <h3>Selecione os alunos que faltaram a essa aula</h3>
            <ListCardsAlunos>
                {// eslint-disable-next-line
                alunos.map((aluno) => {
                    if (aluno.id_sala === sala) {
                        return (
                            <div>
                                <Aluno 
                                    key={aluno.codigoaluno}
                                    id={aluno.id}
                                    codigo={aluno.codigoaluno} 
                                    nome={aluno.name}
                                    exibirLink={false}
                                />
                                <CheckboxContainer>
                                    <HiddenCheckbox 
                                        value={aluno.id}
                                        checked={faltas.includes(aluno.id)}
                                        onChange={handleCheckboxChange}    
                                    />
                                    <StyledCheckbox />
                                </CheckboxContainer>
                            </div>
                        )
                    }
                })}
            </ListCardsAlunos>
            <Button onClick={sendFaltas}>Atribuir faltas</Button>
        </Container>
    )
}