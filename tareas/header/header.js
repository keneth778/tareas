/*header.js*/
function header() {
    let header = document.createElement("header");
    header.className = "header";

    let contenedorImagen = document.createElement("div");
    contenedorImagen.className = "header-image";


    let contenedorTexto = document.createElement("div");
    contenedorTexto.className = "header-text";
    contenedorTexto.textContent = "Personal";

    header.appendChild(contenedorTexto);

    return header;
}

export { header };