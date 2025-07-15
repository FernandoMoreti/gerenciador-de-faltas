export default async function ApiFaltas(id) {
    const response = await fetch(`http://localhost:8000/falta/${id}`);
    const data = await response.json();
    return data;
}
