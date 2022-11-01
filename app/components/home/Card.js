export function Card(icono, titulo, color, metodo) {
  const $card = document.createElement("div");
  const $titulo = document.createElement("span");
  const $gradiente = `linear-gradient(35deg, ${color.stop1} 0%, ${color.stop2} 100%)`;
  const rodar = [
    { transform: "rotate(0deg) scale(1)" },
    { transform: "rotate(180deg) scale(0.5)" },
    { transform: "rotate(360deg) scale(1)" },
  ];
  const duracion = {
    duration: 1000,
    iterations: 1,
  };

  $titulo.innerText = titulo;
  $card.classList.add("card");
  $card.style.background = $gradiente;
  $card.appendChild(icono);
  $card.appendChild($titulo);

  $card.addEventListener("mouseenter", (e) => {
    e.target.firstChild.animate(rodar, duracion);
  });

  $card.addEventListener("click", (e) => {
    location.href = location.origin + `/#${metodo}`;
  });

  return $card;
}
