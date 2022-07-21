import React, { useState } from 'react'
import NewTodo from './components/NewTodo'
import TodoList from './components/TodoList'
import { Todo } from './todo.model'
import { makeRandomNumber } from './utils'

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  const handleSubmit = (text: string) => {
    const id = makeRandomNumber().toString()
    const newTodo: Todo = { id, text }
    setTodos((prevTodos) => [...prevTodos, newTodo])
  }

  const handleRemove = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId)
    })
  }

  return (
    <div className="App">
      <NewTodo onSubmit={handleSubmit} />
      <TodoList items={todos} onRemove={handleRemove} />
    </div>
  )
}

export default App
