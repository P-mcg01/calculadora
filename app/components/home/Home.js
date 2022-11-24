import { Loader } from "../Loader.js";
import { Banner } from "./Banner.js";
import { Division } from "./Division.js";
import { Header } from "./Header.js";
import { Main } from "./Main.js";

export function Home($root) {
  $root.appendChild(Loader());

  $root.appendChild(Header());
  $root.appendChild(Banner());
  $root.appendChild(Division());
  $root.appendChild(Main());
  setTimeout(() => {
    document.querySelector(".loader").style.setProperty("display", "none");
    document.documentElement.style.overflowY = "scroll";
  }, 3500);
}
