import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../service/server";

export function useUsers() {
    const [user, setUser] = useState([]);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const userStored = localStorage.getItem('email');
        const tokenStored = localStorage.getItem('authToken');
        if (!userStored && !tokenStored) {
            setUser(null);
            navigate('/login');
        } else {
            setUser(userStored);            
            navigate('/usuarios');
        }
        setLoading(false);
    }, []);

    const fetchUserData = async (user) => {
        try {
            const userStored = localStorage.getItem('email');
            const tokenStored = localStorage.getItem('authToken');
            if (!userStored && !tokenStored) {
                navigate('/login');
            } else {
                const findUserName = await apiClient.get('/usuarios', user, {
                    headers: {
                        Authorization: `Bearer ${tokenStored}`,
                    }
                });
                if (findUserName.status !== 200) {
                    console.log('Erro ao buscar usuário:', findUserName.message);
                    return;
                } else {
                    return findUserName.data.user;
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

    return {
        formatDate,
        setUser,
        fetchUserData,   
        setLoading,     
        user,
        loading
    };

}