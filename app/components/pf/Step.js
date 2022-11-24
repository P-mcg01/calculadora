export function Step(paso, id) {
  const $span = document.createElement("span");

  $span.id = id;
  $span.classList.add("paso");
  $span.innerText = paso;

  return $span;
}
