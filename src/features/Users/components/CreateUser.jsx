import React from 'react';
import { useCreateUser } from '../hooks/useCreateUser';
import { NavbarComponent } from '../../../components/Navbar';
import { Button, Form, InputGroup } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
import { ChevronLeft, CircleX, Save } from 'lucide-react';
import { SaveAndCancel } from '../../../components/commons/buttons/SaveAndCancel';
// import './../components/styles/Register.css';

export function CreateUser({ onFormSubmit }) {
    const { formData, handleInputChange, handleSubmit, emailInputRef } = useCreateUser();
    // const navigate = useNavigate();

    const handleSave = async (e) => {
        e.preventDefault();
        await handleSubmit();
        onFormSubmit();
    }

    const isValidConfirmPass = () => {
        return (formData.password === formData.confirmPassword && formData.password !== '')
    }

    const isValidEmail = () => {
        return (!/\S+@\S+\.\S+/.test(formData.email) && formData.email !== '')
    }

    return (
        <>
            <div style={{ width: "30%" }}>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "20px",
                    marginTop: "20px",
                    border: "1px solid #D1D5DB",
                    borderRadius: "20px"
                }}>
                    <h2>Create a new user</h2>
                </div>
                <div style={{ display: "flex", justifyContent: "left" }}>
                    <Form method="post" onSubmit={handleSave} style={{ maxWidth: '570px' }}>
                        <div className='row' style={{ display: "flex", justifyContent: "space-between" }}>
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
                                        isInvalid={isValidEmail()}
                                        isValid={/\S+@\S+\.\S+/.test(formData.email) && formData.email.length > 0}
                                    />
                                    <Form.Control.Feedback type='invalid'>
                                        Please, insert a valid email.
                                    </Form.Control.Feedback>
                                    <Form.Control.Feedback type="valid">
                                        All done.
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <div className='col' style={{
                                maxWidth: "250px"
                            }}>
                                <InputGroup hasValidation >
                                    <Form.Group controlId="formBasicPassword" >
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
                            <div className='col' style={{
                                maxWidth: "250px"
                            }}>
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
                                            isValid={isValidConfirmPass()}
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
                        <Form.Group controlId='formBasicDtNascimento'>
                            <div className="row" style={{ display: "flex", justifyContent: "space-between" }}>
                                <div className="col-md-6">
                                    <Form.Label>Birth Date</Form.Label>
                                    <Form.Control
                                        type="date"
                                        name="birth_date"
                                        value={formData.birth_date || ''}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <Form.Label>Idade</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="age"
                                        value={formData.age || ''}
                                        onChange={handleInputChange}
                                        readOnly
                                    />
                                </div>
                            </div>
                        </Form.Group>
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
                        <SaveAndCancel />
                    </Form>
                </div>
            </div >
        </>
    )
}