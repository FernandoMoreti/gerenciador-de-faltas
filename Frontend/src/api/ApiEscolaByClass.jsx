export default async function ApiEscolaByClass(id) {
    const response = await fetch(`http://localhost:8000/escola/sala/${id}`);
    const data = await response.json();
    return data;
}
