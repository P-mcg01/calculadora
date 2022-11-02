import { App } from "./App.js";
import { Router } from "./components/Router.js";
import styleHome from "./assets/css/styleHome.css";

const d = document;

d.addEventListener("DOMContentLoaded", App);
window.addEventListener("hashchange", Router);
