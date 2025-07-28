import { useUsers } from '../hooks/useUsers';
import { useEffect, useState } from 'react';
import { Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './styles/ListUsers.css';

export function ListUsers({ reloadPanel, setReloadPanel, onEditUser, onCreateUser }) {
    const { fetchUserData, handleDeleteUser, loading } = useUsers();
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState(null);

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

    const handleDirectToEdit = (id) => {
        setIsActive(id);
        onEditUser(id);
    }

    return (
        <>
            <div className='list-body'>
                <div>
                    <h2>Users list</h2>
                </div>
                {loading ? (
                    <span className="visually-hidden">Loading...</span>
                ) :
                    <div style={{ overflowY: "auto" }}>
                        <div>
                            <table hover>
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
                                        <tr key={user.id}
                                            onDoubleClick={() => handleDirectToEdit(user.id)}
                                            className={isActive === user.id ? 'active-row' : ''}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            <td className='table-name'>{user.name}</td>
                                            <td>{user.age}</td>
                                            <td>{new Date(user.birth_date).toLocaleDateString('pt-BR')}</td>
                                            <td>{user.gender}</td>
                                            <td>{user.email}</td>
                                            <td>

                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleDeleteUser(user.id, setReloadPanel)
                                                    }}>
                                                    <Trash2 />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </ table>
                        </div>
                    </div>
                }
            </div>
        </>
    );
}
