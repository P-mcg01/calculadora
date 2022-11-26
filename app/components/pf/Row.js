export function Row(title, valor, simple, medio, complejo, total) {
  const $row = document.createElement("tr");
  const $titulo = document.createElement("td");
  const $valor = document.createElement("td");
  const $simple = document.createElement("td");
  const $medio = document.createElement("td");
  const $complejo = document.createElement("td");
  const $total = document.createElement("td");

  $titulo.innerText = title;
  $valor.innerText = valor;
  $simple.innerText = simple;
  $medio.innerText = medio;
  $complejo.innerText = complejo;
  $total.innerText = total;

  $row.appendChild($titulo);
  $row.appendChild($valor);
  $row.appendChild($simple);
  $row.appendChild($medio);
  $row.appendChild($complejo);
  $row.appendChild($total);

  return $row;
}
