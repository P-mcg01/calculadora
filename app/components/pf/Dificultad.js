import bar_s from "../../assets/img/bar-s.svg";
import bar_m from "../../assets/img/bar-m.svg";
import bar_c from "../../assets/img/bar-c.svg";
import { DifBtn } from "./DifBtn";

export function Dificultad(Modelo) {
  const div = document.createElement("div");

  div.id = "dificultad";
  div.appendChild(DifBtn(bar_s, "Simple", Modelo));
  div.appendChild(DifBtn(bar_m, "Medio", Modelo));
  div.appendChild(DifBtn(bar_c, "Complejo", Modelo));

  return div;
}
