// tareas/formulario/registro.js
import { cargarFormularioLogin } from './funcionesFormulario.js';

export function cargarFormularioRegistro() {
    const registroForm = document.createElement('form');
    registroForm.className = 'registro-form';

    const nombreInput = document.createElement('input');
    nombreInput.type = 'text';
    nombreInput.placeholder = 'Nombre';
    nombreInput.required = true;

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
    submitButton.textContent = 'Registrarse';

    registroForm.appendChild(nombreInput);
    registroForm.appendChild(correoInput);
    registroForm.appendChild(contraseñaInput);
    registroForm.appendChild(submitButton);

    registroForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const nombre = nombreInput.value.trim();
        const correo = correoInput.value.trim();
        const contraseña = contraseñaInput.value.trim();
        registrarUsuario(nombre, correo, contraseña);
    });

    return registroForm;
}

function registrarUsuario(nombre, correo, contraseña) {
    fetch('http://localhost:3000/registro', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, correo, contraseña }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.usuario_id) {
            alert('Usuario registrado correctamente');
            const root = document.getElementById('root');
            root.innerHTML = ''; // Limpiar el contenido actual
            root.appendChild(cargarFormularioLogin());
        } else {
            alert('Error al registrar el usuario');
        }
    })
    .catch(error => {
        console.error('Error al registrar el usuario: ', error);
        alert('Hubo un error al registrar el usuario');
    });
}