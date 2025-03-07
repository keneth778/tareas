import { tareas } from '../data.js';
import { cargarTareas } from '../tareas/tareas.js'; // error aqui

export function agregarTarea(nuevaTarea) {
    tareas.push(nuevaTarea);
    const tasksContainer = document.querySelector('.tasks-container');
    tasksContainer.innerHTML = '';
    tasksContainer.appendChild(cargarTareas());
}

export function cargarFormulario() {
    const footer = document.createElement('footer');
    footer.className = 'footer';

    const taskInput = document.createElement('input');
    taskInput.type = 'text';
    taskInput.className = 'task-input';
    taskInput.placeholder = 'Escribe una tarea...';

    const addButton = document.createElement('button');
    addButton.className = 'add-button';
    addButton.textContent = 'Agregar';

    addButton.addEventListener('click', () => {
        const nuevaTarea = taskInput.value.trim();
        if (nuevaTarea) {
            agregarTarea(nuevaTarea);
            taskInput.value = '';
        }
    });

    footer.appendChild(taskInput);
    footer.appendChild(addButton);

    document.body.appendChild(footer);
}