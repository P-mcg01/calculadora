import { Step } from "./Step";

export function Header() {
  const $header = document.createElement("header");
  const line1 = document.createElement("hr");

  $header.classList.add("cabezera");
  $header.appendChild(Step("1", "paso_1"));
  $header.appendChild(line1);
  $header.appendChild(Step("2", "paso_2"));

  return $header;
}
