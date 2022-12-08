import React from 'react';
import { useTodos } from './useTodos';
import { TodoCounter } from '../TodoCounter';
import { TodoHeader } from '../TodoHeader';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { TodoSearch } from '../TodoSearch';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../modal/index';
import { TodoForm } from '../TodoForm/index';
import { TodosError } from '../TodosError/index';
import { TodosLoading } from '../TodosLoading/index';
import { EmptyTodo } from '../EmptyTodo/index';

function App(props) {

  const {error, loading, searchedTodos, toggleCompleteTodo, deleteTodo,totalTodos,  openModal,  setOpenModal, compleatedTodos, searchValue, setSearchValue, addTodo, } = useTodos;

  return(
    <React.Fragment>
      <TodoHeader>

        <TodoCounter 
          totalTodos={totalTodos}
          compleatedTodos={compleatedTodos}
        />
        <TodoSearch  
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>

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
          <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />

    </React.Fragment>
    );
}

export default App;
