import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import './styles/Login.css';
import { Button, Form, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

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
            <div className="container-fluid vh-100 d-flex p-0">
                <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center p-5 bg-white">
                    <img
                        src='src\assets\login_bckg.png'
                        alt="Produtividade"
                        className="img-fluid"
                    />
                </div>
                <div className="col-lg-6 d-none d-lg-flex justify-content-center align-items-center bg-white">
                    <div className="w-100" style={{ maxWidth: "400px" }}>
                        <h2 className="mb-4 text-primary text-center fw-bold">Login</h2>
                        <p className="text-muted text-center mb-4">Organize your day in a smart way!</p>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control
                                    type="text"
                                    className='form-control'
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="E-mail" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control
                                    type="password"
                                    className='form-control'
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder='Password'
                                />
                            </Form.Group>
                            <div className='form-check'>
                                <div className='row mb-3'>
                                    <div className='col-md-6'>
                                        <Form.Group className="mb-0" controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label="Remember me" />
                                        </Form.Group>
                                    </div>
                                    <div className='col-md-6'>
                                        <Form.Group className='mb-0' controlId='formBasicForgotPassword'>
                                            <a href="#" className="text-decoration-none text-align-end">Forgot Password</a>
                                        </Form.Group>
                                    </div>
                                </div>
                            </div>
                            <div className="d-grid mb-3">
                                <Button
                                    type='submit'
                                    className="btn btn-primary"
                                    disabled={loading}>
                                    {loading ?
                                        <Spinner animation="border" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </Spinner> : 'Entrar'}
                                </Button>
                            </div>
                            <div className="text-center my-3 text-muted">ou</div>
                            <div className="d-grid">
                                <Button type="button"
                                    variant="outline-primary"
                                    onClick={() => { navigate('/sign-up') }}>
                                    Cadastre-se
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div >
        </>
    )
}

