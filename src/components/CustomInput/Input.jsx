import React from 'react';
import './input.css'

export const Input = ({ value, onChange, placeholder }) => {
    return (
            <input
                value={value} 
                onChange={onChange} 
                type='text' 
                placeholder={placeholder}/>
    );
};
