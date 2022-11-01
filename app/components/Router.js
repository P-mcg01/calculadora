import { Home } from "./home/Home.js";

export function Router() {
  const d = document,
    w = window,
    $root = d.getElementById("root");

  let { hash } = location;

  $root.innerHTML = null;

  if (!hash || hash === "#") {
    Home($root);
  } else if (hash.includes("#cocomo_i")) {
    $root.innerHTML = `<h1>COCOMO I</h1>`;
  } else if (hash.includes("#punto_funcion")) {
    $root.innerHTML = `<h1>PUNTO FUNCION</h1>`;
  } else if (hash.includes("#lcd")) {
    $root.innerHTML = `<h1>LCD</h1>`;
  }
}
