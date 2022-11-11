export function Form(fieldset, titulo) {
  const $container = document.createElement("div");
  const $border = document.createElement("div");
  const $formulario = document.createElement("form");
  const $titulo = document.createElement("h2");
  const $button = document.createElement("button");
  $button.innerText = "PROCESAR";
  $titulo.innerText = titulo;

  $container.classList.add("modal");
  $formulario.classList.add("form");
  $border.classList.add("border");

  $container.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
      $container.remove();
    }
  });
  $button.addEventListener("click", (e) => {
    e.preventDefault();
    const txtES = document.getElementById("e_s").value,
      txtHonorario = document.getElementById("ch").value;

    if (txtES && txtHonorario) {
      location.href =
        location.href + `?param1=${txtES}&param2=${txtHonorario}#cocomo_i`;
    } else {
      const message = document.createElement("p");
      message.innerText = "Rellene los campos";
      message.classList.add("alert");
      e.target.parentNode.insertAdjacentElement("afterbegin", message);

      setTimeout((e) => {
        message.remove();
      }, 2500);
    }
  });
  $container.appendChild($border);
  $border.appendChild($formulario);

  $formulario.appendChild($titulo);
  fieldset.forEach((element) => {
    $formulario.appendChild(element);
  });
  $formulario.appendChild($button);

  return $container;
}
