import { Botones } from "./Botones";
import { Funciones } from "./Funciones";
import { Funcion } from "./Funcion";
import { Panel } from "./Panel";
import { Dificultad } from "./Dificultad";
import plus from "../../assets/img/plus-circle.svg";

export function Funcionalidades(main, Modelo) {
  const $section = document.createElement("section");
  const $h3 = document.createElement("h3");
  $h3.innerText = "FUNCIONALIDADES";

  const borde = Panel();
  const panel = borde.firstChild;
  const panelFunciones = Funciones("funciones");
  const panelBotones = Botones();
  const add = btnPlus();

  add.addEventListener("click", (e) => {
    panelFunciones.appendChild(Funcion(Modelo));
  });

  panelBotones.appendChild(add);
  panelBotones.appendChild(Dificultad(Modelo));
  panelBotones.appendChild(btnSiguiente(Modelo));

  panel.appendChild(panelFunciones);
  panel.appendChild(panelBotones);

  $section.classList.add("layout");
  $section.id = "fun";
  $section.appendChild($h3);
  $section.appendChild(borde);

  main.appendChild($section);
}

function btnPlus() {
  const btnPlus = document.createElement("img");

  btnPlus.classList.add("btn");
  btnPlus.alt = "add";
  btnPlus.src = plus;

  return btnPlus;
}

function btnSiguiente(Modelo) {
  const button = document.createElement("button");

  button.innerText = "Siguiente";

  button.addEventListener("click", (e) => {
    const hr = document.getElementsByTagName("hr")[0].style;
    const paso2 = document.getElementById("paso_2").style;
    const funciones = document.getElementById("funciones").childNodes;

    if (funciones.length === 0) {
      return;
    }

    for (let i = 0; i < funciones.length; i++) {
      if (funciones[i].dataset.added === "true") continue;

      const input = funciones[i].querySelector("input[type='text']").value;
      const tipo = funciones[i].querySelector("select").value;

      if (!input || input.length === 0) continue;
      switch (tipo) {
        case "EE":
          Modelo.countFun["EE"] += 1;
          break;
        case "SE":
          Modelo.countFun["SE"] += 1;
          break;
        case "CE":
          Modelo.countFun["CE"] += 1;
          break;
        case "ALI":
          Modelo.countFun["ALI"] += 1;
          break;
        case "ALE":
          Modelo.countFun["ALE"] += 1;
          break;
      }

      Modelo.funciones.push({
        funcion: input.trim().toLowerCase(),
        tipo: tipo,
      });
      funciones[i].dataset.added = "true";
    }

    hr.background = `linear-gradient(90deg, rgba(123, 42, 180, 1) 0%, rgba(222, 18, 106, 1) 100%)`;
    paso2.background = `linear-gradient(90deg, rgba(123, 42, 180, 1) 0%, rgba(222, 18, 106, 1) 100%)`;

    const ajuste = document.getElementById("ajuste");
    ajuste.scrollIntoView({
      behavior: "smooth",
    });
  });

  return button;
}
