import '../components/styles/Users.css';
import { useUsers } from '../hooks/useUsers';
import { Spinner, CloseButton, Button, Table } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { useEffect, useState } from 'react';
import { NavbarComponent } from './Navbar';
import { LogoutButton } from './Logout';
import { useNavigate } from 'react-router-dom';
import { Plus, PlusCircle, Trash2, UserPen, UserPlus, UserPlus2, UserPlusIcon, UserRoundPlus } from 'lucide-react';

export function Usuarios() {
    const { loading, fetchUserData } = useUsers();
    const { logout } = useAuth();
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchUserData();
            setUsers(data);
        }

        fetchData();
    }, [fetchUserData]);

    return (
        <>
            <div className="d-flex vh-100">
                <NavbarComponent />
                <div className="flex-grow-1 p-4 d-flex flex-column align-items-centerr">
                    <div className="d-flex flex-column align-items-end">
                        <LogoutButton onLogout={logout} />
                    </div>
                    {loading ? (
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    ) :
                        <div>
                            <div>
                                <h1 className="fw-bold">Usuários</h1>
                            </div>
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
                                                    <Button variant="warning" className="btn btn-warning me-2">
                                                        <UserPen />                                                        
                                                    </Button>
                                                    <Button variant="danger" className="btn btn-danger">
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
