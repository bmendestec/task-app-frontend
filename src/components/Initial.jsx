import '../components/styles/Initial.css';
import { Spinner } from 'react-bootstrap';
import { useInitial } from '../hooks/useInitial';
import { useAuth } from '../context/AuthContext';
import { NavbarComponent } from './Navbar';
import { LogoutButton } from './Logout';

export function Initial() {
  const { loading, user } = useInitial();
  const { logout } = useAuth();


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
          </div>
        )}
      </div>
    </div>
  );
}