import Todo from "../models/todo";
import React, {  useState } from "react";
export const TodosContext=React.createContext<{items: Todo[], addTodo:(text:string)=>void, removeTodo:(id:string)=>void}>({
    items:[],
    addTodo:()=>{},
    removeTodo:(id:string)=>{}
});

const TodosContextProvider:React.FC=(props)=>{
    const [todos,setTodos]=useState<Todo[]>([]);
  const addTodoHandle=(text:string)=>{
  const newTodo= new Todo(text);
  setTodos((currentTodos)=>{ 
    return currentTodos.concat(newTodo);
   })
  }
  const removeTodo=(todoId:string)=>{
  setTodos((prevTodos=> {
    return prevTodos.filter(todo=> todo.id!== todoId)
  }))
  }
  const contextValue:{items: Todo[], addTodo:(text:string)=>void, removeTodo:(id:string)=>void} ={
    items:todos,
    addTodo:addTodoHandle,
    removeTodo:removeTodo
  }
return <TodosContext.Provider value={contextValue}>
{props.children}
</TodosContext.Provider>
}

export default TodosContextProvider;