// tareas/formulario/funcionesFormulario.js

// Función para agregar una tarea
export function agregarTarea(nuevaTarea) {
    // Datos que se enviarán al servidor
    const datosTarea = {
        nombre_tarea: nuevaTarea,
        estado: false // Estado inicial de la tarea
    };

    // Hacer una solicitud POST al servidor
    fetch('http://localhost:3000/agregar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', // Indicar que el cuerpo es JSON
        },
        body: JSON.stringify(datosTarea), // Convertir los datos a JSON
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        return response.json(); // Convertir la respuesta a JSON
    })
    .then(data => {
        console.log('Tarea agregada correctamente:', data);
        alert('Tarea agregada correctamente.'); // Mostrar mensaje de éxito
    })
    .catch(error => {
        console.error('Error al agregar la tarea:', error);
        alert('Hubo un error al agregar la tarea. Inténtalo de nuevo.'); // Mostrar mensaje de error
    });
}

// Función para cargar el formulario
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
            agregarTarea(nuevaTarea); // Llamar a la función actualizada
            taskInput.value = ''; // Limpiar el input
        } else {
            alert('Por favor, escribe una tarea.'); // Validación básica
        }
    });

    footer.appendChild(taskInput);
    footer.appendChild(addButton);

    document.body.appendChild(footer);
}