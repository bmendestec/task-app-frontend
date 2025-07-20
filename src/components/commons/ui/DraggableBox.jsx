import { useDraggable } from "@dnd-kit/core";

export function DraggableBox({ id, children }) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: id || 'draggable-box',
    });

    const style = {
        width: '150px',
        height: '15%',
        border: '1px solid black',
        margin: '5px',
        borderRadius: '10px',
        background: '#f8f9fa',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'grab',
        transform: transform
            ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
            : undefined,
    };

    return (
        <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
            {children}
        </div>
    );
}