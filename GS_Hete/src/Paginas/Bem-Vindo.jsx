import React from "react";
import "/src/Css/Style.css"; 

const BemVindo = () => {
  return (
    <div className="container">
      <h1>
        Bem-vindo(a) à Estação de Abastecimento{" "}
        <span style={{ color: "#4CAF50" }}>VOLT ENERGY</span>
      </h1>
      <p>Carregue seu veículo elétrico de forma rápida, segura e eficiente.</p>
      <a href="/escolhaRecarga" className="button">
        Abastecer Meu Veículo
      </a>
      <footer>
        &copy; 2024 VOLT ENERGY - Sustentabilidade em Movimento
      </footer>
    </div>
  );
};

export default BemVindo;
