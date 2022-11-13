import home from "../../assets/img/home.png";

export function Title(titulo) {
  const $div = document.createElement("div");
  const $h2 = document.createElement("h2");
  const $img = document.createElement("img");

  $img.src = home;
  $img.alt = "home";

  $img.addEventListener("click", (e) => {
    location.href = location.origin + "/calculadora";
  });

  $div.classList.add("title");
  $h2.innerText = titulo;
  $div.appendChild($img);
  $div.appendChild($h2);

  return $div;
}
