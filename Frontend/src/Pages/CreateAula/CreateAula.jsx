import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ApiSalas from "../../api/ApiSalas";

import { Container, Form, FormGroup } from "./styles";
import Input from "../../components/component/Input";
import Select from "../../components/component/Select";
import Button from "../../components/component/Button";


export default function CreateAula() {

    const { id } = useParams()
    const salas = ApiSalas(id)
    const navigate = useNavigate()
    const prof = JSON.parse(localStorage.getItem("usuario"))

    const [ date, setDate ] = useState("")
    const [ disciplina, setDisciplina ] = useState("")
    const [ descricao, setDescricao ] = useState("")
    const [ sala, setSalaAluno ] = useState("")

    async function newAula (event) {
        event.preventDefault();
        
        const { id } = JSON.parse(localStorage.getItem("usuario"));
        
        const newAula = { date, disciplina, descricao, sala, id };

        try {
            const response = await fetch("http://localhost:8000/aula/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newAula)
            });

            if (!response.ok) {
                throw new Error("Erro ao criar a aula");
            }

            const aulaCriada = await response.json();

            const aulaId = aulaCriada.id;

            navigate(`/falta/create/${aulaId}`)
        } catch (error) {
            console.error("Erro:", error.message);
        }
    }

    return (
        <Container>
            <h1>Crie uma aula para que possa gerenciar as faltas</h1>
            <Form onSubmit={newAula}>
                <div id="form-separation">
                    <FormGroup>
                        <h3>Informe a data da aula:</h3>
                        <Input 
                            type={"date"}
                            placeholder={"Data"}
                            required
                            value={date}
                            onChange={(event) => setDate(event.target.value)
                            }
                        />
                        <h3>Informe a disciplina:</h3>
                        <Select
                            required
                            value={disciplina}
                            onChange={(event) => setDisciplina(event.target.value)
                            }
                        >
                            <option value="" disabled hidden>
                                Selecione uma Disciplina...
                            </option>
                            <option 
                                key={prof.id} 
                                value={prof.disciplina}
                            >
                                {prof.disciplina}
                            </option>
                        </Select>
                        <h3>Selecione a sala:</h3>
                        <Select
                            required
                            value={sala}
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
                    </FormGroup>
                    <FormGroup>
                        <h3>Adicione informaçoes sobre a aula</h3>
                        <textarea
                            type={"text"}
                            placeholder={"Descrição da aula"}
                            required
                            value={descricao}
                            onChange={(event) => setDescricao(event.target.value)
                            }
                        />
                    </FormGroup>
                </div>
                <Button type="submit">Enviar</Button>
            </Form>
        </Container>
    )
}