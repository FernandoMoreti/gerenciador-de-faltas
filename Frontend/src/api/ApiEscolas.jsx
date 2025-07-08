import { useState, useEffect } from "react";

export default function ApiEscola() {
    
    const [escolas, setEscolas] = useState([])
    
    useEffect(() => {
        fetch(`http://localhost:8000/escola`)
        .then(response => response.json())
        .then(response => setEscolas(response))
        .catch(err => console.error(err));
    }, [])
    
    return escolas
}