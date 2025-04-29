import React, { useState } from 'react';
import { useLogin } from '../hooks/useLogin';
import { useAuth } from '../context/AuthContext';
import './styles/Login.css';
import { Spinner } from 'react-bootstrap';

export function Login() {
    const { handleNewUserRegister,
        handleBackToHome,
        setModalMessage,
        passwordInputRef,
        modalMessage} = useLogin();

    const { login, loading } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();        
        login(email, password);
    }

    return (
        <>
            <div className="container-fluid vh-100 d-flex p-0">
                <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center p-5 bg-white">
                    <div className="w-100" style={{ maxWidth: "400px" }}>
                        <h2 className="mb-4 text-primary fw-bold">Login</h2>
                        <h1 className="h3 mb-2 fw-semibold">Bem-vindo de volta!</h1>
                        <p className="text-muted mb-4">Organize seu dia de forma inteligente.</p>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className='form-control'
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="E-mail" />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="password"
                                    className='form-control'
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    ref={passwordInputRef}
                                    placeholder='Senha'
                                />
                            </div>

                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="rememberMe" />
                                    <label className="form-check-label" htmlFor="rememberMe">
                                        Lembrar de mim
                                    </label>
                                </div>
                                <a href="#" className="text-decoration-none">Esqueci minha senha</a>
                            </div>
                            <div className="d-grid mb-3">
                                <button
                                    type='submit'
                                    className="btn btn-primary"
                                    disabled={loading}>
                                    {loading ?
                                        <Spinner animation="border" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </Spinner> : 'Entrar'}
                                </button>
                            </div>
                            <div className="text-center my-3 text-muted">ou</div>
                            <div className="d-grid">
                                <button type="button" className="btn btn-outline-secondary">
                                    <i className="bi bi-google me-2"></i> Entrar com Google
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="col-lg-6 d-none d-lg-flex justify-content-center align-items-center bg-light">
                    <img
                        src='src\assets\login_bckg.png'
                        alt="Produtividade"
                        className="img-fluid"
                    />
                </div>                
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
            </div >
        </>
    )
}

