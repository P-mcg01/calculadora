export function FormPF(fieldset, titulo) {
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
    const txtDias = document.getElementById("lab_dias").value,
      txtHoras = document.getElementById("lab_horas").value,
      txtDevs = document.getElementById("devs").value,
      txtHonorario = document.getElementById("honorarios").value;

    if (txtDias && txtHoras && txtDevs && txtHonorario) {
      location.href =
        location.href +
        `?dias_lab=${txtDias}&hrs_lab=${txtHoras}&devs=${txtDevs}&sueldo=${txtHonorario}#pf`;
    } else {
      const message = document.createElement("p");
      message.innerText = "Rellene el formulario correctamente.";
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
