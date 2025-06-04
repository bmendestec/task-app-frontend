import React, { useState, useEffect, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import apiClient from '../service/server';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        const userStored = localStorage.getItem('idUser');
        const tokenStored = localStorage.getItem('authToken');

        if (!tokenStored && !userStored ) {
            setUser(null);
            setLoading(false);
            return;
        }
        setUser(userStored);
        setLoading(false);
    }, []);


    const login = async (email, password) => {
        checkToken();
        setLoading(true);
        setUser(null);
        await apiClient.post('/login', {
            email: email,
            password: password,
        }).then(async (response) => {
            if (response.status === 200) {
                const token = response.data.token;
                const idUser = response.data.id;
                const { isValid } = await isTokenValid(token);
                if (isValid) {
                    localStorage.setItem('authToken', token);
                    localStorage.setItem('idUser', idUser);
                    setLoading(false);
                    setUser(idUser);
                    navigate('/');
                } else {
                    console.log('Erro ao validar o token. Tente novamente.');
                }
            }
        }).catch((error) => {
            if (error.response.data.message === "Invalid credentials") {
                alert('E-mail ou senha inválidos. Tente novamente.');
            } else {
                alert('Erro ao fazer login. Verifique seu e-mail e senha. ');
            }
        }).finally(() => {
            setLoading(false);
        });

    };

    const checkToken = () => {
        const token = localStorage.getItem('authToken');
        const userId = localStorage.getItem('idUser');
        if (token && userId) {
            localStorage.removeItem('authToken');
            localStorage.removeItem('idUser');
        }
    }

    const isTokenValid = async (token) => {
        if (!token) {
            return false;
        }

        try {
            const response = await apiClient.get('/validate-token', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });
            return {
                isValid: response.data.message
            };
        } catch (error) {
            console.error('Erro ao validar o token:', error);
            return false;
        }
    }

    const logout = async () => {
        setLoading(true);
        setUser(null);
        const logginOutRoute = await apiClient.get('/logout', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('authToken')}`,
            }
        });
        if (logginOutRoute.status !== 200) {
            console.log('Erro ao fazer logout:', logginOutRoute.message);
        } else {
            localStorage.removeItem('authToken');
            localStorage.removeItem('userId');
            setLoading(false);
            navigate('/login');
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};