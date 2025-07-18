import React, { useState } from "react";
import { Link, useParams } from "react-router-dom"
import { Container } from "./styles.jsx"
import Sala from "./ListSala/Sala.jsx";
import apiSalas from "../../../api/ApiSalas.jsx"

export default function ListSalas({ handleToggleClass }) {

    const [ activeIndex, setActiveIndex ] = useState(null)

    const { id } = useParams();

    const salas = apiSalas(id)

    return (
        <Container>
            <div>
                <h1>Salas</h1>
                {salas.map((sala, index) => (
                    <Sala 
                        key={sala.id}
                        ativo={activeIndex === index}
                        handleActive={() => setActiveIndex(index)}
                        handleToggleClass={handleToggleClass}
                        sala_id={sala.id}
                        className={sala.name}
                    />
                ))}
            </div>
            <Link to={`/sala/create/${id}`}>Criar Sala</Link>
        </Container>
    )
}