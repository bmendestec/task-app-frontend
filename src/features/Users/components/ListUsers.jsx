import '../../Users/components/styles/Users.css';
import { useUsers } from '../hooks/useUsers';
import { Spinner, Button, Table } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { Trash2, UserPen, UserPlus } from 'lucide-react';

export function ListUsers({ reloadPanel, setReloadPanel }) {
    const { fetchUserData, handleDeleteUser, handleDirectToEdit, loading } = useUsers();
    const [users, setUsers] = useState([]);

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
            <div style={{ width: "60%", maxHeight: "700px", overflowY: "auto" }}>
                {loading ? (
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                ) :
                    <div style={{ maxHeight: "700px", overflowY: "auto" }}>
                        <div>
                            <Table className="table table-striped">
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
                                        <tr key={user.id}>
                                            <td style={{ width: '20%', textAlign: 'center', }}>{user.name}</td>
                                            <td style={{ width: '10%', textAlign: 'center', }}>{user.age}</td>
                                            <td style={{ width: '10%', textAlign: 'center', }}>{new Date(user.birth_date).toLocaleDateString('pt-BR')}</td>
                                            <td style={{ width: '10%', textAlign: 'center', }}>{user.gender}</td>
                                            <td style={{ width: '10%', textAlign: 'center', }}>{user.email}</td>
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
                        </div>
                    </div>
                }
            </div>
        </>
    );
}
