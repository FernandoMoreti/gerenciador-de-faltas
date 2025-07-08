import { useState, useEffect } from "react";

export default function ApiProf(codProf, password) {
    
    const [Prof, isProf] = useState()
    
    useEffect(() => {
        fetch(`http://localhost:8000/Professor`)
        .then(response => response.json())
        .then(response => isProf(response))
        .catch(err => console.error(err));
    }, [])
    
    return Prof
}

