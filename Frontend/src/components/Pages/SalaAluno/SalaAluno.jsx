import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./style.jsx"
import Salas from "./Salas/Salas.jsx"
import Alunos from "./Alunos/Alunos.jsx";

export default function Aluno() {

    const [ sala, setSala ] = useState("1")
    const navigate = useNavigate();

    
    useEffect(() => {
        const usuario = JSON.parse(localStorage.getItem("usuario"));
        if (!usuario) {
            navigate("/")
        }
    }, [navigate])

    function handleToggleClass(newclass) {
        setSala((prevState) => prevState === newclass? newclass : newclass)
    };

    return (
        <Container>
            <Salas handleToggleClass={handleToggleClass}/>
            <Alunos sala={sala}/>
        </Container>
    )
};