import React from "react";
import { Link, useNavigate } from "react-router-dom";

import logo from "../../logo.svg"
import { Container } from "./style.jsx";


export default function Header(props) {

    const navigate = useNavigate();

    function logout() {
        localStorage.removeItem("usuario");
        navigate("/");
    }

    function comeBackPage() {
        navigate(-1)
    }

    return (
        <Container>
            <header>
                <button onClick={comeBackPage}>
                    <i className="fas fa-arrow-left"></i>
                </button>
                <img src={logo} alt="" />
                <h1>My Project With React</h1>
            </header>
            <div>
                <Link to="/home">Escolas</Link>
                <Link to="/contacts">Contatos</Link>
                <button onClick={logout}>Sair</button>
                <button onClick={props.handleChangeTheme}>{props.theme === "dark" ? "🌑" : "🌕"}</button>
            </div>
        </Container>
    )
}