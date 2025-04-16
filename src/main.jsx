import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css'
import { Home } from './components/Home.jsx';
import { Login } from './components/Login.jsx';
import { Register } from './components/Register.jsx';
import { Initial } from './components/Initial.jsx';
import { Usuarios } from './components/Users.jsx';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Initial />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/usuarios" element={<Usuarios />} />
    </Routes>
  </BrowserRouter>,
)
