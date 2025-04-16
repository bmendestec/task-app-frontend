import { useHome } from '../hooks/useHome';
import { useNavigate } from 'react-router-dom';
import '../components/styles/Home.css';

export function Home() {
  const { handleCloseSession, user, userData } = useHome();
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <header className="home-header">
        <div className='home-small-header'>
          <h1>Bem-vindo, {userData || "Usuário"}!</h1>
          <p className="home-email">{user?.email}</p>
          <button className="logout-button" onClick={handleCloseSession}>Sair</button>
        </div>
      </header>
      <main className="home-main">
        <button className="home-button" onClick={() => navigate('/usuarios')}>Usuários</button>
      </main>
      <footer className="home-footer">
      </footer>
    </div>
  );
}