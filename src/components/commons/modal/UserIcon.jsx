import { UserCircle } from "lucide-react";
import { Dropdown } from "react-bootstrap";
import { useAuth } from "../../../context/AuthContext";

export function UserIcon() {
    const { logout, user } = useAuth();
    return (
        <Dropdown style={{ display: 'flex', justifyContent: 'space-between', width:'15%' }}>
            <Dropdown.Toggle style={{ width: '100%' }}>
                {user}
                <UserCircle size={40}
                    style={{
                        color: 'white',
                        backgroundColor: '#007bff',
                        borderRadius: '50%',
                        padding: '5px',
                        cursor: 'pointer',
                    }}
                />
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ width: '230px' }} >
                <Dropdown.Item href="#/action-1">My profile</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Change password</Dropdown.Item>
                <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}