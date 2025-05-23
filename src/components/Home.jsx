import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { NavbarComponent } from './Navbar';
import { LogoutButton } from './buttons/Logout';

export function Home() {
  const { logout, loading } = useAuth();

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
            <p className="lead">Bem-vindo(a) ao seu organizador de tarefas!</p>           
          </div>
        }
      </div>
    </div>
  );
}