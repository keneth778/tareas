/*index.js */
import { header } from "./header/header.js";
import { section } from "./section/section.js";
import { formulario } from "./formulario/form.js";
let DOM = document.getElementById("root");

DOM.appendChild(header());
DOM.appendChild(section());
