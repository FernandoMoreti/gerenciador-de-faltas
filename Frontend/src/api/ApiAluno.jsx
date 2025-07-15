export default async function ApiAluno(id) {
    const response = await fetch(`http://localhost:8000/aluno/${id}`);
    const data = await response.json();
    return data;
}
