import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(){

    const onClickButton = () => {
        alert('Quieres agregar un nuevo TODO');
    }
    return(
        <button 
        className='CreateTodoButton'
        onClick={onClickButton}
        >
            +
        </button>

    );
};

export { CreateTodoButton };