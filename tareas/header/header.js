function header() {
    let header = document.createElement("header");
    header.className = "header";
    //nose
    let contenedorImagen = document.createElement("div");
    contenedorImagen.className = "header-image";

    let imagen = document.createElement("img");
    imagen.src = "https://w7.pngwing.com/pngs/227/599/png-transparent-luffy-flag.png";
    imagen.alt = "Logo";
    contenedorImagen.appendChild(imagen);

    let contenedorTexto = document.createElement("div");
    contenedorTexto.className = "header-text";
    contenedorTexto.textContent = "todo-list";

    header.appendChild(contenedorImagen);
    header.appendChild(contenedorTexto);

    return header;
}

export { header };