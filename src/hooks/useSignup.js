import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../service/server";

export function useSignup() {
    const [formData, setFormData] = useState({
        fullName: '',
        birth_date: '',
        age: '',
        gender: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [modalMessage, alert] = useState(null);
    const navigate = useNavigate();
    const emailInputRef = useRef(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (name === 'birth_date') {
            const birth_date = new Date(value);
            const today = new Date();
            const age = today.getFullYear() - birth_date.getFullYear();
            const monthDiff = today.getMonth() - birth_date.getMonth();
            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth_date.getDate())) {
                setFormData({ ...formData, birth_date: value, age: age - 1 });
            } else {
                setFormData({ ...formData, birth_date: value, age });
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            alert('Por favor, insira um e-mail válido.');
            emailInputRef.current.focus();
            return;
        } else if (formData.password !== formData.confirmPassword) {
            alert('As senhas não coincidem.');
            return;
        } else if (!formData.fullName) {
            alert('Por favor, preencha o nome completo.');
            return;
        } else {
            await addUser(
                formData.fullName,
                formData.birth_date,
                formData.age,
                formData.gender,
                formData.email,
                formData.password
            ).then(() => {
                alert('Usuário cadastrado com sucesso!');
            });
        }
    };

    async function addUser(fullName, birth_date, age, gender, email, password) {
        try {
            const userData = {
                name: fullName,
                birth_date: birth_date,
                age: age,
                gender: gender,
                email: email,
                password: password,
                active: 'S',
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString(),
                created_by: 'user',
                updated_by: 'user'
            };
            await apiClient.post("/usuarios", userData).then((response) => {
                if (response.status !== 201) {
                    alert('Erro ao cadastrar usuário. Tente novamente mais tarde.');
                    return;
                } else {
                    navigate('/login');
                    return response.data;
                }
            });
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Este e-mail já está em uso. Tente outro.');
                emailInputRef.current.focus();
            }
        }
    }

    const handleGoToLogin = () => {
        navigate('/login');
    }

    return { formData, handleInputChange, handleSubmit, handleGoToLogin, emailInputRef, modalMessage, alert };
}