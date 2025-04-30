import { Navbar, Nav, NavItem, NavLink } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';

export function NavbarComponent() {
    const navigate = useNavigate();
    const location = useLocation();

    const isActive = (path) => location.pathname === path;
    
    return (
        <Navbar bg="dark" expand="md" className="flex-column p-3 border-end" style={{ width: '250px' }}>
            <Navbar.Brand className="fw-bold" style={{
                color: 'white',
                width: 220, borderColor: 'blue'
            }}>Meu Organizador</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="flex-column gap-2">
                    <NavItem>
                        <NavLink onClick={() => { navigate('/') }}
                            className={`btn btn-secondary ${isActive('/') ? 'active' : ''}`}
                            style={{
                                color: 'white',
                                width: 220,
                                borderColor: 'blue',
                                fontWeight: 'bold',
                                textAlign: 'start',
                            }}>Início</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink onClick={() => { navigate('/usuarios') }}
                            className={`btn btn-secondary ${isActive('/usuarios') ? 'active' : ''}`}
                            style={{
                                color: 'white',
                                width: 220,
                                borderColor: 'blue',
                                fontWeight: 'bold',
                                textAlign: 'start',
                            }}>Usuários</NavLink>
                    </NavItem>                    
                    <NavItem>
                        <NavLink onClick={() => { navigate('/settings') }}
                            className={`btn btn-secondary ${isActive('/settings') ? 'active' : ''}`}
                            style={{
                                color: 'white',
                                width: 220,
                                borderColor: 'blue',
                                fontWeight: 'bold',
                                textAlign: 'start'
                            }}>Configurações</NavLink>
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    )
}