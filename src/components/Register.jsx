import React from 'react';
import { useRegister } from '../hooks/useRegister';
import { NavbarComponent } from './Navbar';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Save } from 'lucide-react';
import './styles/Register.css';

export function Register() {
    const { formData, handleInputChange, handleSubmit, formatDate, emailInputRef } = useRegister();
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
                    <Form className='d-flex flex-column align-items-center' method="post" onSubmit={handleSubmit}>
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
                                        required 
                                        isInvalid={!/\S+@\S+\.\S+/.test(formData.email)}
                                        isValid={/\S+@\S+\.\S+/.test(formData.email) && formData.email.length > 0}
                                    />
                                    <Form.Control.Feedback type='invalid'>
                                        Please, insert a valid email.
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <div className='col-md-6'>
                                <InputGroup hasValidation>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="Type your password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleInputChange}
                                            required 
                                            isInvalid={formData.password.length < 3 && formData.password.length > 0}
                                            isValid={formData.password.length >= 3 && formData.password.length < 20}
                                        />
                                    </Form.Group>
                                    <Form.Control.Feedback type='invalid'>
                                        Please, insert more than 3 characters.
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </div>
                            <div className='col-md-6'>
                                <InputGroup hasValidation>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Confirm Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="Confirm your password"
                                            name="confirmPassword"
                                            value={formData.confirmPassword}
                                            onChange={handleInputChange}
                                            required 
                                            isValid={formData.password === formData.confirmPassword}
                                            isInvalid={formData.password !== formData.confirmPassword && formData.confirmPassword.length > 0}
                                        />
                                    </Form.Group>
                                    <Form.Control.Feedback type='invalid'>
                                        The passwords do not match.
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </div>
                        </div>
                        <div style={{ width: "100%" }}>
                            <Form.Group controlId="formBasicFullName">
                                <Form.Label>Full name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName || ''}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                        </div>
                        <div style={{ width: "100%" }}>
                            <Form.Group>
                                <div className="row" style={{ display: "flex", justifyContent: "space-between" }}>
                                    <div className="col-md-6">
                                        <Form.Label>Birth Date</Form.Label>
                                        <Form.Control
                                            type="date"
                                            name="birthDate"
                                            value={formatDate(formData.birthDate || '')}
                                            onChange={handleInputChange}
                                            style={{ width: "300px" }}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <Form.Label
                                            style={{ marginLeft: "110px" }}
                                        >Idade</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="idade"
                                            value={formData.age || ''}
                                            onChange={handleInputChange}
                                            style={{ width: "80px", marginLeft: "110px" }}
                                            readOnly
                                        />
                                    </div>
                                </div>
                            </Form.Group>
                        </div>
                        <div style={{ width: "100%" }}>
                            <Form.Group controlId="formBasicSexo2">
                                <Form.Label>Gender</Form.Label>
                                <Form.Select
                                    name="gender"
                                    value={formData.gender || ''}
                                    onChange={handleInputChange}
                                >
                                    <option value=" ">     ---</option>
                                    <option value="Masculino">Masculino</option>
                                    <option value="Feminino">Feminino</option>
                                    <option value="Outros">Outros</option>
                                </Form.Select>
                            </Form.Group>
                        </div>
                        <Button
                            type="submit"
                            variant="primary">
                            <Save size={20} /> Salvar
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    )
}