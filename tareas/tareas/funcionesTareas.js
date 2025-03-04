// tareas/tareas/funcionesTareas.js
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

// Función para configurar las interacciones de las tareas
export function configurarInteraccionesTareas() {
    const taskCards = document.querySelectorAll(".task-card");

    taskCards.forEach(taskCard => {
        const checkbox = taskCard.querySelector(".checkbox");
        checkbox.addEventListener("click", () => {
            if (checkbox.classList.contains("checked")) {
                desmarcarTarea(taskCard);
            } else {
                marcarTarea(taskCard);
            }
        });
    });
}