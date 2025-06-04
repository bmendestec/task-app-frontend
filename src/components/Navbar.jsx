import './styles/Navbar.css'
import { Navbar, NavItem, NavLink, Container, Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { UserIcon } from './commons/modal/UserIcon';

export function NavbarComponent() {
    const navigate = useNavigate();
    const location = useLocation();
    const { logout } = useAuth();

    const isActive = (path) => location.pathname === path;

    return (
        <>
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
                                >
                                    Home
                                </NavLink>
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
                                        color: 'white',
                                        borderColor: 'blue',
                                        fontWeight: 'bold',
                                        textAlign: 'start',
                                    }}
                                >
                                    Tasks
                                </NavLink>
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
            {/* <div style={{
                display: 'flex',
                flexDirection: 'column',
                width: '15%'
            }}>
                <Button variant="primary">Users</Button>
                <Button variant="primary">Tasks</Button>
                <Button variant="primary">Settings</Button>

            </div> */}
        </>
    )
}