// tareas/header/header.js
export function cargarHeader() {
    const header = document.createElement('header');
    header.className = 'header';
    header.innerHTML = `
        <h1 class="header-text">Task Manager</h1>
        <button id="cerrar-sesion">Cerrar sesión</button>
    `;

    // Agregar evento para cerrar sesión
    const cerrarSesionButton = header.querySelector('#cerrar-sesion');
    cerrarSesionButton.addEventListener('click', () => {
        localStorage.removeItem('usuario_id'); // Eliminar el usuario_id del localStorage
        window.location.href = '/'; // Redirigir al login
    });

    return header;
}