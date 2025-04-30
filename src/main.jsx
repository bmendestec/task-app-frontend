import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from './context/AuthContextProvider.jsx';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>,
  </BrowserRouter>
)
