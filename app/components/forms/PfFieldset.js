import { InNumber } from "./InNumber.js";

export function PfFieldset() {
  const campos = [];

  campos.push(
    InNumber({
      id: "lab_dias",
      label: "Días laborales",
      placeholder: "Ingrese los días loborales del mes",
      min: 1,
      max: 31,
    })
  );

  campos.push(
    InNumber({
      id: "lab_horas",
      label: "Horas laborales diarias",
      placeholder: "Ingrese las horas de trabajo por día",
      min: 1,
      max: 8,
    })
  );

  campos.push(
    InNumber({
      id: "devs",
      label: "Programadores",
      placeholder: "Ingrese el número de programadores",
      min: 1,
      max: 999999,
    })
  );

  campos.push(
    InNumber({
      id: "honorarios",
      label: "honorarios profesionales",
      placeholder: "Ingrese el sueldo",
      min: 1,
      max: 999999,
    })
  );

  return campos;
}
