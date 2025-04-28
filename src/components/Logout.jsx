import { CloseButton } from "react-bootstrap";
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
            <CloseButton className="position-absolute top-0 end-0 m-3" onClick={handleLogout} aria-label="Close" />            
        </>
    );
}