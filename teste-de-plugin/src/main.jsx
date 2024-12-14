import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // Caminho para o CSS global
import App from "./App.jsx"; // Corrija o caminho se necessário

// Renderiza a aplicação principal
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

