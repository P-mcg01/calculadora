export function IconsBar() {
  const $barra = document.createElement("span"),
    $githubLink = document.createElement("img"),
    $theme = document.createElement("img");

  $githubLink.alt = "github";
  $githubLink.src = "/app/assets/img/github.svg";
  $githubLink.classList.add("icon");
  $theme.alt = "tema";
  $theme.src = "/app/assets/img/moon.svg";
  $theme.classList.add("icon");

  $barra.appendChild($githubLink);
  $barra.appendChild($theme);

  return $barra;
}
