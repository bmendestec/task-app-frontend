import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import './styles/Login.css';
import { useNavigate } from 'react-router-dom';
import { HeaderInitial } from './commons/HeaderInitial';
import { FooterInitial } from './commons/FooterInitial';

export function Login() {
    const { login, loading } = useAuth();
    const [email, setEmail] = useState('');
    const [rememberMe, setRememberMe] = useState()
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const checkRememberMe = (rememberMe) => {
        !rememberMe ? setRememberMe(true) : setRememberMe(false);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        login(email, password);
    }

    return (
        <>
            <section className='login-section'>
                <HeaderInitial />
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
                                    <div className='col remember-field'
                                        onClick={() => { checkRememberMe(rememberMe) }}>
                                        <label className='remember-label'
                                            onClick={() => { checkRememberMe(rememberMe) }}>
                                            <u>Remember-me</u>
                                        </label>
                                        <input className="remember-me"
                                            id="remember-me"
                                            type="checkbox"
                                            label="Remember me"
                                            onClick={(e) => { setRememberMe(e.target.checked) }}
                                            checked={rememberMe} />
                                    </div>
                                    <div className='col'>
                                        <a href="#">Forgot password</a>
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
                        </form>
                    </div>
                </div >
                <FooterInitial />
            </section>
        </>
    )
}

