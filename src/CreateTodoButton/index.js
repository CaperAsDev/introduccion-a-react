import React from 'react';
import './CreateTodoButton.css';
import { BsFillPlusCircleFill } from 'react-icons/bs'
function CreateTodoButton(props){

    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState);
    }
    return(
        <BsFillPlusCircleFill 
        className='CreateTodoButton'
        onClick={onClickButton}
        />

    );
};

export { CreateTodoButton };