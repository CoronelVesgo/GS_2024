import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import BemVindo from "./Paginas/Bem-Vindo";
import EscolhaRecarga from "./Paginas/EscolhaRecarga";
import PagamentoN from "./Paginas/pagamentoN";
import PagamentoR from "./Paginas/pagamentoR";
import RecargaRapida from "./Paginas/recargaRapida";
import RecargaNormal from "./Paginas/recargaNormal";

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BemVindo/>}/>
        <Route path='/escolhaRecarga' element={<EscolhaRecarga/>}/>
        <Route path='/escolhaRecarga/pagamentoN' element={<PagamentoN/>}/>
        <Route path='/escolhaRecarga/pagamentoN/recargaNormal' element={<RecargaNormal/>}/>
        <Route path='/escolhaRecarga/pagamentoR' element={<PagamentoR/>}/>
        <Route path='/escolhaRecarga/pagamentoR/recargaRapida' element={<RecargaRapida/>}/>
        
      </Routes>
    </BrowserRouter>    
  )
};

export default App;

