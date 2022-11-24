import minus from "../../assets/img/minus-circle.svg";
import { Tipos } from "./Tipos";

export function Funcion(Modelo) {
  const div = document.createElement("div");
  const intext = document.createElement("input");
  const opciones = Tipos();
  const icon = document.createElement("img");

  div.classList.add("funcion");
  intext.type = "text";
  intext.placeholder = "Ingresa una funcionalidad";
  icon.classList.add("btn");
  icon.alt = "eliminar";
  icon.src = minus;

  icon.addEventListener("click", (e) => {
    const funcion = e.target.parentElement;
    const tipo = e.target.previousSibling;
    const input = tipo.previousSibling.value;

    if (!input || input.length === 0) {
      funcion.remove();
    } else {
      switch (tipo.value) {
        case "EE":
          Modelo.countFun["EE"] -= 1;
          break;
        case "SE":
          Modelo.countFun["SE"] -= 1;
          break;
        case "CE":
          Modelo.countFun["CE"] -= 1;
          break;
        case "ALI":
          Modelo.countFun["ALI"] -= 1;
          break;
        case "ALE":
          Modelo.countFun["ALE"] -= 1;
          break;
      }
      e.target.parentElement.remove();
    }
  });

  div.appendChild(intext);
  div.appendChild(opciones);
  div.appendChild(icon);

  return div;
}
