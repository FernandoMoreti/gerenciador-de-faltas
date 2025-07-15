import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"
import Aluno from "./ListAlunos/Aluno.jsx";
import { Container } from "./style.jsx";
import ApiAlunos from "../../../../api/ApiAlunos.jsx"

export default function Alunos({ sala }) {

    const { id } = useParams()
    const [ alunos, setAlunos ] = useState()

    useEffect(() => {
        async function fetchData() {
            try {
                const alunos = await ApiAlunos();
                setAlunos(alunos);
            } catch (err) {
                console.error("Erro ao carregar alunos:", err);
            }
        }

        fetchData();
    }, [id]);

    if (!alunos) {
        return <p>Carregando...</p>;
    }

    return (
        <Container>
            <div>
                <p>Codigo</p>
                <p>Nome</p>
                <Link to={`/aula/create/${id}`}>Registrar Falta</Link>
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
                                exibirLink={true}
                            />
                        )
                    }
                })}
                <Link id="create-aluno" to={`/aluno/create/${id}`}>Criar Aluno</Link>
            </article>
        </Container>
    )
}