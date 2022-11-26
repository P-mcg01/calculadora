import { Row } from "./Row";

export function TablaCuerpo(modelo) {
  const $body = document.createElement("tbody");

  const titulos = {
    EE: "Entradas externas",
    SE: "Salidas externas",
    CE: "Consultas externas",
    ALI: "Archivos lógicos internos",
    ALE: "Archivos lógicos externos",
  };

  for (let item in modelo.countFun) {
    $body.appendChild(
      Row(
        titulos[item],
        modelo.countFun[item],
        modelo._complejidad.simple[item],
        modelo._complejidad.medio[item],
        modelo._complejidad.complejo[item],
        modelo.ponderacion[item]
      )
    );
  }
  return $body;
}
