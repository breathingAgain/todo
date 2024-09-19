import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import './todoItem.css'

export const TodoItem = ({ todo, toDoComplete, toDoDelete, toDoEdit }) => {
    return (
        <div className="todo-item">
            <p 
                onClick={() => toDoComplete(todo.id)} 
                className={todo.completed ? 'completed' : ''}>
                {todo.task}
            </p>
            <div>
                <FontAwesomeIcon 
                    icon={faPenSquare} 
                    onClick={() => {
                        toDoEdit(todo.id)
                    }} 
                />
                <FontAwesomeIcon 
                    icon={faTrash} 
                    onClick={() => {
                        toDoDelete(todo.id)
                    }} 
                />
            </div>
        </div>
    );
}
