import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from '../service/server';

export function useLogin() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [modalMessage, setModalMessage] = useState(null);
    const navigate = useNavigate();
    const passwordInputRef = useRef(null);

    const actionLogin = async (email, password) => {        
        try {
            setLoading(true);
            setError(null);
            
            const loginRoute = await apiClient.post('/login', {
                email: email,
                senha: password,
            });
            const token = loginRoute.data.token;
            const userName = loginRoute.data.user.nome;
            if (userName) {
                localStorage.setItem('userName', userName);
            }

            const { isValid, email: validatedEmail } = await isTokenValid(token);
            if (isValid) {
                localStorage.setItem('authToken', token);
                localStorage.setItem('email', validatedEmail);
                navigate('/home');
            } else {
                setModalMessage('Erro ao validar o token. Tente novamente.');
            }

        } catch (error) {
            console.log('Erro ao fazer login:', error.message);
            setModalMessage('E-mail ou senha inválidos. Tente novamente.');
        } finally {
            setLoading(false);
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

    const handleNewUserRegister = () => {
        navigate('/register');
    };

    const handleBackToHome = () => {
        navigate('/');
    };

    return { actionLogin, isTokenValid, handleNewUserRegister, handleBackToHome, setModalMessage, modalMessage, error, loading, passwordInputRef };
}