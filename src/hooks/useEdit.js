import { useEffect, useState } from "react";
import apiClient from "../service/server";
import { useNavigate } from "react-router-dom";

export function useEdit({ userId } = {}) {    
    const [user, setUser] = useState({
        id: null,
        nome: '',
        idade: '',
        email: '',
        data_nascimento: '',
        sexo: ''
    });
    const navigate = useNavigate();

    useEffect(() => {
        if (!userId) return;

        apiClient.get(`/usuarios/${userId}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('authToken')}`,
            }
        }).then((response) => {
            setUser(response.data.user);
        }).catch((error) => {
            console.log('Erro ao editar usuário:', error.message);
        })
    }, [userId]);

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        apiClient.put(`/usuarios/${userId}`, user, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('authToken')}`,
            }
        }).then((response) => {
            alert('Usuário editado com sucesso!');
            console.log('Usuário editado:', response.data);
            navigate('/usuarios');
        }).catch((error) => {
            console.log('Erro ao editar usuário:', error.message);
        });
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    return {
        handleSubmit,
        handleChange,
        formatDate,
        user
    };
}