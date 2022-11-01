import { Loader } from "../Loader.js";
import { Banner } from "./Banner.js";
import { Division } from "./Division.js";
import { Header } from "./Header.js";
import { Main } from "./Main.js";

export function Home($root) {
  $root.appendChild(Loader());

  setTimeout(() => {
    document.querySelector(".loader").style.setProperty("display", "none");
    $root.appendChild(Header());
    $root.appendChild(Banner());
    $root.appendChild(Division());
    $root.appendChild(Main());
  }, 2000);
}
