import React from "react";
import { TodoCounter } from '../TodoCounter';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { TodoSearch } from '../TodoSearch';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI({
  loading,
  error,
    totalTodos,
    compleatedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    toggleCompleteTodo,
    deleteTodo,
}){
    return(
    <React.Fragment>

      <TodoCounter 
        total={totalTodos}
        completed={compleatedTodos}
      />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {error && <p>Opps, bubo un error...</p>}
        {loading && <p>Estamos cargando...</p>}
        {(!loading && !searchedTodos.lenght) && <p>¡Crea tu primer TODO</p>}

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
      <CreateTodoButton/>

    </React.Fragment>
    );
}

export { AppUI }