import { Botones } from "./Botones";
import { Funciones } from "./Funciones";
import { Panel } from "./Panel";
import { Pregunta } from "./Pregunta";

export function FactorAjuste(main) {
  const preguntas = [
    "¿El sistema requiere respaldo y recupreración confiables?",
    "¿Se requieren comunicaciones de datos especializadas para transferir informacion a hacia o desde la aplicación?",
    "¿Existen funciones de procesamiento distribuidas?",
    "¿El desempeño es crucial?",
    "¿El sistema correrá en un entorno operativo existente enormemente utilizado?",
    "¿El sistema requiere entrada de datos en linea?",
    "¿La entrada de datos en linea requiere que la transacción de entrada se construya sobre multiples pantallas u operaciones?",
    "¿Los ALI se actualizan en linea?",
    "¿Las entradas, salidas, archivos o consultas son complejos?",
    "¿El procesamiento interno es complejo?",
    "¿El código se diseña para ser reutilizable?",
    "¿La conversion y la instalación se incluyen en el diseño?",
    "¿El sistema se diseña para instalaciones multiples en diferentes organizaciones?",
    "¿La aplicación se diseña para facilitar el cambio y su uso por parte del usuario?",
  ];
  const $section = document.createElement("section");
  const $h3 = document.createElement("h3");
  $h3.innerText = "FACTOR DE AJUSTE";

  const borde = Panel();
  const panel = borde.firstChild;
  const panelFunciones = Funciones("quest");
  const panelBotones = Botones();

  for (let i = 0; i < 14; i++) {
    panelFunciones.appendChild(Pregunta("p-" + i, i + 1, preguntas[i]));
  }

  panelBotones.appendChild(btnAnterior());
  panelBotones.appendChild(btnReporte());

  panel.appendChild(panelFunciones);
  panel.appendChild(panelBotones);

  $section.classList.add("layout");
  $section.id = "ajuste";
  $section.appendChild($h3);
  $section.appendChild(borde);

  main.appendChild($section);
}

function btnAnterior() {
  const button = document.createElement("button");

  button.innerText = "Anterior";

  button.addEventListener("click", (e) => {
    const hr = document.getElementsByTagName("hr")[0].style;
    const paso2 = document.getElementById("paso_2").style;
    const element = document.getElementsByTagName("main")[0];

    hr.background = "";
    paso2.background = "";

    element.scrollIntoView({
      behavior: "smooth",
    });
  });

  return button;
}

function btnReporte() {
  const button = document.createElement("button");

  button.innerText = "Finalizar";

  return button;
}
