import { ActionTypes, ITodo, type IAction, type IState } from "./types";

export const reducer = (state:IState, action:IAction) => {
    switch(action.type){

        case ActionTypes.put:
            return {
                ...state,
                todos: action.payload as ITodo[]
            }

        case ActionTypes.add:
            return {
                ...state, 
                todos: [...state.todos, action.payload as ITodo]
            }
        case ActionTypes.remove:
            return {
                ...state, 
                todos: state.todos.filter(x=>x.id != (action.payload as string))
            }
        case ActionTypes.update:
            return {
                ...state,
                todos: state.todos.map(todo => 
                    todo.id == (action.payload as ITodo).id ? (action.payload as ITodo) : todo
                )
            }
        default:
            return state
    }
}