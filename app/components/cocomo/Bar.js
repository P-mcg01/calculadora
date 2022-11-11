import { Menu } from "./Menu";
import { Title } from "./Title";
import { Procedimiento } from "./Procedimiento";

export function Bar(modelo) {
  const $aside = document.createElement("aside");

  $aside.classList.add("panel");
  $aside.appendChild(Title("COCOMO BÁSICO"));
  $aside.appendChild(Menu(modelo));
  $aside.appendChild(Procedimiento());

  return $aside;
}
