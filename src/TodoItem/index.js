import React from 'react';
import './TodoItem.css';
import { BsCheckCircleFill,BsTrashFill } from 'react-icons/bs';

function TodoItem({text, completed, onComplete, onDelete}) {

    return(
        <li className='TodoItem'>
            <BsCheckCircleFill 
                className={`Icon Icon-check ${completed && 'Icon-check--active'}`}
                onClick={onComplete}
            />

            <p 
                className={`TodoItem-p ${completed ? 'TodoItem-p--complete': 'NotCompleted'}`}
            >
                {text}
            </p>

            <BsTrashFill 
                className='Icon Icon-delete'
                onClick={onDelete}
            />

        </li>

    );
};

export { TodoItem };