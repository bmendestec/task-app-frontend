import React from 'react';
import { useLogin } from '../hooks/useLogin';
import './styles/Login.css';

export function Login() {
    const { handleInputChange, 
            handleLogin, 
            handleNewUserRegister, 
            handleBackToHome, 
            setModalMessage,
            handlePasswordReset,
            loginData, 
            passwordInputRef, 
            modalMessage } = useLogin();             
    
    const handleForgetPassword = () => {
        handlePasswordReset(loginData.email);
    }

    return (
        <>
            <div className="login-container">
                <h2>Login</h2>
                <form>
                    <div className="form-group">
                        <label>Usuário:</label>
                        <div>
                            <input
                                type="text"
                                name="email"
                                value={loginData.email}
                                onChange={handleInputChange}
                                placeholder="E-mail" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Senha:</label>
                        <div>
                            <input type="password"
                                name="password"
                                value={loginData.password}
                                onChange={handleInputChange}
                                ref={passwordInputRef}
                                placeholder='Senha'
                            />
                        </div>
                    </div>
                    <button onClick={handleLogin}>Login</button>
                    {/* <button onClick={loginWithGoogle}>Google Login</button> */}
                    <button onClick={handleNewUserRegister}>Cadastre-se agora mesmo</button>
                    <button onClick={handleForgetPassword}>Esqueci minha senha</button>
                    <div className="form-footer">
                        <a href="/">Voltar ao início</a>
                    </div>
                </form>
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

