import { ChangeEvent, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { todoListState } from './core/store'

function TodoItemCreator() {
  const [inputValue, setInputValue] = useState('')
  // 값을 변경할 때는 useSetRecoilState()
  const setTodoList = useSetRecoilState(todoListState)

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false
      }
    ])
    setInputValue('')
  }

  const onChange = (e: ChangeEvent) => {
    setInputValue((e.target as HTMLInputElement).value)
  }

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  )
}

export default TodoItemCreator

// 고유한 Id 생성을 위한 유틸리티
let id = 0
function getId() {
  return id++
}
