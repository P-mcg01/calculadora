import { TabHeader } from "./TabHeader";

export function TablaCabezera() {
  const head = document.createElement("thead");

  head.appendChild(TabHeader("Tipo"));
  head.appendChild(TabHeader("Valor"));
  head.appendChild(TabHeader("Simple"));
  head.appendChild(TabHeader("Medio"));
  head.appendChild(TabHeader("Complejo"));
  head.appendChild(TabHeader("Total"));

  return head;
}
