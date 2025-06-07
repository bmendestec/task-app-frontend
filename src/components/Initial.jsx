import { Button, Spinner } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { NavbarComponent } from './commons/Navbar';
import { ListTodo, Settings, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Initial() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      <NavbarComponent />

      <div className="flex-grow-1 p-4 d-flex flex-column align-items-center">        
        <h1 className="fw-bold">Hi, {user}. Welcome to your Task App Organize!</h1>
        <p className="lead text-secondary">Start organizing your day and reach your goals!</p>
        {loading ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          <div className='d-flex flex-column align-items-center' style={{ margin: '100px' }}>
            <div className="row justify-content-center">
              <div className='col-md-4' style={{ height: '110px', width: '120px' }}>
                <Button
                  variant='primary'
                  onClick={() => { navigate('/usuarios') }}>
                  <User size={60} />
                  Users
                </Button>
              </div>
              <div className='col-md-4' style={{ height: '110px', width: '120px' }}>
                <Button variant='primary'
                  onClick={() => {navigate('/tasks')}}><ListTodo size={60} />Tasks</Button>
              </div>
              <div className='col-md-4' style={{ height: '110px', width: '120px' }}>
                <Button
                  variant='primary'
                  onClick={() => { navigate('/test-navbar') }}>
                  <Settings size={60} />
                  Settings
                </Button>
              </div>              
            </div>
          </div>
        )}
      </div>
    </div>
  );
}