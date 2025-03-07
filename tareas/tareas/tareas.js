// tareas/tareas/tareas.js

// Array para almacenar las tareas (si es necesario)
export const tareas = [];

// Función para consultar las tareas desde el backend
export function consultarTareasBackEnd() {
    return fetch('http://localhost:3000/usuarios') // Ajusta la URL según tu backend
        .then(response => response.json())
        .catch(error => {
            console.error('Error obteniendo las tareas:', error);
            return []; // Devuelve un array vacío en caso de error
        });
}

// Función para cargar y renderizar las tareas
export function cargarTareas() {
    const tareasContainer = document.createElement('section');
    tareasContainer.className = 'tasks-container';

    // Consultar tareas desde el backend
    consultarTareasBackEnd().then(tareas => {
        tareas.forEach(tarea => {
            tareasContainer.appendChild(cargarTarea(tarea));
        });
    });

    return tareasContainer;
}

// Función para crear una tarjeta de tarea
export function cargarTarea(tarea) {
    const taskCard = document.createElement('div');
    taskCard.className = 'task-card';
    taskCard.innerHTML = `
        <div class="checkbox"></div>
        <p class="task-text">${tarea.nombre}</p> <!-- Ajusta según la estructura de tus datos -->
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

// Funciones para marcar/desmarcar tareas
function marcarTarea(taskCard) {
    const checkbox = taskCard.querySelector('.checkbox');
    checkbox.classList.add('checked');
}

function desmarcarTarea(taskCard) {
    const checkbox = taskCard.querySelector('.checkbox');
    checkbox.classList.remove('checked');
}