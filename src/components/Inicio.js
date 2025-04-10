import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Inicio() {
  const navigate = useNavigate();
  
  const iniciarJogo = () => {
    navigate("/categoria");
  };

  return (
    <div className="container">
      <h1>Bem-vindo ao Mind T.I</h1>
      <p>Teste seus conhecimentos em T.I!</p>

      <button
        className="button-large"
        onClick={iniciarJogo}
      >
        Começar
      </button>
      <button
        className="button-small"
        onClick={() => navigate("/creditos")}
      >
        Créditos
      </button>
    </div>
  );
}

export default Inicio;
