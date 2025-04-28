import React from 'react';
import { useHome } from '../hooks/useHome';
// import { useNavigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { NavbarComponent } from './Navbar';
import { LogoutButton } from './Logout';

export function Home() {
  const { logout } = useAuth();
  const { user, loading } = useHome();

  return (
    <div className="d-flex vh-100">
      <NavbarComponent />

      <div className="flex-grow-1 p-4">
        <LogoutButton onLogout={logout} />
        {loading ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) :
          <div>

            <h1>Home</h1>
            <p className="lead">Bem-vindo(a) ao seu organizador de tarefas, {user}!</p>           
          </div>
        }
      </div>
    </div>
  );
}