import { BannerBody } from "./BannerBody.js";
import { BgCanvas } from "./BgCanvas.js";

export function Banner() {
  const $container = document.createElement("div");

  $container.classList.add("banner");
  $container.appendChild(BgCanvas());
  $container.appendChild(BannerBody());

  return $container;
}
