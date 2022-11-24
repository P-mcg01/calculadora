export function Panel() {
  const $border = document.createElement("div");
  const $container = document.createElement("div");

  $border.classList.add("border");
  $container.classList.add("container");
  $border.appendChild($container);

  return $border;
}
