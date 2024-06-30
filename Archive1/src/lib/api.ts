import { ITodo } from "./types";
import axios from "axios";

const URL = 'http://localhost:3004/todos'

export const getAllTodos = async ():Promise<ITodo[]> => {
    const response = await axios.get(URL)
    return response.data
}

type InputTodo = Omit<ITodo, 'id'>

export const addToDo = async (obj:InputTodo):Promise<ITodo> => {
    const response = await axios.post(URL, obj)
    return response.data

}

export const deleteToDo = async(id: string):Promise<void> => {
    await axios.delete(`${URL}/${id}`)
}

export const updateToDo = async (id: string, updatedTodo: ITodo): Promise<ITodo> => {
    const response = await axios.put(`${URL}/${id}`, updatedTodo)
    return response.data
}

