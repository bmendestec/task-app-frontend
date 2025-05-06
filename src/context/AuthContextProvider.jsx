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
        const userStored = localStorage.getItem('email');
        const tokenStored = localStorage.getItem('authToken');
        const userName = localStorage.getItem('userName');

        if (!tokenStored && !userStored && !userName) {
            setUser(null);
            setLoading(false);
            return;
        }
        setUser(userName);
        setLoading(false);
    }, []);


    const login = async (email, password) => {
        checkToken();
        setLoading(true);
        setUser(null);
        await apiClient.post('/login', {
            email: email,
            senha: password,
        }).then(async (response) => {
            if (response.status === 200) {
                const token = response.data.token;
                const userName = response.data.user.nome;
                const { isValid, email: validatedEmail } = await isTokenValid(token);
                if (isValid) {
                    localStorage.setItem('authToken', token);
                    localStorage.setItem('email', validatedEmail);
                    localStorage.setItem('userName', userName);
                    setLoading(false);
                    setUser(userName);
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
        const email = localStorage.getItem('email');
        const userName = localStorage.getItem('userName');
        if (token && email && userName) {
            localStorage.removeItem('authToken');
            localStorage.removeItem('email');
            localStorage.removeItem('userName');
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
                isValid: response.data.message,
                email: response.data.decoded?.email || null,
            };
        } catch (error) {
            console.error('Erro ao validar o token:', error);
            return false;
        }
    }

    const logout = () => {
        setLoading(true);
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