import './styles/Navbar.css'
import { Navbar, Nav, NavItem, NavLink, Container } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LogoutButton } from './buttons/Logout';

export function NavbarComponent() {
    const navigate = useNavigate();
    const location = useLocation();
    const { logout } = useAuth();

    const isActive = (path) => location.pathname === path;

    return (
        <div id="container-navbar">
            <Navbar bg="primary" expand="md" id='navbar'>
                <div id="container">
                    <Navbar.Brand className="fw-bold"
                        id="brand">
                            My Organizer</Navbar.Brand>
                    <Navbar.Toggle />
                    <Nav className="gap-2">
                        <NavItem>
                            <NavLink
                                onClick={() => { navigate('/') }}
                                className={`btn btn-primary ${isActive('/') ? 'active' : ''}`}
                                style={{
                                    color: 'white',
                                    borderColor: 'blue',
                                    fontWeight: 'bold',
                                    textAlign: 'start',
                                }}
                            >Início</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                onClick={() => { navigate('/usuarios') }}
                                className={`btn btn-primary ${isActive('/usuarios') ? 'active' : ''}`}
                                style={{
                                    color: 'white',
                                    borderColor: 'blue',
                                    fontWeight: 'bold',
                                    textAlign: 'start',
                                }}>Usuários</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                onClick={() => { navigate('/settings') }}
                                className={`btn btn-primary ${isActive('/settings') ? 'active' : ''}`}
                                style={{
                                    color: 'white',
                                    borderColor: 'blue',
                                    fontWeight: 'bold',
                                    textAlign: 'start'
                                }}>Configurações</NavLink>
                        </NavItem>
                    </Nav>
                    <LogoutButton onLogout={logout} />
                </div>
            </Navbar >
        </div>
    )
}