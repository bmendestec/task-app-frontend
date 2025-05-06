import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../service/server";

export function useRegister() {
    const [formData, setFormData] = useState({
        fullName: '',
        birthDate: '',
        age: '',
        gender: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    
    const navigate = useNavigate();
    const emailInputRef = useRef(null);

    // useEffect(() => {},[])
    const handleInputChange = (e) => {        
        setFormData({ ...formData, [e.target.name]: e.target.value });

        if (e.target.name === 'birthDate') {
            const birthDate = new Date(e.target.value);
            const today = new Date();
            const age = today.getFullYear() - birthDate.getFullYear();
            const monthDiff = today.getMonth() - birthDate.getMonth();
            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                setFormData({ ...formData, birthDate: e.target.value, age: age - 1 });
            } else {
                setFormData({ ...formData, birthDate: e.target.value, age });
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert('As senhas não coincidem.');
            console.log('As senhas não coincidem.');
        } else if (!formData.fullName) {
            alert('Por favor, preencha o nome completo.');
        } else {
            await addUser(
                formData.fullName,
                formData.birthDate,
                formData.age,
                formData.gender,
                formData.email,
                formData.password
            );
        }
    };

    async function addUser(
        nome_cadastro, data_nascimento, idade, sexo, email, senha
    ) {
        try {
            const userData = {
                nome: nome_cadastro,
                data_nascimento: data_nascimento,
                idade: idade,
                sexo: sexo,
                email: email,
                senha: senha,
                active: 'S',
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString(),
                created_by: 'user',
                updated_by: 'user'
            };
            await apiClient.post("/usuarios", userData).then((response) => {
                if (response.status === 201) {
                    navigate('/usuarios');
                }
                return response.data;
            }).catch((error) => {
                if (error.response.data.message === "Email already exists") {
                    console.error('Error:', error.response.data.message);
                    alert('E-mail já cadastrado. Tente novamente com outro e-mail.');
                    emailInputRef.current.focus();
                } else {
                    alert('Erro ao cadastrar usuário. Tente novamente.');
                }
            });
        } catch (error) {
            throw new Error('Erro ao cadastrar usuário:', error.message);
        }
    }

    const handleGoToLogin = () => {
        navigate('/login');
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    return { formData, setFormData, handleInputChange, handleSubmit, handleGoToLogin, emailInputRef, formatDate };
}