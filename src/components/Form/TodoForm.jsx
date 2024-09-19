import React from 'react';
import { useState } from 'react';
import { Button } from '../CustomButton/Button';
import { Input } from '../CustomInput/Input';
export const TodoForm = ({ addTodos }) => {

    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value.trim()) {
            addTodos(value)
            setValue('');
        }
        
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Input 
                    value={value} 
                    onChange={(e) => setValue(e.target.value)} 
                    placeholder={'Enter task'} 
                />
                <Button name={'Add task'}/>
            </form>
        </div>
    );
}
