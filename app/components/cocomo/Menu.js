import { MenuItem } from "./MenuItem";

export function Menu(modelo) {
  const $ul = document.createElement("ul");

  $ul.appendChild(MenuItem("lineas de código", "c-ldc", modelo));
  $ul.appendChild(MenuItem("miles lineas de código", "c-mldc", modelo));
  $ul.appendChild(MenuItem("esfuerzo", "c-e", modelo));
  $ul.appendChild(MenuItem("tiempo desarrollo", "c-td", modelo));
  $ul.appendChild(MenuItem("personal necesario", "c-pn", modelo));
  $ul.appendChild(MenuItem("producción", "c-p", modelo));
  $ul.appendChild(MenuItem("costo", "c-c", modelo));

  return $ul;
}
