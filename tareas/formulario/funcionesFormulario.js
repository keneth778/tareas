import { tareas } from "../data.js"; // Importar el array de tareas desde data.js
import { cargarTareas } from "../tareas/itemTarea.js"; // Importar la función cargarTareas

// Función para agregar una tarea
export function agregarTarea(nuevaTarea) {
    tareas.push(nuevaTarea); // Agregar la nueva tarea al array
    const tasksContainer = document.querySelector(".tasks-container");
    tasksContainer.innerHTML = ""; // Limpiar el contenedor de tareas
    tasksContainer.appendChild(cargarTareas()); // Volver a cargar las tareas
}

// Función para cargar el formulario
export function cargarFormulario() {
    const footer = document.createElement("footer");
    footer.className = "footer"; // Clase en inglés

    const taskInput = document.createElement("input");
    taskInput.type = "text";
    taskInput.className = "task-input"; // Clase en inglés
    taskInput.placeholder = "Escribe una tarea...";

    const addButton = document.createElement("button");
    addButton.className = "add-button"; // Clase en inglés
    addButton.textContent = "Agregar";

    // Evento para agregar una tarea
    addButton.addEventListener("click", () => {
        const nuevaTarea = taskInput.value.trim();
        if (nuevaTarea) {
            agregarTarea(nuevaTarea);
            taskInput.value = ""; // Limpiar el input
        }
    });

    footer.appendChild(taskInput);
    footer.appendChild(addButton);

    document.body.appendChild(footer);
}