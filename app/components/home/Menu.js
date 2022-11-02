import calc from "/app/assets/img/calc.svg";

import { Card } from "./Card.js";

export function Menu() {
  const $menu = document.createElement("section");
  const iconos = [];

  for (let i = 0; i < 3; i++) {
    const $icono = document.createElement("img");
    $icono.src = calc;
    $icono.alt = `logo ${i}`;

    iconos.push($icono);
  }

  $menu.classList.add("menu");
  $menu.appendChild(
    Card(
      iconos[0],
      "COCOMO I",
      {
        stop1: "rgb(19, 129, 176)",
        stop2: "rgb(42, 185, 187)",
      },
      "cocomo_i"
    )
  );
  $menu.appendChild(
    Card(
      iconos[1],
      "PUNTO DE FUNCIÓN",
      {
        stop1: "rgb(157, 26, 129)",
        stop2: "rgb(221, 18, 99)",
      },
      "punto_funcion"
    )
  );
  $menu.appendChild(
    Card(
      iconos[2],
      "LINEAS DE CÓDIGO",
      {
        stop1: "rgb(86, 14, 130)",
        stop2: "rgb(106, 16, 118)",
      },
      "lcd"
    )
  );

  return $menu;
}
