export function MenuItem(text, id, modelo) {
  const $li = document.createElement("li");
  $li.id = id;

  $li.addEventListener("click", (e) => {
    const proceso = document.querySelector("#process");
    const titulo = document.createElement("p");

    proceso.style.opacity = 0;

    setTimeout(() => {
      titulo.innerText = text;
      modelo.renderFormula(id);
      proceso.insertAdjacentElement("afterbegin", titulo);
      proceso.style.opacity = 1;
    }, 900);
  });

  $li.innerText = text;
  return $li;
}
