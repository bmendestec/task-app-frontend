import '../../Users/components/styles/Users.css';
import { useUsers } from '../hooks/useUsers';
import { Spinner, Button, Table } from 'react-bootstrap';
import { useAuth } from '../../../context/AuthContext';
import { useEffect, useState } from 'react';
import { NavbarComponent } from '../../../components/Navbar';
import { useNavigate } from 'react-router-dom';
import { Trash2, UserPen, UserPlus } from 'lucide-react';

export function ListUsers() {
    const [reloadPanel, setReloadPanel] = useState(null);
    const { fetchUserData, handleDeleteUser, handleDirectToEdit } = useUsers();
    const { loading } = useAuth();
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
                                            <th
                                                style={{
                                                    width: '20%',
                                                    textAlign: 'center',
                                                }}
                                            >
                                                Name
                                            </th>
                                            <th
                                                style={{
                                                    width: '10%',
                                                    textAlign: 'center',
                                                }}
                                            >
                                                Age
                                            </th>
                                            <th
                                                style={{
                                                    width: '10%',
                                                    textAlign: 'center',
                                                }}
                                            >
                                                Birth date
                                            </th>
                                            <th
                                                style={{
                                                    width: '10%',
                                                    textAlign: 'center',
                                                }}
                                            >
                                                Gender
                                            </th>
                                            <th
                                                style={{
                                                    width: '10%',
                                                    textAlign: 'center',
                                                }}
                                            >
                                                Email
                                            </th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.map((user) => (
                                            <tr key={user.id}>
                                                <td style={{ width: '20%', textAlign: 'center', }}>{user.name}</td>
                                                <td style={{ width: '10%', textAlign: 'center', }}>{user.age}</td>
                                                <td style={{ width: '10%', textAlign: 'center', }}>{new Date(user.birth_date).toLocaleDateString('pt-BR')}</td>
                                                <td style={{ width: '10%', textAlign: 'center', }}>{user.gender}</td>
                                                <td style={{ width: '10%', textAlign: 'center',  }}>{user.email}</td>
                                                <td style={{ width: '10%', textAlign: 'center', }}>
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
