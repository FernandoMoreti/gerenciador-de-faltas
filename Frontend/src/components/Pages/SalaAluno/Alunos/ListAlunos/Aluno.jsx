import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./style.jsx"

export default function Aluno(props) {

    return (
        <Container>
            <p>{props.codigo}</p>
            <p id="second-p">{props.nome}</p>
            <Link to={`/aluno/${props.id}`}>Details</Link>
        </Container>
    )
}