import React, { useEffect, useState } from "react";
import { Container } from "./style.jsx";
import { useNavigate } from "react-router-dom";
import ApiProfEscola from "../../api/ApiProfEscola.jsx"
import ButtonEscola from "./ButtonEscola/ButtonEscola.jsx";


export default function Home() {
    const navigate = useNavigate();
    const [user, setUser] = useState()
    const [escolas, setEscolas] = useState();
  
    useEffect(() => {
        const usuario = JSON.parse(localStorage.getItem("usuario"));
        setUser(usuario)
        if (!usuario) {
            navigate("/")
        }
    }, [navigate])

    useEffect(() => {
        async function fetchEscolas() {
            if (user?.id) {
                const resultado = await ApiProfEscola(user.id);
                setEscolas(resultado);
            }
        }

        fetchEscolas();
    }, [user]);

    return (
        <Container>
            {user 
                ?<h1>Bem vindo {user.name} gerenciador de faltas</h1>
                :<h1>Carregando...</h1>
            }
            <p>Escolha a escola que deseja contabilizar as faltas:</p>
            <div>
                {escolas
                    ?escolas.map((escola) => (
                        <ButtonEscola id={escola.id_escola} name={escola.name} img={escola.img}/>
                    ))
                    :<h1>Carregando...</h1>
                }
            </div>
        </Container>
    )
}