import { TODO_FILTERS } from "./components/types/consts"

export interface Todo {
    id: string,
    title: string,
    completed: boolean
}

//Buena práctica a la hora de tratar con tipos primitivos.     
//PICK => elegir
//OMIT => omitir


export type TodoId = Omit<Todo, 'title' | 'completed'>
export type TodoTitle = Pick<Todo,'title'>
export type TodoCompleted = Pick<Todo,'completed'>

export type ListOfTodos = Todo[]
export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]