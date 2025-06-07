import '../styles/Navbar.css'
import { Navbar, NavItem, NavLink, Container, Button, NavbarBrand, NavbarCollapse } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { UserIcon } from './modal/UserIcon';

export function NavbarComponent() {
    const navigate = useNavigate();
    const location = useLocation();
    const { logout } = useAuth();
    const isActive = (path) => location.pathname === path;
    const buttonStyles = {
        color: '#f0f0f0',
        borderColor: 'blue',
        fontWeight: 'bold',
        textAlign: 'start'
    };

    return (
        <>
            <div id="container-navbar">
                <Navbar bg="primary" expand="md" id='navbar' style={{
                    border: '3px solid white',
                    borderRadius: '10px',
                    // height: '100vh', // Ocupa toda a altura da tela
                    // width: '250px',
                }}>
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
                                        ...buttonStyles
                                    }}
                                >
                                    Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    onClick={() => { navigate('/usuarios') }}
                                    className={`btn btn-primary ${isActive('/usuarios') ? 'active' : ''}`}
                                    style={{
                                        ...buttonStyles
                                    }}
                                >
                                    Users
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    onClick={() => { navigate('/tasks') }}
                                    className={`btn btn-primary ${isActive('/tasks') ? 'active' : ''}`}
                                    style={{
                                        ...buttonStyles
                                    }}
                                >
                                    Tasks
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    onClick={() => { navigate('/test-navbar') }}
                                    className={`btn btn-primary ${isActive('/test-navbar') ? 'active' : ''}`}
                                    style={{
                                        ...buttonStyles
                                    }}
                                >
                                    Settings
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <UserIcon onClick={logout} />
                    </div>
                </Navbar >
            </div>
        </>
    )
}