export function cargarHeader() {
    const header = document.createElement('header');
    header.className = 'header';
    header.innerHTML = `
        <h1 class="header-text">Task Manager</h1>
    `;
    return header;
}