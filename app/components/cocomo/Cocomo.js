import { CocomoModel } from "../../helpers/CocomoModel.js";
import { Bar } from "./Bar";
import { Reporte } from "./Reporte.js";
import katex from "katex";

import "../../assets/css/styleCocomo.css";
import "../../../node_modules/katex/dist/katex.css";
import bg from "../../assets/img/fondo.jpg";

export function Cocomo($root) {
  ImageBackground(bg);
  const $main = document.createElement("main");
  const query = getQuery();
  const model = new CocomoModel(query.param1, query.param2, katex);
  const resultado = model.calcular();

  $main.appendChild(Bar(model));
  $main.appendChild(Reporte(resultado, katex));
  $root.appendChild($main);
}

function getQuery() {
  const urlParametros = new URLSearchParams(window.location.search);
  const parametros = Object.fromEntries(urlParametros.entries());

  return parametros;
}

function ImageBackground(img) {
  const $root = document.getElementById("root").style;

  $root.backgroundImage = `url(${img})`;
}
