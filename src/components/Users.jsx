import '../components/styles/Users.css';
import { useUsers } from '../hooks/useUsers';
import { Spinner, Button, Table } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { useEffect, useState } from 'react';
import { NavbarComponent } from './Navbar';
import { LogoutButton } from './buttons/Logout';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Trash2, UserPen, UserPlus } from 'lucide-react';

export function Usuarios() {
    const [reloadPanel, setReloadPanel] = useState(null);
    const { fetchUserData, handleDeleteUser, handleDirectToEdit } = useUsers();
    const { logout, loading } = useAuth();
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    const fetchUsers = async () => {
        const data = await fetchUserData();
        setUsers(data);
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    useEffect(() => {
        if (!reloadPanel) return;
        setReloadPanel(false);
        fetchUsers();
    }, [reloadPanel]);

    return (
        <>
            <div>
                <NavbarComponent />
                <div className="flex-grow-1 p-4 d-flex flex-column align-items-centerr">
                    <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                        <Button variant='outline-dark' onClick={() => navigate(-1)} className='mb-3'>
                            <ChevronLeft className='me-3' />
                            Voltar
                        </Button>
                        <LogoutButton onLogout={logout} />
                    </div>
                    <div>
                        <h1 className="fw-bold">Usuários</h1>
                    </div>
                    {loading ? (
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    ) :
                        <div>
                            <div>
                                <Table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Nome</th>
                                            <th>Idade</th>
                                            <th>Dt. Nascimento</th>
                                            <th>Sexo</th>
                                            <th>Email</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.map((user, index) => (
                                            <tr key={user.id}>
                                                <td>{index + 1}</td>
                                                <td>{user.nome}</td>
                                                <td>{user.idade}</td>
                                                <td>{new Date(user.data_nascimento).toLocaleDateString('pt-BR')}</td>
                                                <td>{user.sexo}</td>
                                                <td>{user.email}</td>
                                                <td>
                                                    <Button
                                                        variant="warning"
                                                        className="btn btn-warning me-2"
                                                        onClick={() => { handleDirectToEdit(user.id) }}>
                                                        <UserPen />
                                                    </Button>
                                                    <Button variant="danger"
                                                        className="btn btn-danger"
                                                        onClick={() => { handleDeleteUser(user.id, setReloadPanel) }}>
                                                        <Trash2 />
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </ Table>
                                <Button variant='primary' onClick={() => navigate('/register')} className='mb-3'>
                                    <UserPlus className='me-3' />
                                    Adicionar Usuário
                                </Button>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    );
}
