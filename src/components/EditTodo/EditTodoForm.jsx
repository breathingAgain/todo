import React from 'react';
import { useState } from 'react';
import { Button } from '../CustomButton/Button';
import { Input } from '../CustomInput/Input';
export const EditTodoForm = ({ editTodo, todo }) => {

    const [value, setValue] = useState(todo.task);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value.trim()) {
            editTodo(value, todo.id)
            setValue('');
        }
        
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Input 
                    value={value} 
                    onChange={(e) => setValue(e.target.value)} 
                    placeholder={'Update task'} 
                />
                <Button name={'Update'}/>
            </form>
        </div>
    );
}
