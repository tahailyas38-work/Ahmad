import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource-variable/manrope";
import "@fontsource/rem/200.css";
import "@fontsource/rem/700.css";
import App from "./App";
import "./styles/global.css";

document.documentElement.classList.add("js");

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const deepLink = Boolean(
  window.location.hash &&
    window.location.hash !== "#" &&
    window.location.hash !== "#top",
);
if (!reduceMotion && !deepLink) {
  document.documentElement.classList.add("intro-lock");
}

const root = document.getElementById("root");
if (!root) throw new Error("Root element missing");

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
