import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Input from "../../components/component/Input.jsx";
import { Container } from "./style.jsx";
import logo from "../../logo.svg"

export default function CreateSala() {
    
    const [ name, setName ] = useState("")
    const { id } = useParams()
    const navigate = useNavigate()

    async function newClass (event) {
        event.preventDefault(); // evita o reload da página

        const newClass = { name, id };

        try {
            const response = await fetch("http://localhost:8000/salas/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newClass)
            });

            if (!response.ok) {
                throw new Error("Erro ao criar sala");
            }

            alert("Sala criada com sucesso");
            navigate(`/salas/${id}`)
        } catch (error) {
            console.error("Erro:", error.message);
        }
    }

    
    return (
        <Container>

            <img src={logo} alt="" />

            <div>
                <h1>Nova Sala</h1>

                <form onSubmit={newClass}>
                    <Input 
                        type={"text"}
                        placeholder={"Nome da Sala"}
                        required
                        value={name}
                        onChange={(event) => setName(event.target.value)
                        }
                    />
                    <button type="submit">Enviar</button>
                </form>
            </div>
                

        </Container>
    )
}