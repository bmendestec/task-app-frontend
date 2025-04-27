import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import apiClient from "../service/server";

export function useHome() {

    const [user, setUser] = useState(null);
    const { logout } = useAuth();
    // const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        const userStored = localStorage.getItem('email');
        const tokenStored = localStorage.getItem('authToken');
        if (!userStored && !tokenStored) {
            setUser(null);
            navigate('/login');
        } else {
            setUser(userStored);
        }
        setLoading(false);
    }, []);

    const getUser = async (user) => {
        try {
            const findUserName = await apiClient.get('/usuarios?search=', user);
            if (findUserName.status !== 200) {
                console.log('Erro ao buscar usuário:', findUserName.message);
                return;
            } else {
                return findUserName.data;
            }
        } catch (error) {
            console.log('Erro ao buscar usuário:', error.message);
            return null;
        }
    }

    const handleLogout = async () => {
        localStorage.removeItem('email');
        localStorage.removeItem('authToken');
        setUser(null);
        await logout();
        navigate('/login');
    }
    return { handleLogout, user, loading, getUser };
}