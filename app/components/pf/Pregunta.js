export function Pregunta(id, num, texto) {
  const query = document.createElement("div");

  const logo = document.createElement("span");
  const pregunta = document.createElement("p");
  const radioPanel = document.createElement("fieldset");

  query.id = id;
  query.classList.add("card-p");
  logo.innerText = num;
  pregunta.classList.add("query-title");

  let rango = [
    "Sin influencia",
    "Influencia incidental",
    "Influencia moderada",
    "Influencia media",
    "Influencia significativa",
    "Influencia fuerte",
  ];
  let ids = ["no-inf", "inf-in", "inf-mod", "inf-med", "inf-sig", "inf-fuer"];
  for (let i = 0; i < 6; i++) {
    radioPanel.appendChild(opcion(rango[i], ids[i] + num, num));
  }
  pregunta.innerText = texto;
  pregunta.appendChild(logo);
  query.appendChild(pregunta);
  query.appendChild(radioPanel);

  return query;
}

function opcion(titulo, id, num) {
  const op = document.createElement("div");
  const radio = document.createElement("input");
  const etiqueta = document.createElement("label");

  etiqueta.innerText = titulo;
  etiqueta.htmlFor = id;
  radio.type = "radio";
  radio.name = "pregunta-" + num;
  radio.id = id;
  op.appendChild(radio);
  op.appendChild(etiqueta);

  return op;
}
