import { consultarTareasBackEnd } from '../data.js'; // Ruta relativa correcta
import { cargarTareasDOM } from './itemTarea.js';   // Ruta relativa correcta
export function cargarTareas() {
    const tareasContainer = document.createElement('section');
    tareasContainer.className = 'tasks-container';

    // Consultar tareas desde el backend
    consultarTareasBackEnd().then(tareas => {
        tareas.forEach(tarea => {
            tareasContainer.appendChild(cargarTareasDOM(tarea));
        });
    });

    return tareasContainer;
}