import { Button, Spinner } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { NavbarComponent } from './commons/Navbar';
import { ListTodo, Settings, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './styles/Initial.css';

export function Initial() {
  const { userName, loading } = useAuth();
  const navigate = useNavigate();

  return (
    <div className='initial-container'>
      <div className='initial-title'>
        <h1 className="fw-bold">Hi, {userName}. Welcome to your Task App Organize!</h1>
        <p className="lead text-secondary">Start organizing your day and reach your goals!</p>
      </div>
      {loading ? (
          <span className="visually-hidden">Loading...</span>        
      ) : (
        <div className='initial-content'>
            <div>
              <Button
                variant='primary'
                onClick={() => { navigate('/usuarios') }}>
                <User size={60} />
                Users
              </Button>
            </div>
            <div>
              <Button variant='primary'
                onClick={() => { navigate('/tasks') }}><ListTodo size={60} />Tasks</Button>
            </div>
            <div>
              <Button
                variant='primary'
                onClick={() => { navigate('/test-navbar') }}>
                <Settings size={60} />
                Settings
              </Button>
            </div>
        </div>
      )}
    </div>
  );
}