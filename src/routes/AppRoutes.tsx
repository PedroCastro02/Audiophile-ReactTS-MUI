import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import SeeProduct from '../pages/SeeProduct';


function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SeeProduct" element={<SeeProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;