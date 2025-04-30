import '../components/styles/Initial.css';
import { Spinner } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { NavbarComponent } from './Navbar';
import { LogoutButton } from './Logout';

export function Initial() {
  const { logout, user, loading } = useAuth();
  
  return (
    <div className="d-flex vh-100">
      <NavbarComponent />

      <div className="flex-grow-1 p-4 d-flex flex-column align-items-center">
        <LogoutButton onLogout={logout} />
        {loading ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          <div>
            <h1 className="fw-bold text-primary">Olá, {user}. Seja bem-vindo ao seu Organizador de Tarefas!</h1>
            <p className="lead text-secondary">Comece a organizar seu dia e alcance seus objetivos!</p>          
            <div className="grid-container">
              <button className="menu-button">Início</button>
              <button className="menu-button">Tarefas</button>
              <button className="menu-button">Configurações</button>
              <button className="menu-button">Perfil</button>
              <button className="menu-button">Relatórios</button>
              <button className="menu-button">Notificações</button>
              <button className="menu-button">Ajuda</button>
              <button className="menu-button">Sair</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}