import React from "react";
import './EmptyTodo.css'

function EmptyTodo() {
    return (
        <div className="Img-Container">
            <img alt="Empty Todo List" src="https://media.tenor.com/QkBOcqjpksIAAAAC/patrick-star-to-do-list.gif"/>
        </div>
    )
}

export { EmptyTodo }