export function InNumber(props) {
  const $entrada = document.createElement("div");
  const $label = document.createElement("label");
  const $input = document.createElement("input");

  $label.htmlFor = props.id;
  $label.innerText = props.label;

  $input.id = props.id;
  $input.type = "number";
  $input.required = true;
  $input.placeholder = props.placeholder;
  $input.step = 1;
  $input.setAttribute("min", `${props.min}`);
  $input.setAttribute("max", `${props.max}`);

  $entrada.classList.add("input-number");
  $entrada.appendChild($label);
  $entrada.appendChild($input);

  return $entrada;
}
