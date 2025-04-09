import { useRef,useContext } from "react";
import { TodosContext } from "../store/todos-context";
import classes from './NewTodo.module.css'


const NewTodo:React.FC = ()=>{
 const todosCtx= useContext(TodosContext);   
const todoRef=useRef<HTMLInputElement>(null);
const submitHandle= (event:React.FormEvent)=>{
event.preventDefault();
const enteredText=todoRef.current!.value;
if(enteredText.trim().length===0){
    return;
}
todosCtx.addTodo(enteredText);
}

return (
    <form onSubmit={submitHandle} className={classes.form}>
        <label htmlFor="text">Todo Text</label>
        <input type="text" id="text" ref={todoRef}/>
        <button>Add Todo</button>
    </form>
)

}

export default NewTodo;