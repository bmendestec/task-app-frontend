import React from 'react';
import { useRegister } from '../hooks/useRegister';
import './styles/Register.css';

export function Register() {
    const { formData, handleInputChange, handleSubmit, handleGoToLogin, emailInputRef, modalMessage } = useRegister();        

    return (
        <div className='register-container'>
            <div className="back-icon-container">
                <a href="/login" className="back-icon-link">
                    <img src="src/assets/back.png" className="back-icon" alt="Voltar" />
                </a>
            </div>
            <h2>Cadastro de Usuário</h2>
            <form onSubmit={handleSubmit} >
                <div>
                    <label>Nome Completo: </label>
                    <div>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <label>Data de Nascimento: </label>
                    </div>
                    <input
                        type="date"
                        name="birthDate"
                        value={formData.birthDate}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <div>
                        <label>Idade: </label>
                    </div>
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        readOnly
                    />
                </div>
                <div>
                    <label>Sexo: </label>
                    <div>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="Masculino"
                                checked={formData.gender === 'Masculino'}
                                onChange={handleInputChange}
                                required
                            />
                            Masculino
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="Feminino"
                                checked={formData.gender === 'Feminino'}
                                onChange={handleInputChange}
                                required
                            />
                            Feminino
                        </label>
                    </div>
                </div>
                <div>
                    <label>E-mail: </label>
                    <div>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            ref={emailInputRef}
                            required
                        />
                    </div>
                </div>
                <div>
                    <label>Senha: </label>
                    <div>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                </div>
                <div>
                    <label>Confirmar Senha: </label>
                    <div>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                </div>
                <button onClick={handleSubmit}>Cadastrar</button>
            </form>
            {modalMessage && (
                <div className="modal">
                    <div className="modal-content">
                        <div>
                            <h2>Atenção</h2>
                            <p>{modalMessage}</p>
                        </div>
                        <button onClick={handleGoToLogin}>OK</button>
                    </div>
                </div>
            )}
        </div>
    );
};