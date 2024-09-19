import React from 'react';
import './button.css';

export const Button = ({ name }) => {
    return (
        <button type='submit' className='button'>{name}</button>
    );
}
