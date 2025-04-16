import { useRef, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../service/firebase";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

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

    const [modalMessage, setModalMessage] = useState(null);
    const navigate = useNavigate();
    const emailInputRef = useRef(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (name === 'birthDate') {
            const birthDate = new Date(value);
            const today = new Date();
            const age = today.getFullYear() - birthDate.getFullYear();
            const monthDiff = today.getMonth() - birthDate.getMonth();
            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                setFormData({ ...formData, birthDate: value, age: age - 1 });
            } else {
                setFormData({ ...formData, birthDate: value, age });
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            setModalMessage('Por favor, insira um e-mail válido.');
            emailInputRef.current.focus();
            return;
        } else if (formData.password !== formData.confirmPassword) {
            setModalMessage('As senhas não coincidem.');
            return;
        } else if (!formData.fullName) {
            setModalMessage('Por favor, preencha o nome completo.');
            return;
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
            const auth = getAuth();

            const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
            const user = userCredential.user;
            
            await addDoc(collection(db, "usuarios"), {
                uid: user.uid,
                nome_cadastro: nome_cadastro,
                data_nascimento: data_nascimento,
                idade: idade,
                sexo: sexo,
                email: email,
            });

            setModalMessage('Usuário cadastrado com sucesso!');            
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {                
                setModalMessage('Este e-mail já está em uso. Tente outro.');
                emailInputRef.current.focus();              
            }
        }
    }

    const handleGoToLogin = () => {
        navigate('/login');
    }

    return { formData, handleInputChange, handleSubmit, handleGoToLogin, emailInputRef, modalMessage, setModalMessage };
}