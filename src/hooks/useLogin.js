import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export function useLogin() {
    const [modalMessage, setModalMessage] = useState(null);
    const navigate = useNavigate();
    const passwordInputRef = useRef(null);

    const handleNewUserRegister = () => {
        navigate('/register');
    };

    const handleBackToHome = () => {
        navigate('/');
    };

    return { handleNewUserRegister, handleBackToHome, setModalMessage, modalMessage, passwordInputRef };
}