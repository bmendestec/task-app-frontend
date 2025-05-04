import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

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
            <Button variant='outline-light' onClick={handleLogout}>
                <LogOut
                    variant="danger"    
                    className='me-3'
                />
                Sair
            </Button>
        </>
    );
}