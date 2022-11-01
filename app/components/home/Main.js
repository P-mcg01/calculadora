import { Menu } from "./Menu.js";

export function Main() {
  const $main = document.createElement("main");
  const $titulo = document.createElement("h2");
  const $parrafo = document.createElement("p");

  $parrafo.innerText = "Por favor, seleccione un modelo de estimación.";
  $titulo.innerText = "MODELOS DE ESTIMACIÓN";

  $main.id = "principal";
  $main.appendChild($titulo);
  $main.appendChild($parrafo);
  $main.appendChild(Menu());

  return $main;
}
