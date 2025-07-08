import { useState, useEffect } from "react";

export default function ApiSalas(id) {
    
    const [salas, setSalas] = useState([])
    
    useEffect(() => {

        if(!id) return;

        fetch(`http://localhost:8000/salas/${id}`)
        .then(response => response.json())
        .then(response => setSalas(response))
        .catch(err => console.error(err));
    }, [id])
    return salas
}
