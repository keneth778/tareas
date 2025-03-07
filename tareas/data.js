export const tareas = [];

export function consultarTareasBackEnd() {
    return fetch('http://localhost:3000/usuarios')
        .then(response => response.json())
        .catch(error => console.error('Error:', error));
}