import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../../component/Input.jsx";
import Select from "../../component/Select.jsx";
import { Container } from "./style.jsx";
import logo from "../../../logo.svg"
import ApiSalas from "../../../api/ApiSalas.jsx"

export default function CreateAluno() {

    const { id } = useParams();
    const navigate = useNavigate();

    const salas = ApiSalas(id)
    
    const [ name, setName ] = useState("")
    const [ codigoAluno, setCodigo ] = useState("")
    const [ salaAluno, setSalaAluno ] = useState("")

    async function newStudent (event) {
        event.preventDefault(); // evita o reload da página

        const newAluno = { name, codigoAluno, salaAluno };
        console.log(newAluno)

        try {
            const response = await fetch("http://localhost:8000/Aluno/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newAluno)
            });

            if (!response.ok) {
                throw new Error("Erro ao criar aluno");
            }

            alert("Aluno criado com sucesso");
            navigate(`/salas/${id}`)
        } catch (error) {
            console.error("Erro:", error.message);
        }
    }

    
    return (
        <Container>

            <img src={logo} alt="" />

            <div>
                <h1>Novo Aluno</h1>

                <form onSubmit={newStudent}>
                    <Input 
                        type={"text"}
                        placeholder={"Nome *"}
                        required
                        value={name}
                        onChange={(event) => setName(event.target.value)
                        }
                    />
                    <Input
                        type={"text"}
                        placeholder={"Codigo"}
                        required
                        value={codigoAluno}
                        onChange={(event) => setCodigo(event.target.value)
                        }
                    />
                    <Select
                        required
                        value={salaAluno}
                        onChange={(event) => setSalaAluno(event.target.value)
                        }
                    >
                        <option value="" disabled hidden>
                            Selecione uma sala...
                        </option>
                        
                        {salas.map((sala) => (
                            <option 
                                key={sala.id} 
                                value={sala.id}
                            >
                                {sala.name}
                            </option>
                        ))}
                    </Select>

                    <button type="submit">Enviar</button>
                </form>
            </div>
                

        </Container>
    )
}