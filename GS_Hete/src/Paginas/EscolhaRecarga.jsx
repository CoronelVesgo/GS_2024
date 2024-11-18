import React from "react";
import "/src/Css/Style.css"; 

const EscolhaRecarga = () => {
  return (
    <div className="container">
      <h1>Escolha o Tipo de Recarga</h1>
      <div className="options">
        <div className="option">
          <h2>
            Recarga <span style={{ color: '#4CAF50' }}>TURBO</span>
          </h2>
          <p>
            Ideal para quem tem pouco tempo! Carrega seu veículo mais rapidamente, porém com um custo mais alto devido à energia em alta potência.
          </p>
          <a href="/escolhaRecarga/pagamentoR" className="button">
            Escolher Recarga Turbo
          </a>
        </div>
        <div className="option">
          <h2>Recarga Normal</h2>
          <p>
            Uma opção mais econômica, sendo ideal para períodos mais longos de permanência.
          </p>
          <a href="/escolhaRecarga/pagamentoN" className="button">
            Escolher Recarga Normal
          </a>
        </div>
      </div>
      <footer>
        &copy; 2024 VOLT ENERGY - Sustentabilidade em Movimento
      </footer>
    </div>
  );
};

export default EscolhaRecarga;