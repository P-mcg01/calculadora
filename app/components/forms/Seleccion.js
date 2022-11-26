export function Seleccion(props) {
  const valores = ["Organico", "Semiencajado", "Empotrado"];
  const $entrada = document.createElement("div");
  const $label = document.createElement("label");
  const $input = document.createElement("select");

  $label.htmlFor = props.id;
  $label.innerText = props.label;

  $input.id = props.id;
  $input.required = true;
  $input.placeholder = props.placeholder;
  $entrada.classList.add("input-number");

  valores.forEach((val) => {
    $input.appendChild(opcion(val));
  });

  $entrada.appendChild($label);
  $entrada.appendChild($input);

  return $entrada;
}

function opcion(valor) {
  const opc = document.createElement("option");

  opc.innerText = valor;
  opc.value = valor;

  return opc;
}
