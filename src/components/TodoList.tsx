import React from 'react'
import { Todo } from '../todo.model'
import './TodoList.css'

interface TodoListProps {
  items: Todo[]
  onRemove: (id: string) => void
}

// 이런식으로 제네릭을 사용할 수도 있음
const TodoList: React.FC<TodoListProps> = ({ items, onRemove }) => {
  return (
    <ul>
      {items.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={onRemove.bind(null, todo.id)}>DELETE</button>
        </li>
      ))}
    </ul>
  )
}

export default TodoList
