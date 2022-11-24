export function DifBtn(imagen, titulo, modelo) {
  const figure = document.createElement("figure");
  const img = document.createElement("img");
  const caption = document.createElement("figcaption");

  img.alt = "icono";
  img.src = imagen;
  caption.innerText = titulo;

  figure.classList.add("dificon");
  figure.appendChild(img);
  figure.appendChild(caption);

  figure.addEventListener("click", (e) => {
    const container = document.getElementById("dificultad").childNodes;

    container.forEach((btn) => {
      if (btn.isEqualNode(e.target.parentElement)) {
        btn.style.opacity = "1";
        if (!e.target.textContent || e.target.textContent === "") {
          modelo.variables.dif = e.target.nextSibling.textContent;
        } else {
          modelo.variables.dif = e.target.textContent;
        }
      } else {
        btn.style.opacity = "0.5";
      }
    });
    console.log(modelo);
  });

  return figure;
}
