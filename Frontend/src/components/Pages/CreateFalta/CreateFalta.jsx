import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ApiAlunos from "../../../api/ApiAlunos.jsx";
import ApiAulaById from "../../../api/ApiAula.jsx";

import { Container, ListCardsAlunos, CheckboxContainer, HiddenCheckbox, StyledCheckbox } from "./style.jsx"
import Aluno from "../SalaAluno/Alunos/ListAlunos/Aluno.jsx";
import Button from "../../component/Button.jsx"

export default function CreateFalta() {

    const { id } = useParams(); // id da aula
    const [ aula, setAula ] = useState(null);
    const [ alunos, setAlunos ] = useState([]);
    const [ sala, setSala ] = useState()

    useEffect(() => {
        async function fetchData() {
            try {
                const aula = await ApiAulaById(id); // passa id da aula
                setAula(aula);
                setSala(aula[0].id_sala)

                const alunos = await ApiAlunos();
                setAlunos(alunos);
            } catch (err) {
                console.error("Erro ao carregar aula ou alunos:", err);
            }
        }

        fetchData();
    }, [id]);

    if (!aula || alunos.length === 0) {
        return <p>Carregando...</p>; // ou um spinner bonito
    }

    return (
        <Container>
            <h3>Selecione os alunos que faltaram a essa aula</h3>
            <ListCardsAlunos>
                {alunos.map((aluno) => {
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
                                    <HiddenCheckbox value={aluno.id} />
                                    <StyledCheckbox />
                                </CheckboxContainer>
                            </div>
                        )
                    }
                })}
            </ListCardsAlunos>
            <Button type="button">Atirbuir faltas</Button>
        </Container>
    )
}