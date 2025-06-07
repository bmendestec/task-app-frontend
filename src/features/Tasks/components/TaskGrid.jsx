import { useEffect, useState } from "react";
import { useTasks } from "../hooks/useTasks";
import { Button, Spinner, Table } from "react-bootstrap";
import { PenIcon, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { TaskCalendar } from "./TaskCalendar";

export function TaskGrid({ reloadPanel, setReloadPanel }) {
    const { fetchTasksData, formatDate, handleDeleteTask, loading } = useTasks();
    const [tasks, setTasks] = useState([]);
    const navigate = useNavigate();

    const fetchTasks = async () => {
        const data = await fetchTasksData();
        setTasks(data);
    };
    useEffect(() => {
        fetchTasks();
        if (!reloadPanel) return;
        setReloadPanel(false);
    }, [reloadPanel]);

    const handleEdit = (taskId) => {
        console.log(taskId);
        navigate('task-calendar');
    } 

    return (

        <div style={{ width: "60%", maxHeight: "700px", overflowY: "auto" }}>
            <div>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 9999
                }}>
                    {loading ?

                        <Spinner animation="border" role="status" >
                            <span className="visually-hidden">Loading...</span>
                        </Spinner> :
                        <Table hover className="table">
                            <thead>
                                <tr>
                                    <th style={{ width: '20%', textAlign: 'center' }}>Title</th>
                                    <th style={{ width: '20%', textAlign: 'center' }}>Description</th>
                                    <th style={{ width: '10%', textAlign: 'center' }}>Status</th>
                                    <th style={{ width: '10%', textAlign: 'center' }}>Priority</th>
                                    <th style={{ width: '10%', textAlign: 'center' }}>Due date</th>
                                    <th style={{ width: '15%', textAlign: 'center' }}>Completed at</th>
                                    <th style={{ width: '15%', textAlign: 'center' }}></th>
                                </tr>
                            </thead>
                            <tbody>
                                {tasks.map((task) => (
                                    <tr key={task.id} onDoubleClick={() => handleEdit(task.id)}>
                                        <td style={{ textAlign: 'center' }} >{task.title}</td>
                                        <td style={{ textAlign: 'center' }}>{task.description}</td>
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
                                                onClick={() => { handleDeleteTask(task.id, setReloadPanel) }}>
                                                <Trash2 />
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>}
                </div>
            </div>
        </div>
    )
}