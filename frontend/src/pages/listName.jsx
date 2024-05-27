import React from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

function TodoApp() {
    const [todoItems, setTodoItems] = useState([]);

    const addItem = (item) => {
        setTodoItems([...todoItems, item]);
    }

    const handleCompleteItem = (itemId) => {
        const updatedTodoList = todoItems.map((todo) =>
            todo.id === itemId ? {...todo, completed: !todo.completed} : todo
        );
        setTodoList(updatedTodoList);
    };

    const handleRemoveItem = (itemId) => {
        const updatedTodoList = todoItems.filter((todo) => todo.id !== itemId);
        setTodoList(updatedTodoList);
    };


    return (
        <div className="app">
            <div className="todo-list">
                todo items go here
                <TodoForm addItem={addItem}/>
                {todoItems.map((todoItem) => <TodoItem key={todoItem.id} label={todoItem.item}
                                                       handleMarkCompleteTodoItem={() => handleCompleteItem(todoItem.id)}
                                                       handleRemoveTodoItem={() => handleRemoveItem(todoItem.id)}/>
                )
                }}

            </div>
        </div>
    );
}

export default TodoApp;