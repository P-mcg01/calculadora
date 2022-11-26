import bg from "../../assets/img/fondo.jpg";
import { PanelCards } from "./PanelCards";
import { Tabla } from "./Tabla";

export function ReportePF(modelo) {
  SearchStyle();
  const root = document.getElementById("root");
  root.innerHTML = null;
  const $main = document.createElement("main");
  $main.style.flexDirection = "column";
  $main.style.height = "auto";
  ImageBackground(bg);

  $main.appendChild(Tabla(modelo));
  $main.appendChild(PanelCards(modelo));

  root.appendChild($main);
  console.log(modelo);
}

function ImageBackground(img) {
  const $root = document.getElementById("root").style;

  $root.backgroundImage = `url(${img})`;
}

function SearchStyle() {
  const estilos = document.styleSheets;

  for (let css of estilos) {
    if (css.href.endsWith("home.css")) {
      css.disabled = true;
    }
    if (css.href.endsWith("pf.css")) {
      css.disabled = true;
    }
    if (css.href.endsWith("cocomo.css")) {
      css.disabled = false;
    }
  }
}
