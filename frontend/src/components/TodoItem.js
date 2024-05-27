import React from 'react';

function TodoItem({label,handleMarkCompleteTodoItem, handleRemoveTodoItem }) {
    return (
        <div className="singleTodoItem">
            <div>
                <span>{label}</span>
                <button className="markCompleteTodoItem" onClick={handleMarkCompleteTodoItem}>Complete</button>
                <button className="removeTodoItem" onClick={handleRemoveTodoItem}>X</button>
            </div>
        </div>
    );
}

export default TodoItem;