import { useState } from 'react'
import { Todos } from './components/Todos'
import { FilterValue, TodoTitle, type TodoId, type Todo as TodoType } from './types'
import { TODO_FILTERS } from './components/types/consts'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

const mockTodos = [
    {
        id: '1',
        title: 'Tarea 1',
        completed: false
    },
    {
        id: '2',
        title: 'Tarea 2',
        completed: false
    },
    {
        id: '3',
        title: 'Tarea 3',
        completed: false
    }
]


export default function App() {

    const [todos, setTodos] = useState(mockTodos)
    const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

    // eliminar todo
    const handleRemove = ({ id }: TodoId) => {
        const newTodos = todos.filter(todo => todo.id !== id)
        setTodos(newTodos)
    }

    // indicar todo completado
    const handleComplete = (
        { id, completed }: Pick<TodoType, 'id' | 'completed'>
    ): void => {
        const newTodos = todos.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed
                }
            }

            return todo;
        })

        setTodos(newTodos)
    }

    // 
    const handleFilterChange = (filter: FilterValue): void => {
        setFilterSelected(filter)
    }

    const handleRemoveAllCompleted = () => {
        const newTodos = todos.filter(todo => !todo.completed)
        setTodos(newTodos)
    }


    const activeCount = todos.filter(todo => !todo.completed).length
    const completedCount = todos.length - activeCount

    const filterTodos = todos.filter(todo => {
        if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
        if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
        return todo
    })

    const handleAddTodo = ({ title }: TodoTitle): void => {

        const newTodo = {
            title,
            id: crypto.randomUUID(),
            completed: false
        }

        const newTodos = [...todos, newTodo]
        setTodos(newTodos)
    }

    return (
        <div className='todoapp'>
            <Header onAddTodo={handleAddTodo} />
            <Todos
                todos={filterTodos}
                onRemoveTodo={handleRemove}
                onToggleCompleteTodo={handleComplete}
            />
            <Footer
                activeCount={activeCount}
                completedCount={completedCount}
                filterSelected={filterSelected}
                onClearCompleted={handleRemoveAllCompleted}
                handleFilterChange={handleFilterChange}
            />
        </div>
    )
}