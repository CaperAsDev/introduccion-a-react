import React from "react";
import { TodoContext } from '../TodoContext/index';
import { TodoCounter } from '../TodoCounter';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { TodoSearch } from '../TodoSearch';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../modal/index';
import { TodoForm } from '../TodoForm/index';
import { TodosError } from '../TodosError/index';
import { TodosLoading } from '../TodosLoading/index';
import { EmptyTodo } from '../EmptyTodo/index';


function AppUI(){

const {error, loading, searchedTodos, toggleCompleteTodo, deleteTodo,totalTodos,  openModal,  setOpenModal} = React.useContext(TodoContext);
    return(
    <React.Fragment>

      <TodoCounter />
      <TodoSearch  />

      <TodoList>
        {error && <TodosError error={error}/>}
        {loading && <TodosLoading />}
        {(!loading & !totalTodos>0)? <EmptyTodo /> : ''}

        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed} 
            onComplete={() => toggleCompleteTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      {openModal && (
        <Modal 
        setOpenModal={setOpenModal}
        >
          <TodoForm></TodoForm>
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />

    </React.Fragment>
    );
}

export { AppUI }