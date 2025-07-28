import '../styles/Navbar.css'
import { Navbar, NavItem, NavLink, Container, Button, NavbarBrand, NavbarCollapse } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { UserIcon } from './modal/UserIcon';

export function NavbarComponent({children}) {
    const navigate = useNavigate();
    const location = useLocation();
    const { logout } = useAuth();
    const isActive = (path) => location.pathname === path;

    return (
        <>
            <div id="navbar">
                <div id='container-nav'>
                    <div id='brand'>
                        <p>My Organizer</p>
                    </div>
                    <div className='contents-nav-buttons'>
                        <button
                            onClick={() => { navigate('/') }}
                            className={`nav-button ${isActive('/') ? 'active' : ''}`}
                        >
                            Home
                        </button>
                        <button
                            onClick={() => { navigate('/usuarios') }}
                            className={`nav-button ${isActive('/usuarios') ? 'active' : ''}`}
                        >
                            Users
                        </button>
                        <button
                            onClick={() => { navigate('/tasks') }}
                            className={`nav-button ${isActive('/tasks') ? 'active' : ''}`}
                        >
                            Tasks
                        </button>
                    </div>
                    <UserIcon onClick={logout} />
                </div>
            </div>
            {children}
        </>
    )
}