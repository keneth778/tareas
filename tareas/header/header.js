// tareas/header/header.js
export function encabezado() {
    const header = document.createElement("header");
    header.className = "header"; // Clase en inglés
    header.innerHTML = `
        <h1 class="header-text">Task Manager</h1>
    `;
    return header;
}