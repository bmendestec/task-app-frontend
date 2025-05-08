import { useState } from "react";
import apiClient from "../service/server";

export function useTasks() {
    const [taskForm, setTaskForm] = useState({
        title: '',
        project_id: '',
        description: '',
        status: '',
        priority: '',
        due_date: '',
        completed_at: '',
        created_at: '',
        updated_at: '',
    });

    const handleChange = (e) => {
        setTaskForm({ ...taskForm, [e.target.name]: e.target.value });
    };

    async function addTask (
        title, description, status, priority, due_date, completed_at
    ) {
        try {
            const taskData = {
                title: title,
                project_id: 2,
                description: description,
                status: status,
                priority: priority,
                due_date: due_date,
                completed_at: completed_at,
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString(),
            };
            const response = await apiClient.post('/tasks', taskData);
            if (response.status !== 201) {
                alert('Error to create the task.')
                return;
            } else {
                return response.data;
            }            
        } catch (error) {
            console.error('Error creating task:', error);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!taskForm.title) {
            alert('Please fill in the title.');
            return;
        }

        await addTask(
            taskForm.title,
            taskForm.description,
            taskForm.status,
            taskForm.priority,
            taskForm.due_date,
            taskForm.completed_at
        );
    };

    const fetchTasksData = async () => {
        try {
            const response = await apiClient.get('/tasks');
            if (response.status !== 200) {
                console.log('Error to fetch task:', response.message);
                return;
            } else {
                setTaskForm(response.data);
                return response.data;
            }
        } catch (error) {
            throw new Error('Error to fetch task:', error.message);
        }
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    return {
        taskForm,
        setTaskForm,
        handleSubmit,
        handleChange,
        fetchTasksData,
        formatDate
    }
}