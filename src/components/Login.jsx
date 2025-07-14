import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import './styles/Login.css';
import { useNavigate } from 'react-router-dom';
import { HeaderLogin } from './commons/HeaderLogin';

export function Login() {
    const { login, loading } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        login(email, password);
    }

    return (
        <>
            <section>
                <HeaderLogin />
                <div className="login-container">
                    <div className="login-form">
                        <form onSubmit={handleSubmit}>
                            <h2 className='title'>Login in ScienceBot - SaaS</h2>
                            <input
                                className="login-input"
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="E-mail" />
                            <input
                                className="password-input"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder='Password'
                            />
                            <div className='form-check'>
                                <div className='row'>
                                    <div className='col'>
                                        <input id="remember-me" type="checkbox" label="Remember me" />
                                        <label htmlFor="remember-me"><u>Remember-me</u></label>
                                    </div>
                                    <div className='col'>
                                        <a href="#" style={{ color: 'black' }}>Forgot password</a>
                                    </div>
                                </div>
                            </div>
                            <div className="d-grid">
                                <button
                                    className="add-button login-button"
                                    type='submit'
                                    disabled={loading}>
                                    {loading ?
                                        <span className="visually-hidden">Loading...</span>
                                        : 'Sign In'}
                                </button>
                            </div>
                            <div className="text-center text-muted">or</div>
                            <div className="d-grid">
                                <button type="button"
                                    variant="outline-primary"
                                    className="signup-button"
                                    onClick={() => { navigate('/sign-up') }}>
                                    <u>Don't you have an account? Just sign up now!</u>
                                </button>
                            </div>
                        </form>
                    </div>
                </div >
                <footer className='login-footer'></footer>
            </section>
        </>
    )
}

