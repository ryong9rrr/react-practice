import React from 'react'
import { useRecoilValue } from 'recoil'
import { filteredTodoListState } from './recoilSelector'
import TodoItem from './TodoItem'
import TodoItemCreator from './TodoItemCreator'
import TodoListFilters from './TodoListFilters'
import TodoListStats from './TodoListStats'

const TodoList = () => {
  // 사용하는 쪽에서는 useRecoilValue()
  const todoList = useRecoilValue(filteredTodoListState)

  return (
    <React.Fragment>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </React.Fragment>
  )
}

export default TodoList
