import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import apiClient from '../service/server';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {        
        const userStored = localStorage.getItem('email');

        if (userStored) {
            setUser(JSON.parse(userStored));
        }
        setLoading(false);
    }, []);

    const login = (userData, token) => {
        if (!userData || !token) {
            console.error('Dados de login inválidos');
            return;
        }
        setLoading(true);
        setUser(userData);
        localStorage.setItem('email', JSON.stringify(userData));
        localStorage.setItem('authToken', token);
        navigate('/');
    };

    const logout = () => {
        setUser(null);
        const logginOutRoute = apiClient.get('/logout', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('authToken')}`,
            }
        });
        localStorage.removeItem('email');
        localStorage.removeItem('authToken');
        localStorage.removeItem('userName');
        if (logginOutRoute.status !== 200) {
            console.log('Erro ao fazer logout:', logginOutRoute.message);
        } else {
            navigate('/login');
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);