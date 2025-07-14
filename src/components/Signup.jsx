import React, { useState } from 'react';
import { useSignup } from '../hooks/useSignup';
import './styles/SignUp.css'
import { HeaderInitial } from './commons/HeaderInitial';
import { FooterInitial } from './commons/FooterInitial';

export function Signup() {
    const { formData, handleInputChange, handleSubmit, emailInputRef } = useSignup();
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (e) => {
        setSelectedOption(e.target.value);
    };

    return (
        <>
            <section className='signup-section'>
                <HeaderInitial />
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
                <FooterInitial />
            </section>
        </>
    )
}