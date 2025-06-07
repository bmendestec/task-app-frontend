import { Form } from "react-bootstrap"
import { useTasks } from "../hooks/useTasks";
import { SaveAndCancel } from "../../../components/commons/buttons/SaveAndCancel";

export function TaskForm({ onFormSubmit }) {
    const { taskForm, loading, handleChange, handleSubmit } = useTasks();

    const handleSave = async (e) => {
        e.preventDefault();
        await handleSubmit();
        onFormSubmit();
    }

    return (
        <div style={{ width: "30%" }}>
            <div style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "20px",
                marginTop: "20px",
                border: "1px solid #D1D5DB",
                borderRadius: "20px"
            }}>
                <h2>Insert a new task</h2>
            </div>
            <div>

                <Form onSubmit={handleSave}
                    style={{
                        maxWidth: "570px"
                    }}>
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control type='text'
                            value={taskForm.title || ''}
                            onChange={handleChange}
                            name='title'
                            style={{
                                width: "100%"
                            }}
                            required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control type='text'
                            value={taskForm.description || ''}
                            onChange={handleChange}
                            name='description'
                            required />
                    </Form.Group>
                    <div className='row'>
                        <div className='col-6'>
                            <Form.Group>
                                <Form.Label>Status</Form.Label>
                                <Form.Select
                                    name="status"
                                    value={taskForm.status || ''}
                                    onChange={handleChange}
                                    required
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
                                    name='due_date'
                                    required />
                            </Form.Group>
                        </div>
                        <div className='col-6'>
                            <Form.Group>
                                <Form.Label>Completed at</Form.Label>
                                <Form.Control type='date'
                                    value={taskForm.completed_at || ''}
                                    onChange={handleChange}
                                    name='completed_at'
                                    required />
                            </Form.Group>
                        </div>
                    </div>                    
                    <SaveAndCancel onLoading={loading}/>
                </Form>
            </div>
        </div>
    )
}