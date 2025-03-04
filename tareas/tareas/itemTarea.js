import { tareas } from "../data.js"; // Importar el array de tareas desde data.js

// Función para marcar una tarea
export function marcarTarea(taskCard) {
    const checkbox = taskCard.querySelector(".checkbox");
    checkbox.classList.add("checked");
}

// Función para desmarcar una tarea
export function desmarcarTarea(taskCard) {
    const checkbox = taskCard.querySelector(".checkbox");
    checkbox.classList.remove("checked");
}

// Función para crear una tarjeta de tarea
export function cargarTarea(tarea) {
    const taskCard = document.createElement("div");
    taskCard.className = "task-card"; // Clase en inglés
    taskCard.innerHTML = `
        <div class="checkbox"></div>
        <p class="task-text">${tarea}</p>
    `;

    // Configurar interacciones de la tarea
    const checkbox = taskCard.querySelector(".checkbox");
    checkbox.addEventListener("click", () => {
        if (checkbox.classList.contains("checked")) {
            desmarcarTarea(taskCard);
        } else {
            marcarTarea(taskCard);
        }
    });

    return taskCard;
}

// Función para renderizar todas las tareas
export function cargarTareas() {
    const tasksContainer = document.createElement("section");
    tasksContainer.className = "tasks-container"; // Clase en inglés

    tareas.forEach(tarea => {
        const taskCard = cargarTarea(tarea);
        tasksContainer.appendChild(taskCard);
    });

    return tasksContainer;
}