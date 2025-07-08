import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"
import Aluno from "./ListAlunos/Aluno.jsx";
import { Container } from "./style.jsx";
import apiAlunos from "../../../../api/ApiAlunos.jsx"

export default function Alunos({ sala }) {

    const { id } = useParams()

    const alunos = apiAlunos()

    return (
        <Container>
            <div>
                <p>Codigo</p>
                <p>Nome</p>
            </div>
            <article>
                {// eslint-disable-next-line
                alunos.map((aluno) => {
                    if (aluno.id_sala === sala) {
                        return (
                            <Aluno 
                                key={aluno.codigoaluno}
                                id={aluno.id}
                                codigo={aluno.codigoaluno} 
                                nome={aluno.name}
                            />
                        )
                    }
                })}
                <Link to={`/aluno/create/${id}`}>Criar Aluno</Link>
            </article>
        </Container>
    )
}