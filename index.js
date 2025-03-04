import { encabezado } from "./tareas/header/header.js"; // Importar el encabezado
import { cargarTareas } from "./tareas/tareas/tareas.js"; // Importar cargarTareas
import { cargarFormulario } from "./tareas/formulario/funcionesFormulario.js"; // Importar cargarFormulario

function cargarDOM() {
    // Obtener el contenedor principal
    const raiz = document.getElementById("root");

    // Crear un contenedor para organizar los elementos
    const contenedor = document.createElement("div");
    contenedor.className = "contenedor";

    // Crear y agregar el encabezado
    const divEncabezado = document.createElement("div");
    divEncabezado.className = "div-encabezado";
    divEncabezado.appendChild(encabezado()); // Agregar el encabezado
    contenedor.appendChild(divEncabezado);

    // Crear y agregar el contenedor de tareas
    const divTareas = document.createElement("div");
    divTareas.className = "div-tareas";
    divTareas.appendChild(cargarTareas()); // Agregar las tareas
    contenedor.appendChild(divTareas);

    // Crear y agregar el footer
    const divFooter = document.createElement("div");
    divFooter.className = "div-footer";
    cargarFormulario(); // Configurar el footer
    contenedor.appendChild(divFooter);

    // Agregar el contenedor al DOM
    raiz.appendChild(contenedor);
}

// Llamar a la función para cargar el DOM
cargarDOM();