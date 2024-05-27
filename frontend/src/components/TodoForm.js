import React, { useState } from 'react';

function TodoForm({addItem}) {
    const [item,setItem] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({item});
        addItem({
            id: Date.now(),
            item: item,
            isCompleted: false
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" className="itemInput" value={item} onChange={(event) => setItem(event.target.value)} />      <button className="addItemButton" onSubmit={handleSubmit}>Add Item</button>
        </form>
    );
}

export default TodoForm;