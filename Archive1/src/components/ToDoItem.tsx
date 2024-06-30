import { useContext } from "react"
import { ActionTypes, ITodo } from "../lib/types"
import { TodoContext } from "../lib/context"
import { deleteToDo, updateToDo } from "../lib/api"

interface Props{
    todo: ITodo
    id: string
}

export const ToDoItem:React.FC<Props> = ({todo, id}) => {

    const context = useContext(TodoContext)
    if(!context){
        throw new Error('Outside of a Provider...')
    }

    const {dispatch} = context

    const handleDelete = async () => {
        await deleteToDo(id)
        dispatch({ type: ActionTypes.remove, payload: id })
    }

    const handleDone = async () => {
        const updatedTodo = await updateToDo(id, { ...todo, completed: !todo.completed })
        dispatch({ type: ActionTypes.update, payload: updatedTodo })
    }

    return <div className={`item ${todo.completed ? 'completed': ''}`}>
        <p>{todo.text}</p>
        <div>
            <button onClick={handleDone}>done</button>
            <button onClick={handleDelete}>delete</button>
        </div>
    </div>
}