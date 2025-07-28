import { TaskGrid } from './TaskGrid';
import { TaskForm } from './TaskForm';
import { useState } from 'react';
import './style/Tasks.css';

export function Tasks() {
    const [reloadPanel, setReloadPanel] = useState(null);

    const handleReloadTasks = () => {
        setReloadPanel(true);
    }

    return (
        <>
            <div className='task-container'>
                <TaskForm onFormSubmit={handleReloadTasks} />
                <TaskGrid reloadPanel={reloadPanel} setReloadPanel={setReloadPanel} />
            </div>
        </>
    );
}