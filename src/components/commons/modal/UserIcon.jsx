import { LogOut, UserCircle } from "lucide-react";
import { useAuth } from "../../../context/AuthContext";
// import { useState } from "react";
import './style/userIcon.css';

export function UserIcon() {
    const { logout } = useAuth();
    // const [isOpen, setIsOpen] = useState(false);

    // const toggleDropdown = () => {
    //     setIsOpen(!isOpen);
    // };

    return (
        <div className="drop-down">
            <button
                onClick={logout}
                className="drop-down-toggle"
            >
                <LogOut size={40} style={{ color: "black" }} />
            </button>

            {/* {isOpen && (
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
            )} */}
        </div>
    )
}