import { InNumber } from "./InNumber.js";
import { Seleccion } from "./Seleccion.js";

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
  campos.push(
    InNumber({
      id: "p",
      label: "P",
      placeholder: "Ingresa el valor de P",
      min: 1,
      max: 999999,
    })
  );
  campos.push(
    Seleccion({
      id: "submodel",
      label: "Modo",
      placeholder: "Seleccione un modo",
    })
  );

  return campos;
}
