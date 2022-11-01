export function BannerBody() {
  const $panel = document.createElement("div"),
    $titulo = document.createElement("h1"),
    $emphasis = document.createElement("span"),
    $subtitulo = document.createElement("h3"),
    $button = document.createElement("a");

  $emphasis.innerText = "COSTOS";
  $titulo.innerText = "ESTIMACIÓN DE ";
  $titulo.appendChild($emphasis);

  $subtitulo.innerText = "ing. de software - upea";

  $button.innerText = "CALCULAR";
  $button.classList.add("button");
  $button.addEventListener("click", (e) => {
    e.preventDefault();
    const main = document.getElementById("principal");

    main.scrollIntoView({
      behavior: "smooth",
    });
  });

  $panel.appendChild($titulo);
  $panel.appendChild($subtitulo);
  $panel.appendChild($button);
  $panel.classList.add("panel");

  return $panel;
}
