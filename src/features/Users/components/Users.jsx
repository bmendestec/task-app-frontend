import { useState } from "react";
import { NavbarComponent } from "../../../components/commons/Navbar";;
import { BackButton } from "../../../components/commons/buttons/Back";
import { ListUsers } from "./ListUsers";
import { CreateUser } from "./CreateUser";
import { EditUser } from "./EditUser";

export function Users() {
    const [reloadPanel, setReloadPanel] = useState(null);
    const [editUserPanel, setEditUserPanel] = useState(null);

    const handleReloadTasks = () => {
        setReloadPanel(true);
    }

    return (
        <>
            <NavbarComponent />
            <BackButton />
            <div className="flex-grow-1 d-flex flex-column">
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                    {editUserPanel ? <EditUser /> : <CreateUser onFormSubmit={handleReloadTasks} />}
                    <ListUsers reloadPanel={reloadPanel} setReloadPanel={setReloadPanel} editUserPanel={editUserPanel} setEditUserPanel={setEditUserPanel} />
                </div>
            </div>
        </>
    );
}