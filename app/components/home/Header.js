import { IconsBar } from "./IconsBar.js";
import logo from "/app/assets/img/modulo.png";

export function Header() {
  const $header = document.createElement("header");
  const $logo = document.createElement("div");
  const $imagen = document.createElement("img");
  const $nombreApp = document.createElement("span");

  $nombreApp.innerText = "CALCULADORA";
  $imagen.alt = "Logo app";
  $imagen.src = logo;
  $imagen.style.width = "50px";
  $imagen.style.height = "auto";

  $logo.appendChild($imagen);
  $logo.appendChild($nombreApp);

  $header.appendChild($logo);
  $header.appendChild(IconsBar());

  $header.classList.add("cabezera");

  return $header;
}
