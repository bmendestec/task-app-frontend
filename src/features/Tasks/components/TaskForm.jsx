import { CircleX, Save } from "lucide-react"
import { Button, Form } from "react-bootstrap"
import { useTasks } from "../hooks/useTasks";
import { useEffect, useState } from "react";

export function TaskForm() {
    const { taskForm, handleChange, handleSubmit, handleSaveButton } = useTasks();
    const [reloadPanel, setReloadPanel] = useState(null);
    useEffect(() => {
        if (!reloadPanel) return;
        setReloadPanel(false);
    }, []);

    return (
        <div style={{ width: "40%" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <h1>Create a Tasks</h1>
            </div>
            <div>

                <Form onSubmit={handleSubmit}
                    style={{
                        maxWidth: "800px"
                    }}>
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control type='text'
                            value={taskForm.title || ''}
                            onChange={handleChange}
                            name='title'
                            style={{
                                width: "100%"
                            }} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control type='text'
                            value={taskForm.description || ''}
                            onChange={handleChange}
                            name='description' />
                    </Form.Group>
                    <div className='row'>
                        <div className='col-6'>
                            <Form.Group>
                                <Form.Label>Status</Form.Label>
                                <Form.Select
                                    name="status"
                                    value={taskForm.status || ''}
                                    onChange={handleChange}
                                >
                                    <option value=" ">     ---</option>
                                    <option value="Pending">Pending</option>
                                    <option value="In progress">In progress</option>
                                    <option value="Finished">Finished</option>
                                </Form.Select>
                            </Form.Group>
                        </div>
                        <div className='col-6'>
                            <Form.Group>
                                <Form.Label>Priority</Form.Label>
                                <Form.Select
                                    name="priority"
                                    value={taskForm.priority || ''}
                                    onChange={handleChange}
                                >
                                    <option value=" ">     ---</option>
                                    <option value="Low">Low</option>
                                    <option value="Medium">Medium</option>
                                    <option value="High">High</option>
                                </Form.Select>
                            </Form.Group>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-6'>
                            <Form.Group>
                                <Form.Label>Due date</Form.Label>
                                <Form.Control type='date'
                                    value={taskForm.due_date || ''}
                                    onChange={handleChange}
                                    name='due_date' />
                            </Form.Group>
                        </div>
                        <div className='col-6'>
                            <Form.Group>
                                <Form.Label>Completed at</Form.Label>
                                <Form.Control type='date'
                                    value={taskForm.completed_at || ''}
                                    onChange={handleChange}
                                    name='completed_at' />
                            </Form.Group>
                        </div>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "flex-end",
                            width: "100%",
                            marginTop: "15px",
                        }}
                    >
                        <Button
                            type="submit"
                            variant="danger"
                            style={{ width: "100px" }}
                        >
                            <CircleX size={20} /> Cancel
                        </Button>
                        <Button
                            type="submit"
                            variant="primary"
                            style={{ width: "100px", marginLeft: "10px" }}
                            onClick={() => { handleSaveButton(setReloadPanel) }}
                        >
                            <Save size={20} /> Save
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}