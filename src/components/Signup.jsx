import React, { useState } from 'react';
import { useSignup } from '../hooks/useSignup';
import './styles/SignUp.css'

export function Signup() {
    const { formData, handleInputChange, handleSubmit, emailInputRef } = useSignup();
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (e) => {
        setSelectedOption(e.target.value);
    };

    return (
        <>
            <section>
                <div className="signup-header">
                    <img className="logo-header" src="src/assets/sciencebot_logo.png" alt="" />
                </div>
                <div className="signup-container">
                    <div className="signup-form">
                        <form onSubmit={handleSubmit}>
                            <h2 className='title'>Create an account</h2>
                            <div className='row'>
                                <input
                                    className="signup-input"
                                    type="text"
                                    name='fullName'
                                    value={formData.fullName}
                                    onChange={handleInputChange} required
                                    placeholder="Full name" />
                            </div>
                            <div className='row'>
                                <input
                                    className='signup-input'
                                    ref={emailInputRef}
                                    type="text"
                                    name='email'
                                    placeholder="Type your e-mail"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className='row'>
                                <input
                                    className='signup-password'
                                    type="password"
                                    placeholder="Type your password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    name="password"
                                    required
                                />
                                <input
                                    className='signup-confirmPass'
                                    type="password"
                                    placeholder="Confirm your password"
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange}
                                    name="confirmPassword"
                                    required
                                />
                            </div>
                            <div className='dropdown-container'>
                                <select
                                    id="gender"
                                    value={selectedOption}
                                    onChange={handleChange}
                                    className='custom-dropdown'
                                    required
                                >
                                    <option value="">---</option>
                                    <option value="Masculino">Male</option>
                                    <option value="Feminino">Female</option>
                                </select>
                            </div>
                            <div className='row'>
                                <input
                                    className='signup-date-input'
                                    type="date"
                                    name="birth_date"
                                    value={formData.birth_date}
                                    onChange={handleInputChange}
                                    required
                                />
                                <input
                                    className='signup-age-input'
                                    type="number"
                                    value={formData.age}
                                    onChange={handleInputChange}
                                    readOnly
                                />
                            </div>
                            <button
                                type='submit'
                                className='add-button signup-button-2'
                            >
                                Create Account
                            </button>
                        </form>
                    </div>
                </div >
                <footer className='signup-footer-2'>
                    <p>Already have an account? <a href="/login" >Login</a></p>
                </footer>
            </section>
            {/* <section>
                <form onSubmit={handleSubmit}>
                    <h1>Create an account</h1>
                    <div controlId="formBasicName">
                        <label>Full Name</label>
                        <input type="text" placeholder="Type your full name" name="fullName" value={formData.fullName} onChange={handleInputChange} required />
                    </div>
                    <div className='row'>
                        <div controlId="formBasicEmail">
                            <label>E-mail</label>
                            <input ref={emailInputRef} type="text" placeholder="Type your e-mail" name="email" value={formData.email} onChange={handleInputChange} required />
                        </div>
                        <div className='col-md-6'>
                            <div className="mb-3" controlId="formBasicPassword">
                                <label>Password</label>
                                <input type="password" placeholder="Type your password" name="password" value={formData.password} onChange={handleInputChange} required />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div controlId="formBasicPassword">
                                <label>Confirm Password</label>
                                <input type="password" placeholder="Confirm your password" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} required />
                            </div>
                        </div>
                    </div>
                    <div controlId="formBasicGender">
                                <label>Gender</label>
                                <Form.Select name="gender" value={formData.gender} onChange={handleInputChange} required>
                                    <option value="">Select your gender</option>
                                    <option value="Masculino">Male</option>
                                    <option value="Feminino">Female</option>
                                    <option value="Outro">Other</option>
                                </Form.Select>
                            </div>
                    <div controlId='formBasicDtNascimento'>
                        <div className='row' style={{ display: "flex", justifyContent: "space-between" }}>
                            <div className='col-md-6'>
                                <label>Birth Date</label>
                                <input type="date"
                                    name="birth_date"
                                    value={formData.birth_date}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className='col-md-3'>
                                <label>Idade</label>
                                <input type="number" name="age" value={formData.age} onChange={handleInputChange} readOnly />
                            </div>
                        </div>
                    </div>
                    <button type='submit' variant="primary" size="lg">
                        Create Account
                    </button>
                </form>

                <footer>
                    <p>Already have an account? <a href="/login" >Login</a></p>
                </footer>
            </section> */}
        </>
    )
}