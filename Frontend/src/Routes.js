import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import { Container } from "./ContainerRoutes.jsx"

import SalaAluno from "./Pages/SalaAluno/SalaAluno.jsx";
import Home from "./Pages/Home/Home.jsx";
import CreateAluno from "./Pages/CreateAluno/CreateAluno.jsx";
import CreateSala from "./Pages/CreateSala/CreateSala.jsx";
import NotFound from "./Pages/NotFound/NotFound.jsx";
import Login from "./Pages/Login/Login.jsx";
import AlunoPage from "./Pages/AlunoPage/AlunoPage.jsx";
import CreateAula from "./Pages/CreateAula/CreateAula.jsx";
import CreateFalta from "./Pages/CreateFalta/CreateFalta.jsx";


export default function WebRoutes() {

    const location = useLocation();
    const transitions = useTransition(location, {
        from: { opacity: 0, transition: "1s", transform: "translateY(150px)", position: "absolute", width: "100%", height: "100%" },
        enter: { opacity: 1, transition: "3s", transform: "translateY(0px)", position: "absolute", width: "100%", height: "100%" },
        leave: { opacity: 0, transition: "0s", transform: "translateY(-150px)", position: "absolute", width: "100%", height: "100%" },
    });

    return (
        <Container>
            {transitions((props, item) => (
                <animated.div style={props}>
                    <Routes location={item}>
                        <Route path="/home" Component={Home}/>
                        <Route path="/salas" Component={SalaAluno}/>
                        <Route path="/salas/:id" Component={SalaAluno}/>
                        <Route path="/aluno/:id" Component={AlunoPage}/>
                        <Route path="/sala/create/:id" Component={CreateSala}/>
                        <Route path="/aluno/create/:id" Component={CreateAluno}/>
                        <Route path="/aula/create/:id" Component={CreateAula}/>
                        <Route path="/falta/create/:id" Component={CreateFalta}/>
                        <Route path="/" Component={Login}/>
                        <Route path="*" Component={NotFound}/>
                    </Routes>
                </animated.div>
            ))}
        </Container>
    ) 
}