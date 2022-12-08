import React from 'react';

import './TodoForm.css';

function TodoForm ({ addTodo, setOpenModal }) {
    const [newTodoValue, setNewTodoValue] = React.useState([]);


    const onWritting = (event) => {
        setNewTodoValue(event.target.value);
    };
    const onCancel = () => {
        setOpenModal(false);
    };
    const onSubmit = (event) => {
        event.preventDefault();
        if(newTodoValue.length>= 1){
            addTodo(newTodoValue);
            setOpenModal(false);
        }
    };
    const onKeyUp = (e) => {
        if (e.charCode === 13) {
            e.preventDefault();
            addTodo(newTodoValue);
            onCancel();
        }
    };

    return(
        <form onSubmit={onSubmit} onKeyPress={onKeyUp}>
            <label>¿Cual es tu nuevo TODO? </label>
            <textarea 
                placeholder='Tu mama te mima' 
                value={newTodoValue}
                onChange={onWritting}
                required
            />
            <div className='Button-container'>
                <button 
                onClick={onCancel} 
                type='button'
                className='Button--cancel button'
                >
                    Cancelar
                </button>
                <button 
                type='submit'
                className='Button--submit button'
                >
                    Añadir  
                </button>
            </div>
        </form>
    )
};

export {TodoForm}