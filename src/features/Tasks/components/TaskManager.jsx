import React, { useEffect, useState } from 'react';
import { BackButton } from "../../../components/commons/buttons/Back";
import { NavbarComponent } from "../../../components/commons/Navbar";
import { DndContext, useDraggable } from '@dnd-kit/core';
import { DraggableBox } from '../../../components/commons/ui/DraggableBox';
import { useTasks } from '../hooks/useTasks';

function DraggableColumn({ id, title, children }) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });
    const style = {
        transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
        cursor: 'grab',
        margin: '8px',
        minWidth: '220px',
        maxWidth: '350px',
        background: '#f8f9fa',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };
    return (
        <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
            <h3>{title}</h3>
            {children}
        </div>
    );
}

export function TaskManager() {
    const { fetchTasksData, formatDate } = useTasks();
    const [tasks, setTasks] = useState([]);
    const [columns, setColumns] = useState({
        todo: [],
        done: []
    });
    const [columnNames, setColumnNames] = useState([
        { id: 'todo', title: 'Tarefas' },
        { id: 'done', title: 'Concluídas' }
    ]);
    const [newColumn, setNewColumn] = useState('');

    useEffect(() => {
        fetchTasksData().then(data => {
            setTasks(data);
            setColumns({
                todo: data.map(task => task.id),
                done: []
            });
        });
    }, []);

    const handleAddColumn = (e) => {
        e.preventDefault();
        if (!newColumn.trim()) return;
        const id = newColumn.toLowerCase().replace(/\s+/g, '-');
        if (columnNames.some(col => col.id === id)) return;
        setColumnNames([...columnNames, { id, title: newColumn }]);
        setColumns(prev => ({ ...prev, [id]: [] }));
        setNewColumn('');
    };

    // Reordenação das colunas
    const handleColumnDragEnd = (event) => {
        const { active, over } = event;
        if (!over || active.id === over.id) return;
        const oldIndex = columnNames.findIndex(col => col.id === active.id);
        const newIndex = columnNames.findIndex(col => col.id === over.id);
        if (oldIndex === -1 || newIndex === -1) return;

        const updated = [...columnNames];
        const [removed] = updated.splice(oldIndex, 1);
        updated.splice(newIndex, 0, removed);
        setColumnNames(updated);
    };

    // Drag and drop das tasks dentro das colunas
    const handleTaskDragEnd = (event) => {
        const { active, over } = event;
        if (!over) return;
        if (columns[over.id]?.includes(active.id)) return;
        setColumns(prev => {
            const newColumns = {};
            Object.keys(prev).forEach(colId => {
                newColumns[colId] = prev[colId].filter(id => id !== active.id);
            });
            newColumns[over.id] = [...(newColumns[over.id] || []), active.id];
            return newColumns;
        });
    };

    return (
        <div>
            <NavbarComponent />
            <BackButton />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <p>Task manager</p>
            </div>
            <form onSubmit={handleAddColumn} style={{ margin: '16px 0', display: 'flex', gap: '8px', justifyContent: 'center' }}>
                <input
                    type="text"
                    value={newColumn}
                    onChange={e => setNewColumn(e.target.value)}
                    placeholder="Nova coluna"
                    style={{ padding: '8px', borderRadius: '8px', border: '1px solid #ccc' }}
                />
                <button type="submit" style={{ padding: '8px 16px', borderRadius: '8px', border: 'none', background: '#007bff', color: '#fff' }}>
                    Adicionar coluna
                </button>
            </form>
            {/* Colunas são droppables para outras colunas */}
            <DndContext onDragEnd={handleColumnDragEnd}>
                <div className="columns-container" style={{ display: 'flex', gap: '24px' }}>
                    {columnNames.map((col, idx) => (
                        <DraggableColumn key={col.id} id={col.id} title={col.title} index={idx}>
                            {/* Drag and drop das tasks */}
                            <DndContext onDragEnd={handleTaskDragEnd}>
                                {(columns[col.id] || []).map(taskId => {
                                    const task = tasks.find(t => t.id === taskId);
                                    if (!task) return null;
                                    return (
                                        <DraggableBox key={task.id} id={task.id}>
                                            {task.title} - {formatDate(task.due_date)}
                                        </DraggableBox>
                                    );
                                })}
                            </DndContext>
                        </DraggableColumn>
                    ))}
                </div>
            </DndContext>
        </div>
    );
}