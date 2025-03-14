// index.js
import { cargarFormularioLogin } from './tareas/formulario/funcionesFormulario.js'; // Importación correcta
import { cargarTareas } from './tareas/tareas/tareas.js';
import { cargarHeader } from './tareas/header/header.js';

// Función principal para cargar el DOM
function cargarDOM() {
    const root = document.getElementById('root');

    // Verificar si el usuario ya está autenticado (usando localStorage)
    const usuario_id = localStorage.getItem('usuario_id');

    if (usuario_id) {
        // Si el usuario está autenticado, cargar el header y las tareas
        root.appendChild(cargarHeader());
        root.appendChild(cargarTareas(usuario_id));
    } else {
        // Si no está autenticado, cargar el formulario de login
        root.appendChild(cargarFormularioLogin());
    }
}

// Llamar a la función para cargar el DOM cuando la página se cargue
document.addEventListener('DOMContentLoaded', cargarDOM);