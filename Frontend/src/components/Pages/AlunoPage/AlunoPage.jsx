import React from "react";
import { useParams } from "react-router-dom";
import { Container, FaltasSection, Info, Foto, Header } from "./style.jsx";
import ApiAluno from "../../../api/ApiAluno.jsx";
import ApiFalta from "../../../api/ApiFaltas.jsx";

export default function AlunoPage() {

    const { id } = useParams();
    const [ aluno ] = ApiAluno(id);
    const faltas = ApiFalta(id)

    if (!aluno) return <p>Carregando aluno...</p>;

    console.log(faltas)

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
            <h3>Faltas</h3>
            {faltas.length > 0 ? (
            <ul>
                {faltas.map((falta, index) => (
                <li key={falta.id}>
                    <strong>Falta {index}</strong> — motivo
                </li>
                ))}
            </ul>
            ) : (
            <p>Nenhuma falta registrada.</p>
            )}
        </FaltasSection>
        </Container>
    );
}
