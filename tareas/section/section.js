// Función que crea y retorna la sección de tareas
export function section() {
    // Crear el contenedor principal de tareas
    const section = document.createElement("section");
    section.className = "tasks-container";

    // Array de tareas (según el texto de la imagen)
    const tasks = [
        "Drink 8 glasses of water",
        "Meditate for 10 minutes",
        "Inter Calderas De Leon ok",
        "Go for a 30-minute walk",
        "Write in a gratitude journal...",
        "Plan meals for the day",
        "Practice deep breathing",
        "Stretch for 15 minutes",
        "Limit screen time before bed"
    ];

    // Crear un div para cada tarea y agregarlo al contenedor
    tasks.forEach(task => {
        const taskDiv = document.createElement("div");
        taskDiv.className = "task-card";
        taskDiv.innerHTML = `
            <div class="checkbox"></div>
            <p class="task-text">${task}</p>
        `;
        section.appendChild(taskDiv);
    });

    // Crear el contenedor del buscador
    const searchContainer = document.createElement("div");
    searchContainer.className = "task-search";

    // Input de búsqueda
    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.className = "search-input";
    searchInput.placeholder = "Search tasks...";

    // Botón de agregar
    const addButton = document.createElement("button");
    addButton.className = "add-button";
    addButton.textContent = "Add";

    // Agregar elementos al contenedor del buscador
    searchContainer.appendChild(searchInput);
    searchContainer.appendChild(addButton);

    // Agregar el buscador a la sección principal
    section.appendChild(searchContainer);

    return section;
}

// Al cargarse el DOM, añadimos la sección de tareas al contenedor #app
document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");
    if (app) {
        app.appendChild(section());
    }
});
