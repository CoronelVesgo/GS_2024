import React from 'react';
import { useNavigate } from 'react-router-dom';
import "/src/Css/Style.css";

const PagamentoN = () => {
  const navigate = useNavigate();

  const irParaCarregamento = () => {
    navigate('/publico/recargaNormal.html');
  };

  return (
    <div className="container">
      <h1>Escolha o Método de Pagamento</h1>
      <div className="payment-options">
        <div className="payment-option" onClick={irParaCarregamento}>💳 Débito</div>
        <div className="payment-option" onClick={irParaCarregamento}>💳 Crédito</div>
        <div className="payment-option" onClick={irParaCarregamento}>⚡ PIX</div>
      </div>
      <div className="buttons">
        <a href="/escolhaRecarga" className="button secondary">
          Voltar para Seleção de Recargas
        </a>
      </div>
    </div>
  );
};

export default PagamentoN;