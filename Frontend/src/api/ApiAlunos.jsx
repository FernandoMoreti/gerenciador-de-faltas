import { useState, useEffect } from "react";

export default function ApiAlunos() {
    
    const [alunos, setAlunos] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:8000/Aluno')
        .then(response => response.json())
        .then(response => setAlunos(response))
        .catch(err => console.error(err));
    }, [])

    return alunos
}

