import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyNavbar from './components/nav';
import Dashboard from './pages/dashboard';
import MyLivro from './pages/livros';
import MyLogin from './pages/login';

// Criação do contexto para permitir que o usuário logado transite pelas telas
import { AuthProvider } from './contexts/auth';

const RoutesAPP = () => {

  return (
    <div>
      <Router>
      <AuthProvider>
        <MyNavbar />
          <Routes>
            <Route path="/login" element={<MyLogin />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/livro" element={<MyLivro />} />
          </Routes>
          </AuthProvider>
      </Router>
    </div>
  );
};

export default RoutesAPP;
