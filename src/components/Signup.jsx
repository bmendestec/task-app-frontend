import React from 'react';
import { useSignup } from '../hooks/useSignup';
import { Button, Form } from 'react-bootstrap';

export function Signup() {
    const { formData, handleInputChange, handleSubmit, emailInputRef } = useSignup();    

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
                    <h1 className='p-3'>Create an account</h1>
                    <div className='w-100' style={{ maxWidth: "400px" }}>
                        <Form onSubmit={handleSubmit} className="form-container">
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text" placeholder="Type your full name" name="fullName" value={formData.fullName} onChange={handleInputChange} required />
                            </Form.Group>
                            <div className='row mb-3'>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>E-mail</Form.Label>
                                    <Form.Control ref={emailInputRef} type="text" placeholder="Type your e-mail" name="email" value={formData.email} onChange={handleInputChange} required />
                                </Form.Group>
                                <div className='col-md-6'>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Type your password" name="password" value={formData.password} onChange={handleInputChange} required />
                                    </Form.Group>
                                </div>
                                <div className='col-md-6'>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Confirm Password</Form.Label>
                                        <Form.Control type="password" placeholder="Confirm your password" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} required />
                                    </Form.Group>
                                </div>
                            </div>
                            <Form.Group className="mb-3" controlId="formBasicGender">
                                <Form.Label>Gender</Form.Label>
                                <Form.Select name="gender" value={formData.gender} onChange={handleInputChange} required>
                                    <option value="">Select your gender</option>
                                    <option value="Masculino">Male</option>
                                    <option value="Feminino">Female</option>
                                    <option value="Outro">Other</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className='mb-3' controlId='formBasicDtNascimento'>
                                <div className='row d-flex align-items-center gap-5'>
                                    <div className='col-md-6'>
                                        <Form.Label>Birth Date</Form.Label>
                                        <Form.Control type="date" placeholder="Type your birth date" name="birthDate" value={formData.birthDate} onChange={handleInputChange} required />
                                    </div>
                                    <div className='col-md-3'>
                                        <Form.Label>Idade</Form.Label>
                                        <Form.Control type="number" name="age" value={formData.age} onChange={handleInputChange} readOnly />
                                    </div>
                                </div>
                            </Form.Group>
                            <Button type='submit' className='w-100 mt-3' variant="primary" size="lg">
                                Create Account
                            </Button>
                        </Form>
                    </div>
                    <footer className="mt-4 text-center">
                        <p className="text-muted">Already have an account? <a href="/login" className="text-decoration-none">Login</a></p>
                    </footer>
                </div>
            </div >
        </>
    )
}