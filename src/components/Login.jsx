import React, { useState } from 'react';
import { useLogin } from '../hooks/useLogin';
import { useAuth } from '../context/AuthContext';
import './styles/Login.css';

export function Login() {
    const { actionLogin,
        handleNewUserRegister,
        handleBackToHome,
        setModalMessage,
        passwordInputRef,
        modalMessage,
        loading,
        error } = useLogin();
    
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        await actionLogin(email, password);
        const userData = { email }
        const token = localStorage.getItem('authToken');
        login(userData, token);
    }

    return (
        <>
            <div className="login-container">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Usuário:</label>
                        <div>
                            <input
                                type="text"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="E-mail" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Senha:</label>
                        <div>
                            <input type="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                ref={passwordInputRef}
                                placeholder='Senha'
                            />
                        </div>
                    </div>
                    <button type='submit' disabled={loading}>
                        {loading ? 'Carregando...' : 'Entrar'}
                    </button>
                    {/* <button onClick={loginWithGoogle}>Google Login</button> */}
                    <button onClick={handleNewUserRegister}>Cadastre-se agora mesmo</button>
                    <button onClick={() => setModalMessage(null)}>Esqueci minha senha</button>
                    <div className="form-footer">
                        <a href="/">Voltar ao início</a>
                    </div>
                </form>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {modalMessage && (
                    <div className="modal">
                        <div className="modal-content">
                            <div>
                                <h2>Atenção</h2>
                                <p>{modalMessage}</p>
                                <button onClick={handleNewUserRegister}>Cadastre-se agora mesmo</button>
                                <button onClick={handleBackToHome}>Voltar ao início</button>
                            </div>
                            <button onClick={() => setModalMessage(null)}>OK</button>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

