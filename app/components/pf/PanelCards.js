import programmer from "../../assets/img/programmers.jpg";
import time from "../../assets/img/time.jpeg";
import money from "../../assets/img/money.jpg";
import { Card } from "./Card";

export function PanelCards(modelo) {
  modelo.calcular();
  const $section = document.createElement("section");
  $section.style.flexBasis = "auto";
  $section.style.height = "45vh";

  $section.appendChild(Card("Esfuerzo", programmer, modelo._esfuerzo));
  $section.appendChild(Card("Duración horas", time, modelo._duracionHoras));
  $section.appendChild(Card("Duración meses", time, modelo._duracionMeses));
  $section.appendChild(Card("Costo", money, modelo._costo));

  $section.classList.add("panel");

  return $section;
}
