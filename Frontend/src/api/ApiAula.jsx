export default async function ApiAulaById(id) {
    const response = await fetch(`http://localhost:8000/aula/${id}`);
    const data = await response.json();
    return data;
}