import { useState } from "react";
import { NavbarComponent } from "../../../components/commons/Navbar";;
import { BackButton } from "../../../components/commons/buttons/Back";
import { ListUsers } from "./ListUsers";
import { CreateUser } from "./CreateUser";
import { EditUser } from "./EditUser";
import './styles/Users.css';

export function Users() {
    const [reloadPanel, setReloadPanel] = useState(null);
    const [currentView, setCurrentView] = useState('list');
    const [selectedUserId, setSelectedUserId] = useState(null);

    const handleEditUser = (userId) => {
        setSelectedUserId(userId);
        setCurrentView('edit');
    };

    const handleBackToList = () => {
        setCurrentView('list');
        setSelectedUserId(null);
        setReloadPanel(true); // Recarrega a lista quando volta
    };

    const handleCreateUser = () => {
        setCurrentView('create');
    };

    return (
        <>
            <div className="users-container">
                <ListUsers
                    reloadPanel={reloadPanel}
                    setReloadPanel={setReloadPanel}
                    onEditUser={handleEditUser}
                    onCreateUser={handleCreateUser}
                />
                {currentView === 'edit' && (
                    <EditUser
                        userId={selectedUserId}
                        onBack={handleBackToList}
                        setReloadPanel={setReloadPanel}
                    />
                )}
            </div>
        </>
    );
}