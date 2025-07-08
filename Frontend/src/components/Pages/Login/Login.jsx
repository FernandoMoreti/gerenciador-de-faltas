import React, { useState } from "react";
import { Container } from "./style.jsx";
import Input from "../../component/Input"
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [login, setLogin ] = useState("")
    const [password, setPassword ] = useState("")
    const navigate = useNavigate()

    async function handleAuthenticationLogin(event) {
        event.preventDefault();

        const response = await fetch("http://localhost:8000/professor/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ login, password })
            });

        const auth = await response.json()

        if(auth.authenticated) {
            localStorage.setItem("usuario", JSON.stringify(auth.prof))

            alert("logado com sucesso")
            navigate("/home")
        } else {
            alert(auth.error)
        }

    }

    return (
        <Container>
            <form onSubmit={handleAuthenticationLogin}>
                <h1>Login</h1>
                <Input 
                    type={"text"}
                    placeholder="Login"
                    required
                    value={login}
                    onChange={(event) => setLogin(event.target.value)}
                />
                <Input
                    type={"password"}
                    placeholder="Senha"
                    required
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <button type="submit">Logar</button>
            </form>
        </Container>
    )
}