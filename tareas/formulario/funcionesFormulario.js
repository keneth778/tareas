// tareas/formulario/funcionesFormulario.js
import { cargarHeader } from '../header/header.js'; // Importación añadida
import { cargarTareas } from '../tareas/tareas.js'; // Importación añadida
import { cargarFormularioRegistro } from './registro.js';

export function cargarFormularioLogin() {
    const loginForm = document.createElement('form');
    loginForm.className = 'login-form';

    const correoInput = document.createElement('input');
    correoInput.type = 'email';
    correoInput.placeholder = 'Correo electrónico';
    correoInput.required = true;

    const contraseñaInput = document.createElement('input');
    contraseñaInput.type = 'password';
    contraseñaInput.placeholder = 'Contraseña';
    contraseñaInput.required = true;

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Iniciar sesión';

    const registroButton = document.createElement('button');
    registroButton.type = 'button';
    registroButton.textContent = 'Registrarse';
    registroButton.addEventListener('click', () => {
        const root = document.getElementById('root');
        root.innerHTML = ''; // Limpiar el contenido actual
        root.appendChild(cargarFormularioRegistro());
    });

    loginForm.appendChild(correoInput);
    loginForm.appendChild(contraseñaInput);
    loginForm.appendChild(submitButton);
    loginForm.appendChild(registroButton);

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const correo = correoInput.value.trim();
        const contraseña = contraseñaInput.value.trim();
        iniciarSesion(correo, contraseña);
    });

    return loginForm;
}

// Función para iniciar sesión
function iniciarSesion(correo, contraseña) {
    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ correo, contraseña }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.usuario_id) {
            localStorage.setItem('usuario_id', data.usuario_id); // Guardar el ID del usuario
            const root = document.getElementById('root');
            root.innerHTML = ''; // Limpiar el contenido actual
            root.appendChild(cargarHeader()); // Cargar el header
            root.appendChild(cargarTareas(data.usuario_id)); // Cargar las tareas
        } else {
            alert('Credenciales incorrectas');
        }
    })
    .catch(error => {
        console.error('Error al iniciar sesión: ', error);
        alert('Hubo un error al iniciar sesión');
    });
}