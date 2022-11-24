import { Funcionalidades } from "./Funcionalidades";
import { Header } from "./Header";
import { FactorAjuste } from "./FactorAjuste";

import "../../assets/css/stylePF.css";
import { PFModel } from "../../helpers/PFModel";

export function PF() {
  const $root = document.getElementById("root");
  const $main = document.createElement("main");
  const Modelo = new PFModel(getQuery());

  $root.appendChild(Header());
  $root.appendChild($main);
  Funcionalidades($main, Modelo);
  FactorAjuste($main, Modelo);
}

function getQuery() {
  const urlParametros = new URLSearchParams(window.location.search);
  const parametros = Object.fromEntries(urlParametros.entries());

  if (parametros["dias_lab"] > 31) {
    parametros["dias_lab"] = "31";
  }
  if (parametros["dias_lab"] < 1) {
    parametros["dias_lab"] = "20";
  }
  if (parametros["hrs_lab"] > 8 || parametros["hrs_lab"] < 1) {
    parametros["hrs_lab"] = "8";
  }
  if (parametros["devs"] < 1) {
    parametros["devs"] = "1";
  }
  if (parametros["sueldo"] < 1) {
    parametros["sueldo"] = "2250";
  }

  for (let param in parametros) {
    parametros[param] = Math.trunc(parametros[param]).toString();
  }

  return parametros;
}
