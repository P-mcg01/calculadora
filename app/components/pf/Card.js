export function Card(titulo, image, result) {
  const $card = document.createElement("div");
  const $content = document.createElement("div");
  const $title = document.createElement("h4");
  const $result = document.createElement("p");
  const $comment = document.createElement("span");

  $title.innerText = titulo;
  $card.style.backgroundImage = `url(${image})`;
  $result.innerText = result;
  $result.style.fontSize = "2.25rem";
  $result.style.color = "#f7f4ff";
  $result.style.fontWeight = "800";

  $comment.style.fontSize = "1rem";
  $comment.style.fontWeight = "300";
  $comment.style.marginLeft = "1rem";

  switch (titulo) {
    case "Esfuerzo":
      $comment.innerText = "Horas hombre";
      break;
    case "Duración horas":
      $comment.innerText = "Horas";
      break;
    case "Duración meses":
      $comment.innerText = "Meses";
      break;
    case "Costo":
      $comment.innerText = "Bs.";
      break;
  }

  $content.appendChild($title);
  $result.appendChild($comment);
  $content.appendChild($result);
  $card.classList.add("itemCard");
  let tiempo = 1500 + Math.random() * 1000;

  $card.appendChild($content);
  setTimeout(() => {
    $card.style.opacity = 1;
  }, tiempo);

  return $card;
}
