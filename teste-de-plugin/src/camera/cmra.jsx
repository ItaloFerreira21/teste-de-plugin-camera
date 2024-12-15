import React from "react";
import { createRoot } from "react-dom/client";
import "../index.css"; // Ajuste este caminho para onde está o CSS
import App from "../App.jsx"; // Ajuste se necessário
import CameraComponent from "./cmra.jsx"; // Já está correto


const root = document.getElementById('root');

createRoot(root).render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>
);

export default CameraComponent;