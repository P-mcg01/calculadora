import { Cocomo } from "./cocomo/Cocomo.js";
import { Home } from "./home/Home.js";
import { PF } from "./pf/PF.js";

export function Router() {
  const d = document,
    w = window,
    $root = d.getElementById("root");

  let { hash } = location;

  $root.innerHTML = null;

  if (!hash || hash === "#") {
    SearchStyle("home");
    Home($root);
  } else if (hash.includes("#cocomo_i")) {
    SearchStyle("cocomo");
    Cocomo($root);
  } else if (hash.includes("#pf")) {
    SearchStyle("pf");
    PF();
  } else if (hash.includes("#r_pf")) {
    SearchStyle("cocomo");
  }
}

function SearchStyle(viewName) {
  const estilos = document.styleSheets;

  switch (viewName) {
    case "home":
      for (let css of estilos) {
        if (css.href.endsWith("cocomo.css")) {
          css.disabled = true;
        }
        if (css.href.endsWith("242.css")) {
          css.disabled = true;
        }
        if (css.href.endsWith("pf.css")) {
          css.disabled = true;
        }
      }
      break;
    case "cocomo":
      for (let css of estilos) {
        if (css.href.endsWith("home.css")) {
          css.disabled = true;
        }
        if (css.href.endsWith("pf.css")) {
          css.disabled = true;
        }
      }
      break;
    case "pf":
      for (let css of estilos) {
        if (css.href.endsWith("home.css")) {
          css.disabled = true;
        }
        if (css.href.endsWith("cocomo.css")) {
          css.disabled = true;
        }
        if (css.href.endsWith("242.css")) {
          css.disabled = true;
        }
      }
  }
}
