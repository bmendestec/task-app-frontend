import React from 'react';
import { useRegister } from '../hooks/useRegister';
import { NavbarComponent } from './Navbar';
import { useAuth } from '../context/AuthContext';
import { LogoutButton } from './buttons/Logout';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Save } from 'lucide-react';

export function Register() {
    const { formData, handleInputChange, handleSubmit, formatDate, emailInputRef } = useRegister();
    const { logout, loading } = useAuth();
    const navigate = useNavigate();

    return (
        <>
            <div>
                <NavbarComponent />
                <div className="flex-grow-1 p-4 d-flex flex-column align-items-center">
                    <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                        <Button variant='outline-dark' onClick={() => navigate(-1)} className='mb-3'>
                            <ChevronLeft className='me-3' />
                            Voltar
                        </Button>
                    </div>
                    <h1 className="fw-bold">Cadastro de usuários</h1>
                    {loading ? (
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    ) : <div>
                        <div className='d-flex flex-column align-items-center'>
                            <Form className="w-50 mt-4" method="post" onSubmit={handleSubmit}>
                                <div className='row'>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>E-mail</Form.Label>
                                        <InputGroup hasValidation>
                                            <Form.Control
                                                type="text"
                                                name="email"
                                                value={formData.email || ''}
                                                onChange={handleInputChange}
                                                ref={emailInputRef}
                                                required isInvalid={!/\S+@\S+\.\S+/.test(formData.email)}
                                            />
                                            <Form.Control.Feedback type='invalid'>
                                                Please, insert a valid email.
                                            </Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Group>
                                    <div className='col-md-6'>
                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Type your password" name="password" value={formData.password} onChange={handleInputChange} required />
                                        </Form.Group>
                                    </div>
                                    <div className='col-md-6'>
                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Confirm Password</Form.Label>
                                            <Form.Control type="password" placeholder="Confirm your password" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} required />
                                        </Form.Group>
                                    </div>
                                </div>
                                <Form.Group controlId="formBasicFullName">
                                    <Form.Label>Full name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="nome"
                                        value={formData.nome || ''}
                                        onChange={handleInputChange}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <div className="row" style={{ display: "flex", justifyContent: "space-between" }}>
                                        <div className="col-md-6">
                                            <Form.Label>Birth Date</Form.Label>
                                            <Form.Control
                                                type="date"
                                                name="data_nascimento"
                                                value={formatDate(formData.data_nascimento || '')}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <Form.Label>Idade</Form.Label>
                                            <Form.Control
                                                type="number"
                                                name="idade"
                                                value={formData.idade || ''}
                                                onChange={handleInputChange}
                                                readOnly
                                            />
                                        </div>
                                    </div>
                                </Form.Group>
                                <Form.Group controlId="formBasicSexo">
                                    <Form.Label>Gender</Form.Label>
                                    <Form.Select name="sexo" value={formData.sexo || ''} onChange={handleInputChange} required>
                                        <option value="">Selecione seu sexo</option>
                                        <option value="Masculino">Masculino</option>
                                        <option value="Feminino">Feminino</option>
                                        <option value="Outro">Outro</option>
                                    </Form.Select>
                                </Form.Group>
                                <Button
                                    type="submit"
                                    variant="primary">
                                    <Save size={20} /> Salvar
                                </Button>
                            </Form>
                        </div>
                    </div>}
                </div>
            </div>
        </>
    )
}