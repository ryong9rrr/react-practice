import React, { useRef } from 'react'
import './NewTodo.css'

type NewTodoProps = {
  onSubmit: (text: string) => void
}

const NewTodo: React.FC<NewTodoProps> = ({ onSubmit }) => {
  const textInputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (textInputRef.current) {
      const enteredText = textInputRef.current.value
      onSubmit && onSubmit(enteredText)
      textInputRef.current.value = ''
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="todo-text">Todo Text</label>
        <input id="todo-text" ref={textInputRef} autoComplete="off" />
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  )
}

export default NewTodo
