import '../components/styles/Initial.css';
import { Button, Spinner } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { NavbarComponent } from './Navbar';
import { LogoutButton } from './Logout';
import { HelpCircle, ListTodo, Newspaper, Settings } from 'lucide-react';

export function Initial() {
  const { logout, user, loading } = useAuth();

  return (
    <div className="d-flex vh-100">
      <NavbarComponent />

      <div className="flex-grow-1 p-4 d-flex flex-column align-items-center">
        <LogoutButton onLogout={logout} />
        <h1 className="fw-bold">Hi, {user}. Welcome to your Task App Organize!</h1>
        <p className="lead text-secondary">Start organizing your day and reach your goals!</p>
        {loading ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          <div>
            <div className="row justify-content-center mt-4">
              <div className='col-md-4' style={{ height: '80px', width: '120px' }}>
                <Button variant='primary'><ListTodo className='me-3' size={60} />Tasks</Button>
              </div>
              <div className='col-md-4' style={{ height: '80px', width: '120px' }}>
                <Button variant='primary'><Settings className='me-3' size={60} />Settings</Button>
              </div>
              <div className='col-md-4' style={{ height: '80px', width: '120px' }}>
                <Button variant='primary'><Newspaper className='me-3' size={60} />Reports</Button>
              </div>
              <div className='col-md-4' style={{ height: '80px', width: '120px' }}>
                <Button variant='primary'><HelpCircle className='me-3' size={60} />Help</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}