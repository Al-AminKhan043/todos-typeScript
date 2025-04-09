import React from 'react';
import Todos from './components/Todos';
import './App.css';
import TodosContextProvider from './store/todos-context';
import NewTodo from './components/NewTodo';

function App() {
  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
