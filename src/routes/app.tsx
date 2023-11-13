import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';


function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Adicione mais rotas conforme necessário */}
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;