import { NavbarComponent } from '../../../components/Navbar';
import { BackButton } from '../../../components/commons/buttons/Back';
import { TaskGrid } from './TaskGrid';
import { TaskForm } from './TaskForm';
import { useState } from 'react';

export function Tasks() {
    const [reloadPanel, setReloadPanel] = useState(null);

    const handleReloadTasks = () => {
        setReloadPanel(true);
    }

    return (
        <>
            <NavbarComponent />
            <div className="flex-grow-1 d-flex flex-column">
                <BackButton />
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                    <TaskForm onFormSubmit={handleReloadTasks} />
                    <TaskGrid reloadPanel={reloadPanel} setReloadPanel={setReloadPanel} />
                </div>
            </div>
        </>
    );
}