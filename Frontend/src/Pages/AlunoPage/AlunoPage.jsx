import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, FaltasSection, Info, Foto, Header } from "./style.jsx";

import ApiAulaById from "../../api/ApiAula.jsx";
import ApiAluno from "../../api/ApiAluno.jsx";
import ApiFalta from "../../api/ApiFaltas.jsx";

export default function AlunoPage() {

    const { id } = useParams();

    const [ aulasFaltadas, setAulasFaltadas ] = useState([])
    const [ aluno, setAluno ] = useState(null);
    const [ faltas, setFaltas ] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {

                const [ aluno ] = await ApiAluno(id);
                const faltas = await ApiFalta(id);

                setAluno(aluno);
                setFaltas(faltas);

                for (let i = 0; i < faltas.length; i++) {
                    let [aula] = await ApiAulaById(faltas[i].id_aula)
                    setAulasFaltadas((prevAulas) => [...prevAulas, aula])
                }
                console.log(aulasFaltadas)
            } catch (err) {
                console.error("Erro ao carregar faltas:", err);
            }
        }

        fetchData();
    }, [id])
    
    if (!aluno) return <p>Carregando aluno...</p>;

    return (
        <Container>
        <Header>
            <Foto src={"https://www.shareicon.net/data/2016/07/26/801997_user_512x512.png"} alt="Foto do aluno" />
            <Info>
            <h2>{aluno.name}</h2>
            <p><strong>Código:</strong> {aluno.codigoaluno}</p>
            </Info>
        </Header>

        <FaltasSection>
            <h3>Faltas:</h3>
            {faltas?.length > 0 ? (
            <ul>
                {!aulasFaltadas
                    ? <p>Carregando...</p>
                    :aulasFaltadas.map((aula, index) => (
                    <li key={aula.id}>
                        <strong>Falta: {index + 1} Data: {aula.data}</strong>
                        <strong>Disciplina: {aula.disciplina}</strong>
                        <strong>Descrição da aula: {aula.descricao}</strong>
                    </li>
                ))
                }
            </ul>
            ) : (
            <p>Nenhuma falta registrada.</p>
            )}
        </FaltasSection>
        </Container>
    );
}
