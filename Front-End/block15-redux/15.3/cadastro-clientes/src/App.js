import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ClientesCadastrados from './pages/ClientesCadastrados';
import Home from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/clientes-cadastrados" element={ <ClientesCadastrados /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/cadastro" element={ <Cadastro /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
