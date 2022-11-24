import { InNumber } from "./InNumber.js";

export function CocomoFieldSet() {
  const campos = [];
  campos.push(
    InNumber({
      id: "e_s",
      label: "Flujo E/S",
      placeholder: "Ingresa el flujo de E/S",
      min: 1,
      max: 999999,
    })
  );
  campos.push(
    InNumber({
      id: "ch",
      label: "Costo honorario",
      placeholder: "Ingresa el costo honorario",
      min: 1,
      max: 999999,
    })
  );

  return campos;
}
