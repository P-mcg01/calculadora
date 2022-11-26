import { ItemCard } from "./ItemCard";
import code from "../../assets/img/coding.jpg";
import programmer from "../../assets/img/programmers.jpg";
import time from "../../assets/img/time.jpeg";
import money from "../../assets/img/money.jpg";
import geometry from "../../assets/img/geometry.png";

export function Reporte(resultado, katex) {
  const $section = document.createElement("section");

  $section.classList.add("panel");

  $section.appendChild(ItemCard("Modo", geometry, resultado.submodelo, katex));
  $section.appendChild(
    ItemCard("Datos", geometry, [resultado.es, resultado.honorario], katex)
  );
  $section.appendChild(
    ItemCard("Lineas de código", code, resultado.ldc, katex)
  );
  $section.appendChild(
    ItemCard("Miles de lineas de codigo", code, resultado.mldc, katex)
  );
  $section.appendChild(
    ItemCard("Esfuerzo", programmer, resultado.esfuerzo, katex)
  );
  $section.appendChild(
    ItemCard("Tiempo de desarrollo", time, resultado.tiempoDes, katex)
  );
  $section.appendChild(
    ItemCard("Personal Necesario", programmer, resultado.personal, katex)
  );
  $section.appendChild(
    ItemCard("Producción", code, resultado.produccion, katex)
  );
  $section.appendChild(ItemCard("Costo", money, resultado.costo, katex));

  return $section;
}
