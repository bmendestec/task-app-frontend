import { LogOut } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export function LogoutButton() {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('authToken');
        localStorage.removeItem('userName');
        navigate('/login');
    };

    return (
        <>
            <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }} // Animação ao passar o mouse
                whileTap={{ scale: 0.9 }} // Animação ao clicar
                className="position-absolute top-0 end-0 m-3"
            >
                <LogOut
                    size={40}
                    variant="danger"
                    onClick={handleLogout}
                    style={{ cursor: "pointer" }} // Adicionando um cursor de ponteiro
                />
            </motion.div>
        </>
    );
}