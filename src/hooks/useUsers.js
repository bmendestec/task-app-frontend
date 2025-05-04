import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../service/server";

export function useUsers() {
    const [user, setUser] = useState([]);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const fetchUserData = async () => {
        try {
            const userStored = localStorage.getItem('email');
            const tokenStored = localStorage.getItem('authToken');
            if (!userStored && !tokenStored) {
                setLoading(false);
                navigate('/login');
            } else {
                const findUserName = await apiClient.get('/usuarios', {
                    headers: {
                        Authorization: `Bearer ${tokenStored}`,
                    }
                });                
                if (findUserName.status !== 200) {
                    console.log('Erro ao buscar usuário:', findUserName.message);
                    return;
                } else {                    
                    setUser(findUserName.data);
                    return findUserName.data;
                }
            }
        } catch (error) {
            console.log('Erro ao buscar usuário:', error.message);
            return null;
        }
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    const handleDeleteUser = (id, setReloadPanel) => {
        if (id) {
            apiClient.delete(`/usuarios/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('authToken')}`,
                }
            }).then(() => {
                setUser(user.filter((user) => user.id !== id));
                setReloadPanel(true);
            }).catch((error) => {
                console.log('Erro ao deletar usuário:', error.message);
            })
        }
    }

    const handleDirectToEdit = (id) => {
        if (id) {
            navigate('/edit-user', { state: { userId: id } });
        }
    }


    return {
        formatDate,
        setUser,
        fetchUserData,   
        handleDeleteUser,
        handleDirectToEdit,
        user,
        loading
    };

}