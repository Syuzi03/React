import { useContext } from "react"
import { TodoContext } from "../lib/context"
import { ToDoItem } from "./ToDoItem"

export const List:React.FC = () => {
    const context = useContext(TodoContext)
    if(!context){
        throw new Error('Outside of a Provider...')
    }

    const {state} = context
    //console.log(state.todos)
    

    return <div className="list">
        {
            state.todos.map(todo => <ToDoItem key={todo.id} todo={todo} id={todo.id}/>)
        }
    </div>
}