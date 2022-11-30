import React from 'react';
import ReactDOM from 'react-dom';
import './modal.css'

function Modal({ children, setOpenModal }){
    const OnclickCLoseModal = (event) =>{
        setOpenModal(false);
    }
    return ReactDOM.createPortal(
        <div className='ModalContainer'>
            {children}
            <div className='ModalBackground' onClick={OnclickCLoseModal}></div>
        </div>,
        document.getElementById('modal')
    );
};

export {Modal}