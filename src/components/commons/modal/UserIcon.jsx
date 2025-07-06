import { UserCircle } from "lucide-react";
import { useAuth } from "../../../context/AuthContext";
import { useState } from "react";
import './style/userIcon.css';

export function UserIcon() {
    const { logout, userName } = useAuth();
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="drop-down">
            <div
                onClick={toggleDropdown}
                className="drop-down-toggle"                
            >
                <UserCircle size={40} style={{ color: "white" }} />
                <span>
                    {userName}
                </span>
            </div>

            {isOpen && (
                <div
                    className="toggle-opened"
                >
                    <div
                        onClick={() => { console.log("My profile") }}
                        className="toggle-option"
                        >
                        My profile
                    </div>
                    <div
                        onClick={() => console.log("Change password")}
                        className="toggle-option"                        
                    >
                        Change password
                    </div>
                    <div
                        onClick={logout}
                        className="toggle-logout"
                    >
                        Logout
                    </div>
                </div>
            )}
        </div>
    )
}