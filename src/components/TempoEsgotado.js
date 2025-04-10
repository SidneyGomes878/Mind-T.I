import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function TempoEsgotado() {
  const navigate = useNavigate();

  const voltarInicio = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <h2>Seu tempo acabou</h2>
      <p>Talvez de uma proxima vez DEV</p>
      <button onClick={voltarInicio}>Voltar para o início</button>
    </div>
  );
}

export default TempoEsgotado;
