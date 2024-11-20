import React, { useEffect } from "react";
import "/src/Css/Style.css";

function RecargaNormal() {
  // Carrega o script externo dinamicamente
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/src/CodigosJava/recargaNormal";
    script.async = true;
    document.body.appendChild(script);

    // Limpa o script quando o componente é desmontado
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="container">
      <h1>Abastecendo seu veículo</h1>
      <p>Aguarde um momento.....</p>
      <div id="exibirVeiculos"></div>
      <footer>&copy; 2024 VOLT ENERGY - Sustentabilidade em Movimento</footer>
    </div>
  );
}

export default RecargaNormal;