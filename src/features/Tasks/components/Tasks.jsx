import { NavbarComponent } from '../../../components/Navbar';
import { BackButton } from '../../../components/commons/buttons/Back';
import { TaskGrid } from './TaskGrid';
import { TaskForm } from './TaskForm';
import { useEffect, useState } from 'react';

export function Tasks() {
    const [reloadPanel, setReloadPanel] = useState(null);
    useEffect(() => {
        if (!reloadPanel) return;
        setReloadPanel(false);
    }, [reloadPanel]);

    return (
        <div>
            <NavbarComponent />
            <div className="flex-grow-1 p-4 d-flex flex-column">
                <BackButton />
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                    <TaskForm />
                    <TaskGrid />
                </div>
            </div>
        </div>
    );
}