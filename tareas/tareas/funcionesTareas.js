import { cargarHeader } from '../header/header.js';
import { cargarTareas } from './tareas.js';

export function cargarFormularioAgregarTarea(usuario_id) {
    const form = document.createElement('form');
    form.className = 'form-container';

    const inputTarea = document.createElement('input');
    inputTarea.type = 'text';
    inputTarea.placeholder = 'Escribe una tarea...';
    inputTarea.className = 'task-input';
    inputTarea.required = true;

    const agregarButton = document.createElement('button');
    agregarButton.type = 'submit';
    agregarButton.textContent = 'Agregar';
    agregarButton.className = 'add-button';

    form.appendChild(inputTarea);
    form.appendChild(agregarButton);

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Evitar que el formulario se envíe de forma tradicional
        const nombreTarea = inputTarea.value.trim();
        if (nombreTarea) {
            agregarTarea(usuario_id, nombreTarea); // Llamar a la función agregarTarea
            inputTarea.value = ''; // Limpiar el input
        } else {
            alert('Por favor, escribe una tarea.');
        }
    });

    return form;
}

function agregarTarea(usuario_id, nombreTarea) {
    fetch(`http://localhost:3000/tareas/${usuario_id}/agregar`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre: nombreTarea, estado: false }), // Enviar nombre y estado
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }
        return response.json();
    })
    .then(data => {
        if (data.id) {
            console.log('Tarea agregada correctamente:', data);
            // Recargar las tareas después de agregar una nueva
            const root = document.getElementById('root');
            root.innerHTML = ''; // Limpiar el contenido actual
            root.appendChild(cargarHeader()); // Cargar el header
            root.appendChild(cargarTareas(usuario_id)); // Recargar las tareas
        } else {
            alert('Error al agregar la tarea');
        }
    })
    .catch(error => {
        console.error('Error al agregar la tarea: ', error);
        alert('Hubo un error al agregar la tarea');
    });
}