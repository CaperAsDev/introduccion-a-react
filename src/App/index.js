import React from 'react';
import { AppUI } from './AppUI';
// import './App.css';
/* const defaultTodos = [
  {
    text: 'Learn about Cooking',
    completed: false,
  },
  {
    text: 'Learn about Web ',
    completed: false,
  },
  {
    text: 'Learn about Anime ',
    completed: false,
  },
  {
    text: 'Learn about Painting ',
    completed: false,
  },
] */

function useLocalStorage(itemName, initialValue) {
  
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  const [item, setItem] = React.useState(initialValue);
  
  React.useEffect(() => {
    setTimeout(() => {
      try {
        console.log('useEffect ejecutandose');
        const locaStorageItem = localStorage.getItem(itemName);
        let parsedItem;
      
        if (!locaStorageItem) {
          localStorage.setItem(itemName, JSON.stringify([]));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(locaStorageItem);
        }
  
        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        setError(error)
      }
    }, 2000)
  },[initialValue, itemName]);


  const saveItem = (updateItem) => {
    try {
      const stringyfiedItem = JSON.stringify(updateItem);
      localStorage.setItem(itemName, stringyfiedItem);
      setItem(updateItem); 
    } catch (error) {
      setError(error);
    }
  };

  return {item, saveItem, loading, error};

};

function App(props) {

  const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage('TODOS_V1', []);

  const [searchValue, setSearchValue] = React.useState('');

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
    <AppUI 
    error={error}
    loading={loading}
    totalTodos={totalTodos}
    compleatedTodos={compleatedTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    toggleCompleteTodo={toggleCompleteTodo}
    deleteTodo={deleteTodo}
    />
  );
}

export default App;
