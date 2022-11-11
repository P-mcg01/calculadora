export function MenuItem(text, id, modelo) {
  const $li = document.createElement("li");
  $li.id = id;

  $li.addEventListener("click", (e) => {
    modelo.renderFormula(id);
    const titulo = document.createElement("p");
    titulo.innerText = text;
    document
      .querySelector("#process")
      .insertAdjacentElement("afterbegin", titulo);
  });

  $li.innerText = text;
  return $li;
}
