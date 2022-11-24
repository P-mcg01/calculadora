import logo from "/app/assets/img/rings.svg";

export function Loader() {
  const $loader = document.createElement("div");
  const $img = document.createElement("img");
  const $root = document.getElementById("root");

  document.documentElement.style.overflowY = "hidden";
  $img.src = logo;
  $img.alt = "cargando...";
  $loader.appendChild($img);
  $loader.classList.add("loader");

  return $loader;
}
