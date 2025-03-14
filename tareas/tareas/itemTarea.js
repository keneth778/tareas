export function cargarTareasDOM(tarea) {
    const taskCard = document.createElement('div');
    taskCard.className = 'task-card';
    taskCard.innerHTML = `
        <div class="checkbox"></div>
        <p class="task-text">${tarea}</p>
    `;

    // Configurar interacciones de la tarea
    const checkbox = taskCard.querySelector('.checkbox');
    checkbox.addEventListener('click', () => {
        if (checkbox.classList.contains('checked')) {
            desmarcarTarea(taskCard);
        } else {
            marcarTarea(taskCard);
        }
    });

    return taskCard;
}

function marcarTarea(taskCard) {
    const checkbox = taskCard.querySelector('.checkbox');
    checkbox.classList.add('checked');
}

function desmarcarTarea(taskCard) {
    const checkbox = taskCard.querySelector('.checkbox');
    checkbox.classList.remove('checked');
}