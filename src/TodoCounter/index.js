import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
    const {totalTodos, compleatedTodos} = React.useContext(TodoContext)
    return(
        <h2 className="TodoCounter">Has completado {compleatedTodos} de {totalTodos} TODOs</h2>
    );
};

export { TodoCounter };