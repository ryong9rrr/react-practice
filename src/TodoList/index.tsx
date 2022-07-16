import React from 'react'
import { useRecoilValue } from 'recoil'
import { filteredTodoListState } from './core/store'
import { Todo } from './core/types'
import TodoItem from './TodoItem'
import TodoItemCreator from './TodoItemCreator'
import TodoListFilters from './TodoListFilters'
import TodoListStats from './TodoListStats'

const TodoList = () => {
  // 사용하는 쪽에서 readonly로 value를 가져옴
  const todoList = useRecoilValue<Todo[]>(filteredTodoListState)

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
