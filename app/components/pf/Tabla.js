import { TablaCabezera } from "./TablaCabezera";
import { TablaCuerpo } from "./TablaCuerpo";
import { TablaPie } from "./TablaPie";

export function Tabla(modelo) {
  modelo.getPonderacion();
  const $aside = document.createElement("aside");
  const table = document.createElement("table");

  $aside.classList.add("panel");

  table.appendChild(TablaCabezera());
  table.appendChild(TablaCuerpo(modelo));
  table.appendChild(TablaPie(modelo));
  $aside.appendChild(table);

  return $aside;
}
