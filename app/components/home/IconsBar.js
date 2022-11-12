import github from "/app/assets/img/github.svg";
//import moon from "/app/assets/img/moon.svg";

export function IconsBar() {
  const $barra = document.createElement("span"),
    $githubLink = document.createElement("img");
  //$theme = document.createElement("img");

  $githubLink.alt = "github";
  $githubLink.src = github;
  $githubLink.classList.add("icon");
  $githubLink.addEventListener("click", (e) => {
    location.href = "https://github.com/P-mcg01/calculadora";
  });
  //$theme.alt = "tema";
  //$theme.src = moon;
  //$theme.classList.add("icon");

  $barra.appendChild($githubLink);
  //$barra.appendChild($theme);

  return $barra;
}
