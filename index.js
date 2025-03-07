// index.js

import { cargarHeader } from './tareas/header/header.js';
import { cargarTareas } from './tareas/tareas/tareas.js'; // Importar desde tareas.js
import { cargarFormulario } from './tareas/formulario/funcionesFormulario.js';

// Función principal para cargar el DOM
function cargarDOM() {
    const root = document.getElementById('root');

    // Cargar el encabezado
    root.appendChild(cargarHeader());

    // Cargar las tareas
    root.appendChild(cargarTareas());

    // Cargar el formulario
    cargarFormulario();
}

// Llamar a la función para cargar el DOM cuando la página se cargue
document.addEventListener('DOMContentLoaded', cargarDOM);