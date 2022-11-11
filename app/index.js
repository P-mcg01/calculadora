import { App } from "./App.js";
import { Router } from "./components/Router.js";
import "./assets/css/styleHome.css";

const d = document;

d.addEventListener("DOMContentLoaded", App);
window.addEventListener("hashchange", Router);
