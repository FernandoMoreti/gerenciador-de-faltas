import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, FaltasSection, Info, Foto, Header, DivChart } from "./style.jsx";

import ApiAulaById from "../../api/ApiAula.jsx";
import ApiAluno from "../../api/ApiAluno.jsx";
import ApiFalta from "../../api/ApiFaltas.jsx";

import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

export default function AlunoPage() {

    const COLORS = [
        "#0088FE", "#00C49F", "#FFBB28", "#FF8042",
        "#AA00FF", "#FF0050", "#00D8FF", "#4CAF50",
        "#FFC107", "#FF5722"
    ];

    const { id } = useParams();

    const [ aulasFaltadas, setAulasFaltadas ] = useState([])
    const [ aluno, setAluno ] = useState(null);
    const [ faltas, setFaltas ] = useState([]);
    
    useEffect(() => {
        async function fetchData() {
            try {

                const [ aluno ] = await ApiAluno(id);
                const faltas = await ApiFalta(id);

                setAluno(aluno);
                setFaltas(faltas);

                for (let i = 0; i < faltas.length; i++) {
                    let [aula] = await ApiAulaById(faltas[i].id_aula)
                    setAulasFaltadas((prevAulas) => [...prevAulas, aula])
                }
                console.log(aulasFaltadas)
            } catch (err) {
                console.error("Erro ao carregar faltas:", err);
            }
        }

        fetchData();
        // eslint-disable-next-line
    }, [id])
    
    if (!aluno) return <p>Carregando aluno...</p>;

    const faltasPorDisciplina = aulasFaltadas.reduce((acc, aula) => {
        acc[aula.disciplina] = (acc[aula.disciplina] || 0) + 1;
        return acc;
    }, {});

    const valueForChart = Object.entries(faltasPorDisciplina).map(([name, value]) => ({
        name,
        value
    }));


    return (
        <Container>
        <Header>
            <div>
                <Foto src={"https://www.shareicon.net/data/2016/07/26/801997_user_512x512.png"} alt="Foto do aluno" />
                <Info>
                    <h2>{aluno.name}</h2>
                    <p><strong>Código:</strong> {aluno.codigoaluno}</p>
                </Info>
            </div>
            <DivChart>
                <PieChart width={500} height={300}>
                    <Pie
                        data={valueForChart}
                        cx="50%" cy="50%"
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        label
                    >
                        {valueForChart.map((entry, index) => (
                            <Cell key={index} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip 
                        contentStyle={{
                            fontSize: "12px",
                            width: "auto",
                            padding: "6px 8px",
                            backgroundColor: "#f9f9f9",
                            border: "1px solid #ccc",
                            borderRadius: "5px"
                        }}
                    />
                    <Legend layout="vertical" verticalAlign="middle" align="right" />
                </PieChart>
            </DivChart>
        </Header>

        <FaltasSection>
            <h3>Faltas:</h3>
            {faltas?.length > 0 ? (
            <ul>
                {!aulasFaltadas
                    ? <p>Carregando...</p>
                    :aulasFaltadas.map((aula, index) => (
                    <li key={aula.id}>
                        <strong>Falta: {index + 1} Data: {new Intl.DateTimeFormat("pt-BR").format(new Date(aula.data))}</strong>
                        <strong>Disciplina: {aula.disciplina}</strong>
                        <strong>Descrição da aula: {aula.descricao}</strong>
                    </li>
                ))
                }
            </ul>
            ) : (
            <p>Nenhuma falta registrada.</p>
            )}
        </FaltasSection>
        </Container>
    );
}
