import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./style.jsx"

export default function Aluno(props) {

    const navigate = useNavigate()

    function showAluno() {
        navigate(`/aluno/${props.id}`)
    }

    return (
        <Container onClick={showAluno}>
            <p>{props.codigo}</p>
            <p>{props.nome}</p>
        </Container>
    )
}