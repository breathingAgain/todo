import React, { useState, useEffect } from 'react';
import { TodoForm } from '../Form/TodoForm';
import { TodoItem } from '../TodoItem/TodoItem';
import './wrapper.css';
import { EditTodoForm } from '../EditTodo/EditTodoForm';

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);

    const addTodos = (task) => {
        const newTodo = {
            id: Date.now(),
            task: task,
            completed: false,
            isEdit: false,
        };
        setTodos([...todos, newTodo]);
    };

    const handleToDoComplete = (id) => {
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const handleToDoDelete = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const handleToDoEdit = (task, id) => {
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, task: task, isEdit: false } : todo
        ));
    };

    const toggleEditMode = (id) => {
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, isEdit: !todo.isEdit } : todo
        ));
    };

    return (
        <div className='wrapper'>
            <h1>Tasks and Goals</h1>
            <TodoForm addTodos={addTodos} />
            {todos.map((todo) => (
                todo.isEdit ? (
                    <EditTodoForm 
                        key={todo.id} 
                        editTodo={handleToDoEdit} 
                        todo={todo}
                    />
                ) : (
                    <TodoItem 
                        key={todo.id}
                        todo={todo}
                        toDoComplete={handleToDoComplete}
                        toDoDelete={handleToDoDelete}
                        toDoEdit={toggleEditMode}
                    />
                )
            ))}
        </div>
    );
};
