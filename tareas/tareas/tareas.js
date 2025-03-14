import { cargarFormularioAgregarTarea } from './funcionesTareas.js';

export function cargarTareas(usuario_id) {
    const tareasContainer = document.createElement('section');
    tareasContainer.className = 'tasks-container';

    // Consultar las tareas del usuario desde el backend
    fetch(`http://localhost:3000/tareas/${usuario_id}`)
        .then(response => response.json())
        .then(tareas => {
            console.log('Tareas recibidas:', tareas); // Verifica las tareas
            if (tareas.length === 0) {
                tareasContainer.innerHTML = '<p class="no-tasks">No hay tareas para mostrar.</p>';
            } else {
                tareas.forEach(tarea => {
                    tareasContainer.appendChild(crearTarjetaTarea(tarea));
                });
            }
        })
        .catch(error => {
            console.error('Error al obtener las tareas: ', error);
            tareasContainer.innerHTML = '<p class="error">Hubo un error al cargar las tareas.</p>';
        });

    // Crear el footer dinámicamente
    const footer = document.createElement('footer');
    footer.id = 'footer'; // Asignar un ID al footer
    footer.appendChild(cargarFormularioAgregarTarea(usuario_id)); // Agregar el formulario al footer

    // Agregar el footer al body
    document.body.appendChild(footer);

    return tareasContainer;
}

// Función para crear una tarjeta de tarea
function crearTarjetaTarea(tarea) {
    const taskCard = document.createElement('div');
    taskCard.className = 'task-card';
    taskCard.innerHTML = `
        <div class="checkbox"></div>
        <p class="task-text">${tarea.nombre}</p>
    `;
    return taskCard;
}