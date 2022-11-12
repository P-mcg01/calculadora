export function ItemCard(titulo, image, resultado, katex) {
  const $card = document.createElement("div");
  const $content = document.createElement("div");
  const $title = document.createElement("h4");
  const $result = document.createElement("p");
  const options = {
    displayMode: false,
    output: "html",
  };

  $title.innerText = titulo;
  switch (titulo) {
    case "Lineas de código":
      $card.style.backgroundImage = `url(${image})`;
      katex.render(
        `\\texttt{\\huge${resultado} \\normalsize{LDC}}`,
        $result,
        options
      );
      break;
    case "Miles de lineas de codigo":
      $card.style.backgroundImage = `url(${image})`;
      katex.render(
        `\\texttt{\\huge${resultado} \\normalsize{MLDC}}`,
        $result,
        options
      );
      break;
    case "Esfuerzo":
      $card.style.backgroundImage = `url(${image})`;
      katex.render(
        `\\texttt{\\huge${Math.ceil(resultado)} \\Large$\\frac{persona}{mes}$}`,
        $result,
        options
      );
      break;
    case "Tiempo de desarrollo":
      $card.style.backgroundImage = `url(${image})`;
      katex.render(
        `\\texttt{\\huge${Math.ceil(resultado)} \\normalsize{meses}}`,
        $result,
        options
      );
      break;
    case "Personal Necesario":
      $card.style.backgroundImage = `url(${image})`;
      katex.render(
        `\\texttt{\\huge${Math.ceil(
          resultado
        )} \\Large$\\frac{programador}{mes}$}`,
        $result,
        options
      );
      break;
    case "Producción":
      $card.style.backgroundImage = `url(${image})`;
      katex.render(
        `\\texttt{\\huge${Math.floor(
          resultado
        )} \\Large$\\frac{ins \\cdot progr}{mes}$}`,
        $result,
        options
      );
      break;
    case "Costo":
      $card.style.backgroundImage = `url(${image})`;
      katex.render(
        `\\texttt{\\huge${Math.ceil(resultado)} \\Large{Bs.}}`,
        $result,
        options
      );
      break;
    case "Sub Modelo":
      $card.style.backgroundImage = `url(${image})`;
      katex.render(
        `\\texttt{${resultado.nombre}} \\newline
         \\lceil\\texttt{
          a: ${resultado.a} \\quad
          b: ${resultado.b}
         }\\rceil \\newline
         \\lfloor\\texttt{
          c: ${resultado.c} \\quad
          d: ${resultado.d}
         }\\rfloor`,
        $result,
        options
      );
      break;
    case "Datos":
      katex.render(
        `\\texttt{\\small{Flujo E/S:}} \\enspace
         \\texttt{ ${resultado[0]} } \\newline
         \\texttt{\\small{Honorario:}} \\enspace
         \\texttt{ ${resultado[1]} \\small{Bs}}`,
        $result,
        options
      );
      $card.style.backgroundImage = `url(${image})`;
      break;
  }

  $content.appendChild($title);
  $content.appendChild($result);
  $card.classList.add("itemCard");
  $card.appendChild($content);

  return $card;
}
