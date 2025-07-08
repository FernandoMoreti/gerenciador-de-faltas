import { useState, useEffect } from "react";

export default function ApiAluno(id) {
    
    const [aluno, setAluno] = useState([])

    console.log(id)
    
    useEffect(() => {
        fetch(`http://localhost:8000/aluno/${id}`)
        .then(response => response.json())
        .then(response => setAluno(response))
        .catch(err => console.error(err));
    }, [id])

    return aluno
}

