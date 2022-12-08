import React from 'react';
import './TodoCounter.css';

function TodoCounter({totalTodos, compleatedTodos}) {
    return(
        <h2 className="TodoCounter">Has completado {compleatedTodos} de {totalTodos} TODOs</h2>
    );
};

export { TodoCounter };