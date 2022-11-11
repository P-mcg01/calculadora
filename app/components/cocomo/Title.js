export function Title(titulo) {
  const $div = document.createElement("div");
  const $h2 = document.createElement("h2");

  $div.classList.add("title");
  $h2.innerText = titulo;
  $div.appendChild($h2);

  return $div;
}
