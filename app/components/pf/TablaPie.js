export function TablaPie(modelo) {
  const $result = document.createElement("tfoot");
  const $row = document.createElement("tr");
  const $titulo = document.createElement("td");
  const $valor = document.createElement("td");

  modelo.getPFNA();
  $titulo.innerText = "PUNTOS DE FUNCION SIN AJUSTAR";
  $titulo.colSpan = 5;
  $valor.innerText = modelo._PFNA;
  $row.appendChild($titulo);
  $row.appendChild($valor);
  $result.appendChild($row);

  return $result;
}
