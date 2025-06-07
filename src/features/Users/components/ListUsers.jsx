import '../../Users/components/styles/Users.css';
import { useUsers } from '../hooks/useUsers';
import { Spinner, Button, Table } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { Trash2, UserPen, UserPlus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function ListUsers({ reloadPanel, setReloadPanel, editUserPanel, setEditUserPanel }) {
    const { fetchUserData, handleDeleteUser, loading } = useUsers();
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

    useEffect(() => {
        if (!editUserPanel) return;
        setEditUserPanel(false);
    },[editUserPanel])

    const handleDirectToEdit = (id) => {
        if (id) {
            setEditUserPanel(true);
            navigate('/edit-user', { state: { userId: id } });
        }
    }

    return (
        <>
            <div style={{ width: "60%", maxHeight: "700px", overflowY: "auto" }}>
                {loading ? (
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                ) :
                    <div style={{ maxHeight: "700px", overflowY: "auto" }}>
                        <div>
                            <Table hover>
                                <thead>
                                    <tr>
                                        <th style={{ width: '20%', textAlign: 'center' }}> Name </th>
                                        <th style={{ width: '10%', textAlign: 'center' }}> Age </th>
                                        <th style={{ width: '10%', textAlign: 'center' }}> Birth date </th>
                                        <th style={{ width: '10%', textAlign: 'center' }}> Gender </th>
                                        <th style={{ width: '10%', textAlign: 'center' }}> Email </th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((user) => (
                                        <tr key={user.id} onDoubleClick={() => handleDirectToEdit(user.id)}>
                                            <td style={{ width: '20%', textAlign: 'center', }}>{user.name}</td>
                                            <td style={{ width: '10%', textAlign: 'center', }}>{user.age}</td>
                                            <td style={{ width: '10%', textAlign: 'center', }}>{new Date(user.birth_date).toLocaleDateString('pt-BR')}</td>
                                            <td style={{ width: '10%', textAlign: 'center', }}>{user.gender}</td>
                                            <td style={{ width: '10%', textAlign: 'center', }}>{user.email}</td>
                                            <td style={{ width: '10%', textAlign: 'center', }}>
                                                
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
                        </div>
                    </div>
                }
            </div>
        </>
    );
}
