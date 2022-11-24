export function Tipos() {
  const valores = ["EE", "SE", "CE", "ALI", "ALE"];
  const select = document.createElement("select");

  valores.forEach((val) => {
    select.appendChild(opcion(val));
  });

  return select;
}

function opcion(valor) {
  const opc = document.createElement("option");

  opc.innerText = valor;
  opc.value = valor;

  return opc;
}
