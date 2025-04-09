import Todo from "../models/todo";
import React, { useState, ReactNode } from "react";

export const TodosContext = React.createContext<{
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
}>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {}
});

interface TodosContextProviderProps {
  children: ReactNode;
}

const TodosContextProvider: React.FC<TodosContextProviderProps> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandle = (text: string) => {
    const newTodo = new Todo(text);
    setTodos((currentTodos) => {
      return currentTodos.concat(newTodo);
    });
  };

  const removeTodo = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  const contextValue = {
    items: todos,
    addTodo: addTodoHandle,
    removeTodo: removeTodo
  };

  return <TodosContext.Provider value={contextValue}>{children}</TodosContext.Provider>;
};

export default TodosContextProvider;
