import logo from "/app/assets/img/rings.svg";

export function Loader() {
  const $loader = document.createElement("img");
  $loader.src = logo;
  $loader.alt = "cargando...";
  $loader.classList.add("loader");

  return $loader;
}
