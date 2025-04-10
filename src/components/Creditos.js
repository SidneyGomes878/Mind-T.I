import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Creditos() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Créditos</h1>
      <p>
        Atividade proposta pela cadeira de Front-end.<br />
        Tecnologias utilizadas: React, React Router e JavaScript.
      </p>
      <h4>Participantes</h4>
      <ul>
        <li>Anthony Cabral</li>
        <li>Sidney Gomes</li>
        <li>Jennifer Silva</li>
        <li>Gabriel Santana</li>
      </ul>
      <h4>Docente</h4>
      <ul>
        <li>Sávio Almeida</li>
      </ul>
      
      <button onClick={() => navigate("/")}>Voltar para o Início</button>
    </div>
  );
}

export default Creditos;
