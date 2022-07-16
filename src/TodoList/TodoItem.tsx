import { ChangeEvent } from 'react'
import { useRecoilState } from 'recoil'
import { todoListState } from './core/store'
import { Todo } from './core/types'

interface TodoItemProps {
  item: Todo
}

function TodoItem({ item }: TodoItemProps) {
  // getter, setter 둘다 가져오려면 useRecoilState()
  const [todoList, setTodoList] = useRecoilState(todoListState)
  const index = todoList.findIndex((listItem) => listItem === item)

  const editItemText = (e: ChangeEvent) => {
    const value = (e.target as HTMLInputElement).value
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value
    })

    setTodoList(newList)
  }

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete
    })

    setTodoList(newList)
  }

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index)

    setTodoList(newList)
  }

  return (
    <div>
      <input type="text" value={item.text} onChange={editItemText} />
      <input type="checkbox" checked={item.isComplete} onChange={toggleItemCompletion} />
      <button onClick={deleteItem}>X</button>
    </div>
  )
}

export default TodoItem

function replaceItemAtIndex(arr: Todo[], index: number, newValue: Todo) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)]
}

function removeItemAtIndex(arr: Todo[], index: number) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)]
}
