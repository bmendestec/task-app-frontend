import { Navbar, Nav, NavItem, NavLink, Accordion } from 'react-bootstrap';
export function NavbarComponent() {
    return (
        <Navbar bg="dark" expand="md" className="flex-column p-3 border-end" style={{ width: '250px' }}>
            <Navbar.Brand href="/" className="fw-bold" style={{
                color: 'white',
                width: 220, borderColor: 'blue'
            }}>Meu Organizador</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="flex-column gap-2">
                    <NavItem>
                        <NavLink href="/home" className="btn btn-secondary" style={{
                            color: 'white',
                            width: 220, 
                            borderColor: 'blue',
                            fontWeight: 'bold',
                            textAlign: 'start',
                        }}>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/tasks" className="btn btn-secondary" style={{
                            color: 'white',
                            width: 220, 
                            borderColor: 'blue',
                            fontWeight: 'bold',
                            textAlign: 'start'
                        }}>Tarefas</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/projects" className="btn btn-secondary" style={{
                            color: 'white',
                            width: 220, 
                            borderColor: 'blue',
                            fontWeight: 'bold',
                            textAlign: 'start'
                        }}>Projetos</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/calendar" className="btn btn-secondary" style={{
                            color: 'white',
                            width: 220, 
                            borderColor: 'blue',
                            fontWeight: 'bold',
                            textAlign: 'start'
                        }}>Calendário</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/settings" className="btn btn-secondary" style={{
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