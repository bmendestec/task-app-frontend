import { useState } from "react";
import { NavbarComponent } from "../../../components/Navbar";
import { BackButton } from "../../../components/commons/buttons/Back";
import { ListUsers } from "./ListUsers";
import { CreateUser } from "./CreateUser";

export function Users() {
    const [reloadPanel, setReloadPanel] = useState(null);

    const handleReloadTasks = () => {
        setReloadPanel(true);
    }

    return (
        <>
            <NavbarComponent />
            <BackButton />
            <div className="flex-grow-1 d-flex flex-column">               
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                    <CreateUser onFormSubmit={handleReloadTasks} />
                    <ListUsers reloadPanel={reloadPanel} setReloadPanel={setReloadPanel} />
                </div>
            </div>
        </>
    );
}