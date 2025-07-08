export default async function ApiProfEscola(id_prof) {
    const response = await fetch(`http://localhost:8000/ProfEscola/${id_prof}`);
    const data = await response.json();
    return data;
}