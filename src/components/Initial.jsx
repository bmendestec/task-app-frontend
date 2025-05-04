import '../components/styles/Initial.css';
import { Button, Spinner } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { NavbarComponent } from './Navbar';
import { LogoutButton } from './buttons/Logout';
import { ChevronLeft, HelpCircle, ListTodo, Newspaper, Settings, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Initial() {
  const { logout, user, loading } = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      <NavbarComponent />

      <div className="flex-grow-1 p-4 d-flex flex-column align-items-center">
        <div style={{ display: "flex", justifyContent: "end", width: "100%" }}>
          <LogoutButton onLogout={logout} />
        </div>
        <h1 className="fw-bold">Hi, {user}. Welcome to your Task App Organize!</h1>
        <p className="lead text-secondary">Start organizing your day and reach your goals!</p>
        {loading ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          <div className='d-flex flex-column align-items-center' style={{ margin: '15%' }}>
            <div className="row justify-content-center">
              <div className='col-md-4' style={{ height: '110px', width: '120px' }}>
                <Button
                  variant='primary'
                  onClick={() => { navigate('/usuarios') }}>
                  <User size={60} />
                  Usuários
                </Button>
              </div>
              <div className='col-md-4' style={{ height: '110px', width: '120px' }}>
                <Button
                  variant='primary'
                  onClick={() => { navigate('/settings') }}>
                  <Settings size={60} />
                  Settings
                </Button>
              </div>
              <div className='col-md-4' style={{ height: '110px', width: '120px' }}>
                <Button variant='primary'><Newspaper size={60} />Reports</Button>
              </div>
              <div className='col-md-4' style={{ height: '110px', width: '120px' }}>
                <Button variant='primary'><HelpCircle size={60} />Help</Button>
              </div>
            </div>
            <div className="row justify-content-center" style={{ marginTop: '5%' }}>
              <div className='col-md-4' style={{ height: '110px', width: '120px' }}>
                <Button variant='primary'><ListTodo size={60} />Tasks</Button>
              </div>
              <div className='col-md-4' style={{ height: '110px', width: '120px' }}>
                <Button variant='primary'><Settings size={60} />Settings</Button>
              </div>
              <div className='col-md-4' style={{ height: '110px', width: '120px' }}>
                <Button variant='primary'><Newspaper size={60} />Reports</Button>
              </div>
              <div className='col-md-4' style={{ height: '110px', width: '120px' }}>
                <Button variant='primary'><HelpCircle size={60} />Help</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}