export default async function ApiAlunos() {
    const response = await fetch(`http://localhost:8000/aluno`);
    const data = await response.json();
    return data;
}
