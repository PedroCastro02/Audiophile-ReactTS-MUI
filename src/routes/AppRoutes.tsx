import React, { useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import SeeProduct from '../pages/SeeProduct';
import Cart from '../pages/Cart';


function AppRoutes() {
  const [produtoAtual, setProdutoAtual] = useState<any>()
  
  useEffect(() => {
    localStorage.setItem("produtos", (JSON.stringify([])))
  }, [] );
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home setProdutoAtual={setProdutoAtual} />} />
        <Route path="/SeeProduct" element={<SeeProduct produtoAtual={produtoAtual} />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;