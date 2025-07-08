import { useState, useEffect } from "react";

export default function ApiFalta(id) {
    
    const [faltas, setFaltas] = useState([])

    console.log(id)
    
    useEffect(() => {
        fetch(`http://localhost:8000/falta/${id}`)
        .then(response => response.json())
        .then(response => setFaltas(response))
        .catch(err => console.error(err));
    }, [id])

    return faltas
}

