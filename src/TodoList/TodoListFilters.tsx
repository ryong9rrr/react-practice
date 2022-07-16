import { ChangeEvent } from 'react'
import { useRecoilState } from 'recoil'
import { todoListFilterState } from './core/store'
import { FilterOptions } from './core/types'

function TodoListFilters() {
  const [filter, setFilter] = useRecoilState(todoListFilterState)

  // 이렇게 쓰는게 맞나... 제네릭으로 FilterOptions로만 타입을 좁힐 수는 없을까?
  const updateFilter = (e: ChangeEvent) => {
    setFilter((e.target as HTMLSelectElement).value as FilterOptions)
  }

  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </>
  )
}

export default TodoListFilters
