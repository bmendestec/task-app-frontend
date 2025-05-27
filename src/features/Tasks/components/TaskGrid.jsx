import { useEffect, useState } from "react";
import { useTasks } from "../hooks/useTasks";
import { Button, Table } from "react-bootstrap";
import { PenIcon, Trash2, UserPen } from "lucide-react";

export function TaskGrid() {
    const { fetchTasksData, formatDate } = useTasks();
    const [tasks, setTasks] = useState([]);
    const [reloadPanel, setReloadPanel] = useState(null);
    const fetchTasks = async () => {
        const data = await fetchTasksData();
        setTasks(data);
    };
    useEffect(() => {
        fetchTasks();
        if (!reloadPanel) return;
        setReloadPanel(false);
    }, [reloadPanel]);


    return (

        <div style={{ width: "40%", maxHeight: "700px", overflowY: "auto" }}>
            <div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <h1 className='fw-bold'>Tasks</h1>
                </div>
                <Table className="table table-striped">
                    <thead>
                        <tr>
                            <th style={{ width: '20%', textAlign: 'center' }}>Title</th>
                            <th style={{ width: '10%', textAlign: 'center' }}>Status</th>
                            <th style={{ width: '10%', textAlign: 'center' }}>Priority</th>
                            <th style={{ width: '10%', textAlign: 'center' }}>Due date</th>
                            <th style={{ width: '10%', textAlign: 'center' }}>Completed at</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((task) => (
                            <tr key={task.id}>
                                <td style={{ textAlign: 'center' }}>{task.title}</td>
                                <td style={{ textAlign: 'center' }}>{task.status || '---'}</td>
                                <td style={{ textAlign: 'center' }}>{task.priority || '---'}</td>
                                <td style={{ textAlign: 'center' }}>{formatDate(task.due_date)}</td>
                                <td style={{ textAlign: 'center' }}>{formatDate(task.completed_at)}</td>
                                <td style={{ textAlign: 'center' }}>
                                    <Button
                                        variant="warning"
                                        className="btn btn-warning me-2"
                                        onClick={() => { console.log(task.id) }}>
                                        <PenIcon />
                                    </Button>
                                    <Button variant="danger"
                                        className="btn btn-danger"
                                        onClick={() => { console.log(task.id) }}>
                                        <Trash2 />
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}