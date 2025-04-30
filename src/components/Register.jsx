import React from 'react';
import { useRegister } from '../hooks/useRegister';
import { NavbarComponent } from './Navbar';
import { useAuth } from '../context/AuthContext';
import { LogoutButton } from './Logout';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

export function Register() {
    const { formData, handleInputChange, handleSubmit, emailInputRef } = useRegister();
    const { logout, loading } = useAuth();
    const navigate = useNavigate();

    return (
        <>
            <div className="d-flex vh-100">
                <NavbarComponent />
                <div className="flex-grow-1 p-4 d-flex flex-column align-items-centerr">
                    <div className="d-flex flex-column align-items-end">
                        <LogoutButton onLogout={logout} />
                    </div>
                    {loading ? (
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    ) : <div>
                        <div>
                            <Button variant='primary' onClick={() => navigate(-1)} className='mb-3'>
                                <ChevronLeft className='me-3' />
                                Voltar
                            </Button>
                        </div>
                        <h1 className="fw-bold">Cadastro de usuários</h1>
                        <div className='d-flex flex-column align-items-center'>
                            <Form onSubmit={handleSubmit} className="form-container">
                                <Form.Group className="mb-3" controlId="formBasicNome">
                                    <Form.Label>Nome</Form.Label>
                                    <Form.Control type="text" placeholder="Digite seu nome" name="nome" value={formData.nome} onChange={handleInputChange} required />

                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicSexo">
                                    <Form.Label>Sexo</Form.Label>
                                    <Form.Select name="sexo" value={formData.sexo} onChange={handleInputChange} required>
                                        <option value="">Selecione seu sexo</option>
                                        <option value="Masculino">Masculino</option>
                                        <option value="Feminino">Feminino</option>
                                        <option value="Outro">Outro</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicDtNascimento">
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <Form.Label>Data de Nascimento</Form.Label>
                                            <Form.Control type="date" placeholder="Digite sua data de nascimento" name="dt_nascimento" value={formData.dt_nascimento} onChange={handleInputChange} required />
                                        </div>
                                        <div className='col-md-3'>
                                            <Form.Label>Idade</Form.Label>
                                            <Form.Control type="number" name="idade" value={formData.idade} onChange={handleInputChange} />
                                        </div>
                                    </div>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicNome">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Digite seu email" name="email" value={formData.email} onChange={handleInputChange} ref={emailInputRef} required />
                                </Form.Group>
                            </ Form>
                        </div>
                    </div>}
                </div>
            </div>
        </>
    )
}