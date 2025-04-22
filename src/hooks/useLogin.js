import { useEffect, useRef, useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import apiClient from '../service/server';
import bcrypt from 'bcryptjs';

export function useLogin() {
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });

    const [modalMessage, setModalMessage] = useState(null);
    const navigate = useNavigate();
    const passwordInputRef = useRef(null);

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        if (!/\S+@\S+\.\S+/.test(loginData.email)) {
            alert('Por favor, insira um e-mail válido.');
            return;
        } else if (!loginData.password) {
            alert('Por favor, insira a senha.');
            return;
        }

        try {
            const response = await apiClient.get("/usuarios?search=", loginData.email);
            if (response.status !== 200 || !response.data) {
                setModalMessage('Usuário não encontrado. Verifique o e-mail.');
                setLoading(false);
                throw new Error('Erro ao fazer login. Tente novamente.');
            }

            const user = response.data.find(user => user.email === loginData.email);
            if (!user) {
                setModalMessage('Usuário não encontrado. Verifique o e-mail.');
                setLoading(false);
                throw new Error('Usuário não encontrado. Verifique o e-mail.');
            }

            const isPasswordValid = await bcrypt.compare(loginData.password, user.senha);
            if (!isPasswordValid) {
                setModalMessage('Senha incorreta. Tente novamente.');
                setLoginData({ ...loginData, password: '' });
                passwordInputRef.current.focus();
                setLoading(false);
                return;
            } else {
                // setLoading(false);
                // navigate('/home');
                window.location.href = '/home';
            }

            console.log('Login response:', response.data);
        } catch (error) {
            console.log('Erro ao fazer login:', error.message);
        }

    }

    const handleNewUserRegister = () => {
        navigate('/register');
    };

    const handleBackToHome = () => {
        navigate('/');
    };

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                navigate('/home');
            }
        });

        return () => unsubscribe();
    });

    const handlePasswordReset = async (email) => {
        try {
            const auth = getAuth();
            await sendPasswordResetEmail(auth, email);
            setModalMessage('E-mail de redefinição de senha enviado. Verifique sua caixa de entrada.');
        } catch (error) {
            if (error.code === 'auth/user-not-found') {
                setModalMessage('Usuário não encontrado. Verifique o e-mail.');
            } else {
                setModalMessage('Erro ao enviar e-mail de redefinição de senha. Tente novamente.');
            }
            console.error('Erro ao enviar e-mail de redefinição de senha:', error);
        }
    };

    return { handleInputChange, handleLogin, handleNewUserRegister, handleBackToHome, setModalMessage, handlePasswordReset, modalMessage, loginData, error, loading, passwordInputRef };
}