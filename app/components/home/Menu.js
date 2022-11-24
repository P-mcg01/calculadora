import calc from "/app/assets/img/calc.svg";

import { Card } from "./Card.js";
import { CocomoFieldSet } from "../forms/CocomoFieldSet.js";
import { PfFieldset } from "../forms/PfFieldset.js";

export function Menu() {
  const $menu = document.createElement("section");
  const iconos = [];

  for (let i = 0; i < 2; i++) {
    const $icono = document.createElement("img");
    $icono.src = calc;
    $icono.alt = `logo ${i}`;

    iconos.push($icono);
  }

  $menu.classList.add("menu");
  $menu.appendChild(
    Card(
      "cocomo",
      iconos[0],
      "COCOMO I",
      {
        stop1: "rgb(19, 129, 176)",
        stop2: "rgb(42, 185, 187)",
      },
      CocomoFieldSet()
    )
  );
  $menu.appendChild(
    Card(
      "pf",
      iconos[1],
      "PUNTO DE FUNCIÓN",
      {
        stop1: "rgb(157, 26, 129)",
        stop2: "rgb(221, 18, 99)",
      },
      PfFieldset()
    )
  );

  return $menu;
}
