import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider(props) {
    const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage('TODOS_V1', []);

    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

    const compleatedTodos = todos.filter(todo => todo.completed).length;
    const totalTodos = todos.length;
  
    let searchedTodos = [];
  
    if(!searchValue.length >= 1){
      searchedTodos = todos;
    }else{
      searchedTodos = todos.filter(todo => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
  
        return todoText.includes(searchText);
      })
    }
    
    const addTodo = (text) => {
      const todosUpdate = [...todos];
      todosUpdate.unshift({
        compleated: false,
        text: text,
      })
      saveTodos(todosUpdate);
    };

    const toggleCompleteTodo = (text) => {
      const todoIndex = todos.findIndex(todo => todo.text === text);
      const todosUpdate = [...todos];
      let todoStatus = todosUpdate[todoIndex].completed ;
      todosUpdate[todoIndex].completed = !todoStatus;
      saveTodos(todosUpdate);
    };
    
    const deleteTodo = (text) => {
      const todoIndex = todos.findIndex(todo => todo.text === text);
      const todosUpdate = [...todos];
      todosUpdate.splice(todoIndex,1);
      saveTodos(todosUpdate);
    };
    return (
        <TodoContext.Provider value={{
            error,
            loading,
            totalTodos,
            compleatedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            toggleCompleteTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
};

export {TodoContext, TodoProvider};